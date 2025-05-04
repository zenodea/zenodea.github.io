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
    node distance=1.5cm and 2.5cm,
    validator/.style={circle, draw, minimum size=0.8cm},
    propose/.style={validator, thick},
    boost/.style={validator, draw=black},
    vote/.style={validator, draw=orange, thick},
    certify/.style={validator, draw=green!60!black, thick},
    supporting_validator/.style={validator, fill=green!20},
    support/.style={->, green!60!black, thick},
    >=Stealth,
    leader/.style={validator, fill=green!20},
    vote_support/.style={->, orange, thick},
    cert_support/.style={->, green!60!black, thick},
    >=Stealth
]

% Round labels
\node at (0, 5.5) {$r$};
\node at (2.5, 5.5) {$r+1$};
\node at (5, 5.5) {$r+2$};
% Wave labels
% Validator labels
\node at (-1.5, 4) {$v_0$};
\node at (-1.5, 3) {$v_1$};
\node at (-1.5, 2) {$v_2$};
\node at (-1.5, 1) {$v_3$};

% Round R validators (Propose)
\node[propose] (v0r) at (0, 4) {};
\node[propose] (v1r) at (0, 3) {};
\node[propose] (v2r) at (0, 2) {};
\node[propose] (v3r) at (0, 1) {};

% Round R+1 validators (Boost)
\node[propose] (v0r1) at (2.5, 4) {};
\node[propose] (v1r1) at (2.5, 3) {};
\node[propose] (v2r1) at (2.5, 2) {};
\node[propose] (v3r1) at (2.5, 1) {};

% Round R+2 validators (Boost)
\node[propose] (v0r2) at (5, 4) {};
\node[propose] (v1r2) at (5, 3) {};
\node[propose] (v2r2) at (5, 2) {};
\node[propose] (v3r2) at (5, 1) {};

% Connections from Boost-1 to Propose (represent references)
\draw[->] (v0r1) -- (v0r);
\draw[->] (v0r1) -- (v1r);
\draw[->] (v0r1) -- (v2r);

\draw[->] (v1r1) -- (v0r);
\draw[->] (v1r1) -- (v1r);
\draw[->] (v1r1) -- (v2r);

\draw[->] (v2r1) -- (v0r);
\draw[->] (v2r1) -- (v1r);
\draw[->] (v2r1) -- (v2r);

\draw[->] (v3r1) -- (v0r);
\draw[->] (v3r1) -- (v1r);
\draw[->] (v3r1) -- (v3r);

% Connections from Boost-2 to Boost-1
\draw[->] (v0r2) -- (v0r1);
\draw[->] (v0r2) -- (v1r1);
\draw[->] (v0r2) -- (v2r1);

\draw[->] (v1r2) -- (v0r1);
\draw[->] (v1r2) -- (v1r1);
\draw[->] (v1r2) -- (v2r1);

\draw[->] (v2r2) -- (v0r1);
\draw[->] (v2r2) -- (v1r1);
\draw[->] (v2r2) -- (v2r1);

\draw[->] (v3r2) -- (v1r1);
\draw[->] (v3r2) -- (v2r1);
\draw[->] (v3r2) -- (v3r1);
\end{tikzpicture}
</script>





 


