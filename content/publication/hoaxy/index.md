+++
title = "Hoaxy: A Platform for Tracking Online Misinformation"
date = 2016-02-16
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = [
    "Chengcheng Shao",
    "Giovanni Luca Ciampaglia",
    "Alessandro Flammini",
    "Filippo Menczer",
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
publication = "Proceedings of the 25th International Conference Companion on World Wide Web"
publication_short = "WWW'16 Companion"

# Abstract and optional shortened version.
abstract = """
Massive amounts of misinformation have been observed to spread in
uncontrolled fashion across social media. Examples include rumors, hoaxes,
fake news, and conspiracy theories. At the same time, several journalistic
organizations devote significant efforts to high-quality fact checking of
online claims. The resulting information cascades contain instances of both
accurate and inaccurate information, unfold over multiple time scales, and
often reach audiences of considerable size. All these factors pose
challenges for the study of the social dynamics of online news sharing.
Here we introduce Hoaxy, a platform for the collection, detection, and
analysis of online misinformation and its related fact-checking efforts. We
discuss the design of the platform and present a preliminary analysis of a
sample of public tweets containing both fake news and fact checking. We
find that, in the aggregate, the sharing of fact-checking content typically
lags that of misinformation by 10-20 hours. Moreover, fake news are
dominated by very active users, while fact checking is a more grass-roots
activity. With the increasing risks connected to massive online
misinformation, social news observatories have the potential to help
researchers, journalists, and the general public understand the dynamics of
real and fake news sharing. """
abstract_short = ""

# Does this page contain LaTeX math? (true/false)
math = true

# Does this page require source code highlighting? (true/false)
highlight = true

# Is this a selected publication? (true/false)
selected = false

projects = ["hoaxy"]

# Links (optional)
url_pdf = "https://doi.org/10.1145/2872518.2890098"
url_code = "https://github.com/IUNetSci/hoaxy-backend.git"
url_dataset = "https://market.mashape.com/truthy/hoaxy"
url_project = "https://hoaxy.iuni.iu.edu/"
url_slides = ""
url_video = "https://www.youtube.com/watch?v=YoO7DDMvhUQ"

[image]
caption = "Lagged cross correlation (Pearson's $r$) between news sharing activity of misinformation and fact-checking, with peak value at ${\\rm lag}=-13$ hours."
focal_point = "Center"

+++
