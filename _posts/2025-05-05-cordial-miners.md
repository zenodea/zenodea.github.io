---
title: "Cordial Miners"
last_modified_at: 2025-05-05T14:30:45+00:00
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
This write-up marks the beginning of my series on Directed Acyclic Graph (DAG) based consensus protocols. My research project has led me to read many consensus protocols, but the one that I wanted to start with was a protocol named Cordial Miners. I have not found many articles on this protocol, rather, most of the popularity has gone into its "spiritial successor", Mysticeti-C and Mahi-Mahi. So, I wanted to shed some light on the protocol that allowed those two to come to fruition. Before delving into this write-up, I would reccomend familiarising yourself with DAG-based consenus protocols (Tusk, Bullshark, etc...), as they differ in many ways compared to more traditional blockchains (HotStuff, etc...).

## Uncertified DAG-Based Consensus Protocols
The term uncertified DAG-Based consensus protocol was first coined by the Mysticeti protocol, but it applies very well to Cordial Miners as well. Usually, blocks proposed by validators need to be certified, meaning that $2f+1$ validators require to validate and sign the block. Protocols that utilise Narhwal, for example, for transaction dissemination utilise certified blocks. In theory, this is good for a couple of reasons: Bullshark only requires a 2-message delay to commit a leader block and **equivocation** is simply not possible with certified blocks. Blocks will not receive the $2f+1$ votes required to certify a block due to **quorum intersection**.


**Quorum Intersection** : A fancy way to say that two validators will always have at least one validator in common. 

Something very cool about Cordial Miner is that it can be configured for both partially synchronous or asynchronous assumptions. I would recommend reading this [write-up on network models]({% post_url 2025-05-05-network-models %}) to better understand the differences between these network assumptions before proceeding.

## Partially Synchronous Version
Cordial Miners instead realises that certificates can be implicitly viewed within the DAG structure. It's better to understand this via graphical representations. First of all, let's look at a DAG representation of Bullshark:

<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/cordial_miners/bullshark_commit_rule.svg" alt="Example commit rule bullshark - partially synchronous version" class="responsive-svg">
</div>
<br/>

Here, we can see how leader block $L_0$ gets skipped, due to having less then $f+1$ votes, however $L_1$, the block proposed from the leader of $r+2$ has enough support to be committed, alongside its causal history. This means that all of $L_1$'s referenced DAG will be included in the commitment, and, for those unaware, the block will look for an uncommitted leader block in its causal history ($L_0$), and if a path exists, the found leader block, alongisde its causal history, will be committed first. Thus, intuitively, we can see how a proposed block has a $2-$message delay (i.e. we need $2$ rounds to commit the block), HOWEVER, we have to remember that Bullshark utilises certified blocks. Meaning that it actually takes a $6-$message delay to commit a block, since, for every block the following happens:
- Message 1: Validator $v$ shares blocks with the rest of the validators
- Message 2: The validators may sign the block
- Message 3: If $2f+1$, where n = $3f+1$, have signed the block, a certificate is constructed (**quorum certificate**), and validator $v$ proposes the block

Now, let us see how Cordial Miners commits a leader block:

<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/cordial_miners/cordial_miners_commit_rule.svg" alt="Example commit rule cordial miners - partially synchronous version" class="responsive-svg">
</div>
<br/>

We can see that Cordial Miners requires a $3-$message delay to propose a block. Intuitively this is because:

- Round $r$: Validator $v$ proposes block $L_0$
- Round $r+1$: $2f+1$ validators include block $L_0$ in their references
- Round $r+2$: A further $2f+1$ view the $2f+1$ pattern in round $r+1$, confirming the existence of a certificate

Although Cordial Miners takes requires a $3-$message delay to commit a leader block, compared to the $2-$message delay of Bullshark, Cordial Miners blocks are simply signed by the validator (i.e. only $1-$message delay to propose a block). We can clearly see how much faster this design is compared to Bullshark's "certified" DAG structure.
## Asynchronous Version


<style>
svg [stroke="rgb(0%, 0%, 0%)"], svg [fill="rgb(0%, 0%, 0%)"] {
    fill: white !important;
    stroke: white!important;

}

  .svg-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .responsive-svg {
    min-width: auto;
    height: auto;
  }
  
  .inverted {
    filter: invert(100%);
  }
</style>



 


