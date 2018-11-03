+++
title = "Cross-Domain Gender Detection in Twitter"
date = 2016-11-14
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = [
    "Mohsen Sayyadiharikandeh", 
    "Giovanni Luca Ciampaglia", 
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
publication = "Proceedings of the Workshop on Computational Approaches to Social Modeling (ChASM 2016)"
publication_short = "Proc. ChASM'2016"

# Abstract and optional shortened version.
abstract = """Unstructured textual data from online profiles is often used in conjunction
with other user metadata to mine, in a supervised fashion, the latent
demographic attributes of social media users (e.g. age, gender,
occupation).   Supervised methods, however, require labeled training data,
which are often expensive to generate, and thus it would be attractive to
re-use models across different domains and groups, i.e. training on a
labeled dataset in order to mine the same latent attributes in those
datasets for which training labels are missing. However, online
conversations are often influenced by a myriad of topics and other factors,
such as external events, and thus not all the features generated from this
kind of data may perform well in a cross-domain setting. Here we study
which of the features commonly found in public user profiles are portable
across domains. As benchmark we focus on the very common task of detecting
the gender of Twitter users from their public profile information ---
tweets, screen name, and profile picture. Our approach, based on a boosted
stacked classifier, outperforms the state of the art in the task. Using
data from two very different samples of Twitter users --- one drawn from
the public random stream and one about a recent social movement --- we show
that screen name and profile picture generalize across domains well, while
text does not. Social media platforms have become attractive sources of
data for computational approaches to social modeling, mainly due to their
rapid growth and for the surprising ability to offer insight into
real-world phenomena. Cross-domain user mining methods can help
computational social science research by providing a richer and more
accurate context to social phenomena."""

abstract_short = ""

# Does this page contain LaTeX math? (true/false)
math = false

# Does this page require source code highlighting? (true/false)
highlight = true

# Is this a selected publication? (true/false)
selected = false

# Links (optional)
url_pdf = "/docs/papers/genderdetection_chasm.pdf"
url_code = ""
url_dataset = ""
url_project = ""
url_slides = "/docs/slides/Chasm2016-presentation.pptx.pdf"
url_video = ""

+++
