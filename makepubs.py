#!/usr/bin/env python3

import os
import re
import datetime
import argparse
import contextlib

# external dependencies
import toml
import bibtexparser

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('bibliography',
                    type=argparse.FileType(),
                    help='bibliography in bibtex format')
parser.add_argument('-d', '--destination', help='default: %(default)s',
                    default='content/publication/')
parser.add_argument('-t', '--test', action='store_true',
                    help='Prepend TEST- to created files')
parser.add_argument('-f', '--force-overwrite', action='store_true',
                    help='Overwrite any existing file.')


def slugify(title, maxlen=30):
    """
    Transform a text into a slug string
    """
    slug = title.lower()
    slug = re.sub('[{}]', '', slug)
    slug = re.sub('\W+', '-', slug, flags=re.U) #.encode('ascii', errors='xmlcharrefreplace')
    slug_words = slug.split('-')
    s = slug_words[0]
    for w in slug_words[1:]:
        if len(s + '-' + w) > maxlen:
            break
        s += '-' + w
    return s


class TOMLPublication(object):
    _fields = {
        'abstract': str,
        'short_abstract': str,
        'authors': list,
        'date': str,
        'publication': str,
        'publication_short': str,
        'title': str,
        'math': bool,
        'selected': bool,
        'image': str,
        'image_preview': str,
        'url_code': str,
        'url_pdf': str,
        'url_project': str,
        'url_slides': str,
        'url_video': str,
    }
    def __init__(self, entry):
        self.entry = entry
        self.slug = slugify(entry['title'])
        self.frontmatter = {}
        fmat = self.frontmatter
        for k, f in self._fields.items():
            fmat[k] = f()
        self._set_date()
        self._set_authors()
        self._set_url_custom()
        fill_method = getattr(self, '_fill_' + entry['ENTRYTYPE'])
        fill_method()
        fmat['title'] = re.sub('[{}]', '', fmat['title'])
    def totoml(self):
        return toml.dumps(self.frontmatter)
    def _set_authors(self):
        fmat = self.frontmatter
        author_string = self.entry['author']
        author_string = re.sub('[{}]', '', author_string)
        fmat['authors'] = re.split(' and ', author_string, flags=re.I)
        authors = fmat['authors']
        for i in range(len(authors)):
            a = authors[i].strip()
            names = a.split(',')
            if len(names) > 1:
                last_name, given_name = names
                authors[i] = given_name + ' ' + last_name
    def _set_date(self):
        today = datetime.date.today()
        year = self.entry.get('year', today.year)
        month = self.entry.get('month', 'Jan')
        s = '{} {}'.format(year, month)
        flag = False
        for monthfmt in ['%m', '%b', '%B']:
            fmt = '%Y ' + monthfmt
            try:
                d = datetime.datetime.strptime(s, fmt).date()
            except ValueError:
                pass
            else:
                flag = True
                break
        if not flag:
            raise ValueError("could not parse: {}".format(s))
        self.frontmatter['date'] = str(d)
    def _set_url_custom(self):
        if 'link' in self.entry:
            self.frontmatter['url_custom'] = []
            section = self.frontmatter['url_custom']
            for link_dict in self.entry['link']:
                if 'anchor' not in link_dict:
                    continue
                section.append({'name': link_dict['anchor'],
                                'url': link_dict['url']})
    def _fill_article(self):
        fm = self.frontmatter
        e = self.entry
        fm['title'] = e['title']
        fm['publication'] = e['journal']
    def _fill_inbook(self):
        fm = self.frontmatter
        e = self.entry
        fm['title'] = e['chapter']
        fm['publication'] = e['title']
    def _fill_inproceedings(self):
        fm = self.frontmatter
        e = self.entry
        fm['title'] = e['title']
        fm['publication'] = e['booktitle']
    def _fill_mastersthesis(self):
        fm = self.frontmatter
        e = self.entry
        fm['title'] = e['title']
        fm['publication'] = e['school']
    def _fill_phdthesis(self):
        fm = self.frontmatter
        e = self.entry
        fm['title'] = e['title']
        fm['publication'] = e['school']
    def _fill_misc(self):
        fm = self.frontmatter
        e = self.entry
        fm['title'] = e['title']
        fm['publication'] = e['note']
    def _fill_unpublished(self):
        fm = self.frontmatter
        e = self.entry
        fm['title'] = e['title']
        fm['publication'] = "Unpublished"
    def dumps(self):
        return "+++\n{}\n+++".format(self.totoml())
    def dump(self, path):
        with open(path, 'w') as f:
            f.write(self.dumps())


def _customizations(r):
    import bibtexparser.customization as cust
    r = cust.convert_to_unicode(r)
    r = cust.link(r)
    r = cust.doi(r)
    return r


def main():
    args = parser.parse_args()
    bibparser = bibtexparser.bparser.BibTexParser()
    bibparser.customization = _customizations
    with contextlib.closing(args.bibliography) as f:
        db = bibtexparser.load(f, parser=bibparser)
    for entry in db.entries:
        pub = TOMLPublication(entry)
        if args.test:
            fn = 'TEST-' + pub.slug + '.md'
        else:
            fn = pub.slug + '.md'
        path = os.path.join(args.destination, fn)
        if os.path.exists(path) and not args.force_overwrite:
            # file exists and user does not want to overwrite (default)
            continue
        else:
            # file does not exist OR
            # file exists and user wants to overwrite
            pub.dump(path)
            print('* written: {}'.format(path))

if __name__ == '__main__':
    main()
