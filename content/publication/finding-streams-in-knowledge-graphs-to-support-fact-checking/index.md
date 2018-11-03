+++
title = "Finding Streams in Knowledge Graphs to Support Fact Checking"
date = 2017-08-24
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = [
    "Prashant Shiralkar",
    "Alessandro Flammini",
    "Filippo Menczer",
    "Giovanni Luca Ciampaglia"
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
publication = "Proceedings of the 2017 IEEE 17th International Conference on Data Mining"
publication_short = "ICDM"

# Abstract and optional shortened version.
abstract = """ The volume and velocity of information that gets generated
online limits current journalistic practices to fact-check claims at the
same rate. Computational approaches for fact checking may be the key to
help mitigate the risks of massive misinformation spread. Such approaches
can be designed to not only be scalable and effective at assessing veracity
of dubious claims, but also to boost a human fact checker's productivity by
surfacing relevant facts and patterns to aid their analysis. To this end,
we present a novel, unsupervised network-flow based approach to determine
the truthfulness of a statement of fact expressed in the form of a
(subject, predicate, object) triple. We view a knowledge graph of
background information about real-world entities as a flow network, and
knowledge as a fluid, abstract commodity. We show that computational fact
checking of such a triple then amounts to finding a "knowledge stream" that
emanates from the subject node and flows toward the object node through
paths connecting them. Evaluation on a range of real-world and hand-crafted
datasets of facts related to entertainment, business, sports, geography and
more reveals that this network-flow model can be very effective in
discerning true statements from false ones, outperforming existing
algorithms on many test cases. Moreover, the model is expressive in its
ability to automatically discover several useful path patterns and surface
relevant facts that may help a human fact checker corroborate or refute a
claim. """

abstract_short = """The volume and velocity of information that gets generated
online limits current journalistic practices to fact-check claims at the
same rate. Computational approaches for fact checking may be the key to
help mitigate the risks of massive misinformation spread. [...]"""

# Does this page contain LaTeX math? (true/false)
math = false

# Does this page require source code highlighting? (true/false)
highlight = true

# Is this a selected publication? (true/false)
selected = true

projects = ['computational-fact-checking']

# Links (optional)
url_pdf = "https://arxiv.org/abs/1708.07239"
url_code = "https://github.com/shiralkarprashant/knowledgestream"
url_dataset = "https://github.com/shiralkarprashant/knowledgestream"
url_project = ""
url_slides = ""
url_video = ""

[image]
  caption = "Relevant facts about a target claim as surfaced by Knowledge Stream."
  focal_point = "Smart"

+++
