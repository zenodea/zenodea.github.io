---
title: "Mahi-Mahi Consensus Protocol"
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
A major objective of my thesis is to introduce a fallback consensus protocol, known as the Mahi-Mahi Consensus Protocol, to the Mysticeti protocol. This will, in theory, allow Mysticeti to have *liveness* during moments of asynchrony in the system. This write-up represents my first notes on the protocol.

### Threat Model
$$
n=3f+1
$$
- Mahi-Mahi is analysed under the [[Random Network Model]], a variant of the [[Asynchronous Network Model]]
- Mahi-Mahi solves the [[Byzantine Atomic Broadcast]] (BAB), via a global perfect coin.

### Global Perfect Coin
The global perfect coin is utilised to determine the leader slots for each round.
This decision happens *after the fact*, as the global perfect coin is run in round $r+5$ (the *certify round*)

Thus, validators in $r+5$ determine the leader slots *deterministically* for $r$. The coin will also determine the order of the *first* and *second* leader. 

This allows the ordering of blocks. Remember, we are assuming $f < \frac{n}{3}$, thus we elect $2$ leaders per *round*. At least one of the leaders will be *honest*.

(**Note:** How does this improve the liveness compared to Mysticeti?)

### Structure of Mahi-Mahi
Mahi-Mahi works in a *round* and *wave* structure.
A number of rounds can be chosen to determine how many $r$ are considered to reach a commit, this would include:

1. Propose
2. Boost
3. Boost
4. Vote
5. Certify

(**Note:** $r$,$r+3$ and $r+4$ represent the same rounds used in Mysticeti)

**Boost Rounds:** Are used to act as buffers, which help propagate the blocks proposed in round $r$.

**Vote Round:** Every block in $r+4$ represents a vote for the first block of the *Propose Round* that is found when performing a *depth-first search*.

**Certify Round:**

Thus, a *wave* starts after each *round*. $r$ is are the proposed blocks in *wave* $1$,and $r+1$ represents not only the *boost round* for *wave* $1$, but also the start of *wave* $2$. This is continuously repeated.

