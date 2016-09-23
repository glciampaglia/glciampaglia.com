#!/usr/bin/env python3

import os
import re
import json
import datetime
import argparse
import contextlib

try:
    import frontmatter
except ImportError:
    import sys
    print("""Error: could not import python-frontmatter. Please install it with:

    pip install python-frontmatter

Aborting.""", file=sys.stderr)
    sys.exit(-1)

try:
    import toml
except ImportError:
    import sys
    print("""Error: could not import toml. Please install it with:

    pip install toml

Aborting.""", file=sys.stderr)
    sys.exit(-1)


empty = """
+++
date = {date!r}
publication = {journal!r}
publication_short = ""
title = {title!r}
+++
"""

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('input',
                    type=argparse.FileType(),
                    help='bibliography in JSON format')
parser.add_argument('-d', '--directory', default='content/publication/')
parser.add_argument('-t', '--test', action='store_true',
                    help='Prepend TEST- to new publications')


def slugify(title, maxlen=30):
    slug = title.lower()
    slug = re.sub('<[^>]*>', '', slug)
    slug = re.sub('\W+', '-', slug, flags=re.U) #.encode('ascii', errors='xmlcharrefreplace')
    slug_words = slug.split('-')
    s = slug_words[0]
    for w in slug_words[1:]:
        if len(s + '-' + w) > maxlen:
            break
        s += '-' + w
    return s


class Publication(object):
    def __init__(self, post=None):
        if post:
            self.metadata = dict(post.metadata)
            self.content = post.content
        else:
            self.metadata = {}
            self.content = ""
    def updatefromjson(self, json):
        m = self.metadata
        m['abstract'] = json.get('abstract', "")
        m['short_abstract'] = json.get('short_abstract', "")
        m['authors'] = self._authors(json.get('author', []))
        m['date'] = self._date(json['issued'])
        m['publication'] = json.get('container-title', "")
        m['publication'] = re.sub('<[^>]*>', '', m['publication'])
        m['publication-short'] = json.get('collection-title')
        m['title'] = json.get('title', "")
        m['title'] = re.sub('<[^>]*>', '', m['title'])
        m['math'] = json.get('math', 'true')
        m['selected'] = json.get('selected', 'false')
        m['image'] = json.get('image', "")
        m['image_preview'] = json.get('image_preview', "")
        m['url_code'] = json.get('url_code', "")
        m['url_dataset'] = json.get('url_dataset', "")
        m['url_pdf'] = json.get('url_pdf', "")
        m['url_project'] = json.get('url_project', "")
        m['url_slides'] = json.get('url_slides', "")
        m['url_video'] = json.get('url_video', "")
        m['[url_custom]'] = []
        for k in ['URL', 'DOI']:
            if k in json:
                self._add_custom_url(k, json[k])
        return self
    def _add_custom_url(self, name, url):
        m = self.metadata
        m['[url_custom]'].append({'name': name, 'url': url})
    def _date(self, issued):
        this_year = datetime.date.today().year
        the_year = issued.get('date-parts', [[this_year]])[0][0]
        return '{}-01-01'.format(the_year)
    def _authors(self, authors):
        l = []
        for a in authors:
            last_name = a['family']
            given_names = a['given'].split(' ')
            initials = ''.join(map(lambda k: k[0], given_names))
            l.append("{} {}".format(initials.upper(), last_name.title()))
        return l


def main():
    args = parser.parse_args()
    obj = json.load(args.input)
    pubs = []

    for ref in obj:
        slug = slugify(ref['title'])
        if args.test:
            fn = 'TEST-' + slug + '.md'
        else:
            fn = slug + '.md'
        path = os.path.join(args.directory, fn)
        if os.path.exists(path):
            # update existing metada
            pub = Publication(frontmatter.load(path))
            print('* updated: {}'.format(path))
        else:
            # create new publication
            pub = Publication()
            print('* created: {}'.format(path))
        pub.updatefromjson(ref)
        body = """
+++
{frontmatter}
+++

{content}
""".format(frontmatter=toml.dumps(pub.metadata), content=pub.content)
        with contextlib.closing(open(path, 'w')) as f:
            print(body, file=f)
        pubs.append(pub)
    return pubs



if __name__ == '__main__':
    pubs = main()
