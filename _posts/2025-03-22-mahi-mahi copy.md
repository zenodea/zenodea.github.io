---
title: "Cordial Miners"
last_modified_at: 2025-03-22T14:30:45+00:00
categories:
  - Write-Ups
tags:
  - Cryptocurrencies
  - Consensus
---
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>


<link rel="stylesheet" type="text/css" href="http://tikzjax.com/v1/fonts.css">
<script src="https://tikzjax.com/v1/tikzjax.js"></script>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      displayMath: [['$$','$$'], ['\\[','\\]']],
      processEscapes: true
    },
    TeX: {
      equationNumbers: { autoNumber: "AMS" }
    }
  });
</script>
This write-up marks the beginning of my series on Directed Acyclic Graph (DAG) based consensus protocols. My research project has led me to read many consensus protocols, but the one that I wanted to start with was a protocol named Cordial Miners. I have not found many articles on this protocol, rather, most of the popularity has gone into its spiritial successor, Mysticeti-C and Mahi-Mahi. So, I wanted to shed some light on the protocol that allowed those two to come to fruition. Before delving into this write-up, I would reccomend familiarising yourself with DAG-based consenus protocols (Tusk, Bullshark, etc...), as they differ in many ways compared to more traditional blockchains (HotStuff, etc...).

## Uncertified DAG-Based Consensus Protocols
The term uncertified DAG-Based consensus protocol was first coined by the Mysticeti protocol, but it applies very well to Cordial Miners as well. Usually, blocks proposed by validators need to be certified, meaning that $2f+1$ validators require to validate and sign the block. Protocols that utilise Narhwal, for example, for transaction dissemination utilise certified blocks. In theory, this is good for a couple of reasons: Bullshark only requires a 2-message delay to commit a leader block and **equivocation** is simply not possible with certified blocks. Blocks will not receive the $2f+1$ votes required to certify a block due to **quorum intersection**.

**Quorum Intersection** : A fancy way to say that two validators will always have at least one validator in common. 

Cordial Miners instead realises that certificates can be implicitly viewed within the DAG structure. It's better to understand this via graphical representations:

<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/main.svg" alt="Description" class="responsive-svg inverted">
</div>

<style>
  .svg-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .responsive-svg {
    max-width: 100%;
    height: auto;
  }
  
  .inverted {
    filter: invert(100%);
  }
</style>



 


