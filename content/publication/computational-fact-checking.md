+++
title = "Computational Fact Checking from Knowledge Networks"
date = 2015-06-17
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Giovanni Luca Ciampaglia", "Prashant Shiralkar", "Luis M. Rocha",
"Johan Bollen", "Filippo Menczer", "Alessandro Flammini"]

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
publication = "PLOS ONE **10** p. 1-13"
publication_short = ""

# Abstract and optional shortened version.
abstract = """Traditional fact checking by expert journalists cannot keep up
with the enormous volume of information that is now generated online.
Computational fact checking may significantly enhance our ability to evaluate
the veracity of dubious information. Here we show that the complexities of human
fact checking can be approximated quite well by finding the shortest path
between concept nodes under properly defined semantic proximity metrics on
knowledge graphs. Framed as a network problem this approach is feasible with
efficient computational techniques. We evaluate this approach by examining tens
of thousands of claims related to history, entertainment, geography, and
biographical information using a public knowledge graph extracted from
Wikipedia. Statements independently known to be true consistently receive higher
support via our method than do false ones. These findings represent a
significant step toward scalable computational fact-checking methods that may
one day mitigate the spread of harmful misinformation."""

abstract_short = """ Traditional fact checking by expert journalists cannot keep
up with the enormous volume of information that is now generated online. """

# Does this page contain LaTeX math? (true/false)
math = false

# Does this page require source code highlighting? (true/false)
highlight = true

# Featured image thumbnail (optional)
image_preview = ""

# Is this a selected publication? (true/false)
selected = false

# Links (optional)
url_pdf = "https://doi.org/10.1371/journal.pone.0128193"
url_code = "https://github.com/glciampaglia/knowledge_linker"
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = "headers/journal.pone.0128193.g003.png"
caption = """Fig 3. Automatic truth assessments for simple factual statements.
In each confusion matrix, rows represent subjects and columns represent objects.
The diagonals represent true statements. Higher truth values are mapped to
colors of increasing intensity. (a) Films winning the Oscar for Best Movie and
their directors, grouped by decade of award (see the complete list in the S1
Text). (b) US presidents and their spouses, denoted by initials."""

+++

# BibTeX
```bibtex
@Article{Ciampaglia2015b,
  Title                    = {Computational Fact Checking from Knowledge Networks},
  Author                   = {Ciampaglia, Giovanni Luca AND Shiralkar, Prashant AND Rocha, Luis M. AND Bollen, Johan AND Menczer, Filippo AND Flammini, Alessandro},
  Journal                  = {PLOS ONE},
  Year                     = {2015},

  Month                    = {06},
  Number                   = {6},
  Pages                    = {1-13},
  Volume                   = {10},

  Abstract                 = {Traditional fact checking by expert journalists cannot keep up with the enormous volume of information that is now generated online. Computational fact checking may significantly enhance our ability to evaluate the veracity of dubious information. Here we show that the complexities of human fact checking can be approximated quite well by finding the shortest path between concept nodes under properly defined semantic proximity metrics on knowledge graphs. Framed as a network problem this approach is feasible with efficient computational techniques. We evaluate this approach by examining tens of thousands of claims related to history, entertainment, geography, and biographical information using a public knowledge graph extracted from Wikipedia. Statements independently known to be true consistently receive higher support via our method than do false ones. These findings represent a significant step toward scalable computational fact-checking methods that may one day mitigate the spread of harmful misinformation.},
  Doi                      = {10.1371/journal.pone.0128193},
  Publisher                = {Public Library of Science},
  Url                      = {https://doi.org/10.1371/journal.pone.0128193}
}
```
