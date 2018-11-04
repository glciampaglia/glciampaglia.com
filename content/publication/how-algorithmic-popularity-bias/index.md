+++
title = "How algorithmic popularity bias hinders or promotes quality"
date = 2018-11-03
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = [
    "Giovanni Luca Ciampaglia",
    "Azadeh Nematzadeh",
    "Filippo Menczer",
    "Alessandro Flammini",
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
publication_types = ["2"]

# Publication name and optional abbreviated version.
publication = "Scientific Reports 8(1), p. 15951"
publication_short = "Sci. Rep. 8(1) p. 15951"

# Abstract and optional shortened version.
abstract = """ Algorithms that favor popular items are used to help us select among many choices, from top-ranked search engine results to highly-cited scientific papers. The goal of these algorithms is to identify high-quality items such as reliable news, credible information sources, and important discoveries-in short, high-quality content should rank at the top. Prior work has shown that choosing what is popular may amplify random fluctuations and lead to sub-optimal rankings. Nonetheless, it is often assumed that recommending what is popular will help high-quality content “bubble up” in practice. Here we identify the conditions in which popularity may be a viable proxy for quality content by studying a simple model of a cultural market endowed with an intrinsic notion of quality. A parameter representing the cognitive cost of exploration controls the trade-off between quality and popularity. Below and above a critical exploration cost, popularity bias is more likely to hinder quality. But we find a narrow intermediate regime of user attention where an optimal balance exists: choosing what is popular can help promote high-quality items to the top. These findings clarify the effects of algorithmic popularity bias on quality outcomes, and may inform the design of more principled mechanisms for techno-social cultural markets."""

abstract_short = """ """

# Does this page contain LaTeX math? (true/false)
math = true

# Does this page require source code highlighting? (true/false)
highlight = true

# Is this a selected publication? (true/false)
selected = false

doi = "10.1038/s41598-018-34203-2"

# Links (optional)
url_pdf = "https://www.nature.com/articles/s41598-018-34203-2"
url_code = ""
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""

[image]
  caption = """ **Effects of popularity bias on average quality and faithfulness from model simulations.** (*a*) Heatmap of average quality $\\bar{q}$ as a function of $\\alpha$ and $\\beta$, showing that popularity bias can either hinder or promote average quality depending on exploration cost. (*b*) The location of the maximum $\\bar{q}$ as a function of $\\beta$ depends on $\\alpha$, here shown for $\\alpha = 0, 1, 2$. When $\\alpha = 1$ an intermediate amount of popularity bias is optimal. (*c*) Faithfulness $\\tau$ of the algorithm as a function of $\\alpha$ and $\\beta$. (*d*) $\\tau$ as a function of $\\beta$ for the same three values of $\\alpha$. Standard errors are shown in panels ({b,d}) and are smaller than the markers if not visible."""
  focal_point = "TopLeft"

+++
