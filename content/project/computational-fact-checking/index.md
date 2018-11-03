+++
date = "2016-09-13T17:38:40-04:00"
math = false
summary = "Computational fact checking from knowledge networks"
tags = ["dbpedia", "fact-checking"]
title = "Computational Fact-checking"

[image]
  caption = ""
  focal_point = "Center"
+++

## Description

Traditional fact checking by expert journalists cannot keep up with the enormous volume of information that is now generated online. Computational fact checking may significantly enhance our ability to evaluate the veracity of dubious information. We have shown that the complexities of human fact checking can be approximated quite well by finding the shortest path between concept nodes under properly defined semantic proximity metrics on knowledge graphs.

In follow-up work, we have extended this approach along two avenues. The first involves treating the knowledge graph as a flow network. In this setting a compact representation of the most relevant facts related to a subject-predicate-object triple can be extracted by solving a mininimum-cost flow problem. The second is about modifying the semantic proximity metrics to make it aware of the predicate query being searched. A data-driven approach based on the concept of line graph was proposed and evaluated, both on the original shortest path approach (Knowledge Linker, Relational Knowledge Linker), and on the following network flow approach (Knowledge Stream). This approach can also be used for related tasks, for example scoring triples for relevance ranking (RelSifter).  

Ongoing work is focusing on applying these knowledge graph reasoning tools to the problem of modeling realistic claims and fact-checks extracted from the Web. This method, named FactCheckGraph, will constitute the basis for the development of user-friendly tools that will allow a reporter to connect new claims, articles, and fact-checks to existing knowledge graphs and to the sources of the claims, which are often not identified by fact-checkers. In turn, this data can be leveraged to develop automated credibility metrics for sources.

## Software

* [Knowledge Linker <sup><i class="fas fa-external-link-alt"></i></sup>](//github.com/glciampaglia/knowledge_linker)
* [Knowledge Stream <sup><i class="fas fa-external-link-alt"></i></sup>](//github.com/shiralkarprashant/knowledgestream)
* [RelSifter <sup><i class="fas fa-external-link-alt"></i></sup>](//github.com/shiralkarprashant/samphire), aka the Samphire Triple Scorer at the [2017 WSDM Cup](//wsdm-cup-2017.org).

## Collaborators

* [Prashant Shiralkar](https://sites.google.com/site/shiralkarprashant/) (Amazon Research),
* [Filippo Menczer](//cnets.indiana.edu/fil) (Indiana University),
* [Alessandro Flammini](//cnets.indiana.edu/aflammin) (Indiana University)
* [Johan Bollen](https://www.informatics.indiana.edu/jbollen/) (Indiana University),
* [Luis Rocha](https://www.informatics.indiana.edu/rocha/) (Indiana University),
* [Mihai Avram](https://pages.iu.edu/~mavram/) (Indiana University),
* [Zoher Kachwala](https://www.linkedin.com/in/zoher-kachwala/) (Indiana University).

## Funding

FactCheckGraph is supported by a grant from [Craig Newmark Philantropies](https://craignewmarkphilanthropies.org/). Knowledge Linker was partially supported by the Swiss National Science Foundation ([project no. 142353](http://p3.snf.ch/project-142353)).
