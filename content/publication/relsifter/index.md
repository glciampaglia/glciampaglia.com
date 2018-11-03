+++
title = "RelSifter: Scoring Triples from Type-like Relations---The Samphire Triple Scorer at WSDM Cup 2017"
date = "2017-02-10"
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = [
"Prashant Shiralkar",
"Mihai Avram",
"Giovanni Luca Ciampaglia",
"Filippo Menczer",
"Alessandro Flammini"
]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference proceedings
# 2 = Journal
# 3 = Work in progress
# 4 = Technical report
# 5 = Book
# 6 = Book chapter
publication_types = ["1"]

# Publication name and optional abbreviated version.
publication = "WSDM Cup 2017 Notebook Papers, February 10, Cambridge, UK"
publication_short = "Proc. of WSDM Cup 2017"

# Abstract and optional shortened version.
abstract = """We present RelSifter, a supervised learning approach to the
problem of assigning relevance scores to triples expressing type-like relations
such as 'profession' and 'nationality.' To provide additional contextual
information about individuals and relations we supplement the data provided as
part of the WSDM 2017 Triple Score contest with Wikidata and DBpedia, two
large-scale knowledge graphs (KG). Our hypothesis is that any type relation,
i.e., a specific profession like 'actor' or 'scientist,' can be described by the
set of typical \"activities\" of people known to have that type relation. For
example, actors are known to star in movies, and scientists are known for their
academic affiliations. In a KG, this information is to be found on a properly
defined subset of the second-degree neighbors of the type relation. This form of
local information can be used as part of a learning algorithm to predict
relevance scores for new, unseen triples. When scoring 'profession' and
'nationality' triples our experiments based on this approach result in an
accuracy equal to 73% and 78%, respectively. These performance metrics are
roughly equivalent or only slightly below the state of the art prior to the
present contest. This suggests that our approach can be effective for evaluating
facts, despite the skewness in the number of facts per individual mined from
KGs.""" 
abstract_short = ""

# Does this page contain LaTeX math? (true/false)
math = false

# Does this page require source code highlighting? (true/false)
highlight = false

# Is this a selected publication? (true/false)
selected = false

# Links (optional)
url_pdf = "http://www.uni-weimar.de/medien/webis/events/wsdm-cup-17/wsdmcup17-papers-final/wsdmcup17-triple-scoring/shiralkar17-notebook.pdf"
url_code = "https://github.com/wsdm-cup-2017/samphire"
url_dataset = "http://www.wsdm-cup-2017.org/triple-scoring.html"
url_project = ""
url_slides = ""
url_video = ""

# # Featured image
# # Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
# [header]
# image = "headers/actor-activities.png"
# caption = """In this example from DBpedia, *starring* is an activity pertinent to the profession *Actor*."""
 
+++

This work competed for the WSDM 2017 cup in the 'Triple Scoring' task. For more
information, please refer to the [official website](http://www.wsdm-cup-2017.org/) of the cup.

## BibTeX

```bibtex
@InProceedings{Shiralkar2017,
  Title                    = {{RelSifter: Scoring Triples from Type-like Relations---The Samphire Triple Scorer at WSDM Cup 2017}},
  Author                   = {Prashant Shiralkar and Mihai Avram and {Giovanni Luca} Ciampaglia and Filippo Menczer and Alessandro Flammini},
  Booktitle                = {{WSDM Cup 2017 Notebook Papers, February 10, Cambridge, UK}},
  Year                     = {2017},
  Editor                   = {Martin Potthast and Stefan Heindorf and Hannah Bast},
  Month                    = feb,
  Publisher                = {CEUR-WS.org},

  Crossref                 = {wsdmcup:2017},
  ISSN                     = {1613-0073},
  Url                      = {http://www.wsdm-cup-2017.org/proceedings.html}
}
```

