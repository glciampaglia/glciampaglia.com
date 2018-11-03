+++
title = "An Ant Colony Verification Algorithm"
date = 2007-10-22
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Rachid Rebiha", "Giovanni Luca Ciampaglia"]

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
publication = "Proceedings of Seventh Intl Conf. on Intelligent Systems Design and Applications (ISDA 2007)"
publication_short = "Proc. of ISDA'07"

# Abstract and optional shortened version.
abstract = """Büchi automata are widely used as a modeling formalism in
formal verification. The emptiness check procedure is used to carry on the
model checking of a model $\\mathcal{M}$ of a system, against an LTL formula
$\\phi$, that expresses the desidered properties the system should satisfy.
Algorithms for the emptiness check on Büchi automata are able to find a
faulty computation, if the language accepted by the automaton of the
synchronized product of $\\mathcal{M}$ and $\\phi$ is non empty. Nonetheless,
these algorithms don't perform any optimization on such solution. In this
paper we propose an ant colony optimization algorithm for the emptiness
check of a subclass of Büchi automata, that runs on-the-fly, that is
without storing the whole digraph of the automaton in main memory, thus
avoiding the problem of exponential growth of the state space. Our approach
features a non standard search strategy, with the capability for artificial
ants to backtrack during the constructive search, and to modify the graph
of the automaton, by removing parts of it when no longer interesting for
exploration."""

abstract_short = ""

# Does this page contain LaTeX math? (true/false)
math = true

# Does this page require source code highlighting? (true/false)
highlight = true

# Is this a selected publication? (true/false)
selected = false

# Links (optional)
url_pdf = "https://doi.org/10.1109/ISDA.2007.63"
url_code = ""
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""

+++

## BibTeX
```bibtex
@InProceedings{Rebiha2007,
  Title                    = {An Ant Colony Verification Algorithm},
  Author                   = {Rebiha, Rachid and Ciampaglia, Giovanni Luca},
  Booktitle                = {Proc. of Seventh Intl Conf. on Intelligent Systems Design and Applications (ISDA 2007)},
  Year                     = {2007},
  Pages                    = {901--906},

  Abstract                 = {B\"uchi automata are widely used as a modeling formalism in formal verification. The emptiness check procedure is used to carry on the model checking of a model $\mathcal{M}$ of a system, against an LTL formula $\phi$, that expresses the desidered properties the system should satisfy. Algorithms for the emptiness check on B\"uchi automata are able to find a faulty computation, if the language accepted by the automaton of the synchronized product of $\mathcal{M}$ and $\phi$ is non empty. Nonetheless, these algorithms don't perform any optimization on such solution. In this paper we propose an ant colony optimization algorithm for the emptiness check of a subclass of B\"uchi automata, that runs on-the-fly, that is without storing the whole digraph of the automaton in main memory, thus avoiding the problem of exponential growth of the state space. Our approach features a non standard search strategy, with the capability for artificial ants to backtrack during the constructive search, and to modify the graph of the automaton, by removing parts of it when no longer interesting for exploration.},
  Doi                      = {10.1109/ISDA.2007.63},
  Keywords                 = {ant colony, formal verification}
}
```
