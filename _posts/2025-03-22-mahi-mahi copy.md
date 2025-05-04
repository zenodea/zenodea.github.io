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
The term uncertified DAG-Based consensus protocol was first coined by the Mysticeti protocol, but it applies very well to Cordial Miners as well. Usually, blocks proposed by validators need to be certified, meaning that $2f+1$ validators require to validate and sign the block. Protocols that utilise Narhwal, for example, for transaction dissemination utilise certified blocks. In theory, this is good for a couple of reasons: Bullshark only requires a 2-message delay to commit a leader block and **equivocation** is simply not possible with certified blocks. Blocks will not receive the $2f+1$ votes required to certify a block due to **quorum intersection**, a fancy way to say that two validators will always have at least one validator in common. Cordial Miners instead realises that certificates can be implicitly viewed within the DAG structure. It's better to understand this via graphical representations:
<script type="text/tikz">
\begin{tikzpicture}[
    node distance=1.5cm and 3cm,
    validator/.style={circle, draw, minimum size=0.8cm},
    default_validator/.style={validator, draw=black},
    highlighted_validator/.style={validator, draw=red, thick},
    supporting_validator/.style={validator, fill=green!20},
    skipping_validator/.style={validator, fill=pink!40}
]
\node at (0, 5) {Round $r$};
\node at (3.5, 5) {Round $r+1$};
\node at (7, 5) {Round $r+2$};
\node at (-1.5, 4) {$A_0$};
\node at (-1.5, 3) {$A_1$};
\node at (-1.5, 2) {$A_2$};
\node at (-1.5, 1) {$A_3$};
\node[default_validator] (A0r) at (0, 4) {};
\node[default_validator] (A1r) at (0, 3) {};
\node[default_validator] (A2r) at (0, 2) {};
\node[default_validator] (A3r) at (0, 1) {};
\node[default_validator] (A0r2) at (7, 4) {};
\node[default_validator] (A1r2) at (7, 3) {};
\node[default_validator] (A2r2) at (7, 2) {};
\node[default_validator] (A3r2) at (7, 1) {};
\draw[->] (A0r1) -- (A0r);
\draw[->] (A1r1) -- (A0r);
\draw[->] (A2r1) -- (A0r);
\draw[->] (A0r1) -- (A1r);
\draw[->] (A1r1) -- (A1r);
\draw[->] (A2r1) -- (A1r);
\draw[->] (A0r1) -- (A2r);
\draw[->] (A1r1) -- (A2r);
\draw[->] (A2r1) -- (A2r);
\draw[->] (A0r2) -- (A0r1);
\draw[->] (A1r2) -- (A0r1);
\draw[->] (A0r2) -- (A1r1);
\draw[->] (A1r2) -- (A1r1);
\draw[->] (A1r2) -- (A2r1);
\draw[->] (A2r2) -- (A2r1);
\draw[->] (A2r2) -- (A3r1);
\draw[->] (A3r2) -- (A3r1);
\end{tikzpicture}
</script>





 


