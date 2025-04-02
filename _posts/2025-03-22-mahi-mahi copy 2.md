---
title: "Mysticeti Consensus Protocol"
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

## Block Structure
A Validator $\mathcal{V}$ collects the following to form block $\mathcal{B}$:
- $A$ $\rightarrow$ Validator signature
- $r$ $\rightarrow$ Round number
- $h$ $\rightarrow$ Distinct hashes of $2f+1$ previous blocks $ < r$ 
- *fresh transactions*
This creates the index of the block $B \equiv (A,r,h)$

---
## Logical Round

### 2-Rounds to Certify
If we have round $r$, a block can only be certified in round $r+1$:
- $r$ $\rightarrow$ Block $B$ is proposed
- $r+1$ $\rightarrow$ Block $B$ is acknowledged by $\geq 2f+1$ Validators

### 3-Rounds to Commit
Assuming that a block is certified in $r+1$, validators can then see in $r+2$ that the block is certified, thus confirming a commitment to the block release in round $r$

---

## Identifying DAG patterns
A block $B'$ will support a *previous block* $B \equiv (A,r,h)$ if $B$ is the first block encountered by validator $A$ at round $r$.

**NOTE:** If a validator $A$ is malicious, and creates two nodes in one round (malicious behaviour), the block $B'$ may still reference both blocks $B_1$ and $B_2$ if different validators reference independently those two blocks. It's important to remember that for a block to be certified, it needs support of $2f+1$ blocks, but honest nodes will not validate two blocks created at round $r$ from validator $A$. 

Mathematically it is impossible for two block to be validated:
$$
\begin{align}
n &= 3f+1\\
B_1 &= 2f+1\\
B_2 &= 2f+1\\
B_1 \cap B_2 \rightarrow 2f+1 \cap 2f+1 &= f+1
\end{align}
$$
### Skip Pattern
If at least $2f+1$ blocks do not support a block $B$ in round $r+1$ (announced in round $r+2$),  in round $r$, block $B$ will be **skipped**.

### Certified Pattern
If at least $2f+1$ blocks support a block $B$ in round $r+1$ (announced in round $r+2$) in round $r$, block $B$ is considered **Certified** .

--- 

## Liveness Intuition


---

## Proposer Slots
A proposer slot represents a tuple $(\mathcal{A},r)$, and can have the following states:
- `to-commit`:  A slot is marked as `to-commit` when the block is referenced $\geq 2f+1$ times
- `to-skip`:  Allows exclusion of crashed validators (or malicious ones)
	- A slot is marked `to-skip` if a block is not support by $\geq 2f+1$ validators
- `undecided`: Forces subsequent proposer slots to wait
	- A slot is marked `undecided` when a block may be reference by $\leq 2f+1$ validators, but there aren't more then $\geq 2f+1$ validators not supporting it.

Depending on the amount of faults the system regularly has, a system can have up to $n$ (where $n=3f+1$) proposer slots, allowing each block to commit, if possible.

## The Mysticeti-C decision rule
### Direct Rule

#### First Key Design
*to-commit*
- A validator marks a proposer slot as `to-commit` if it observes $2f+1$ commit patterns for that slot (e.g. enough validators vote on the block)
3-message delay
1. $r$: First message delay is the proposed block
2. $r-1$: is the 

#### Second Key Design
A slot is marked as *to-skip* if a slot is observed to have a *skip pattern*:

- If a validator observes at least $2f+1$ NOT supporting a block. 

## Indirect Rule
If the direct rule fails, the indirect rule is used as fallback. It searches for an *anchor*, defined as the first slot with the following round number:
$$
r' > r+2
$$
### Commit Sequence
After all the rules above are applied, the validator will derive an ordered sequence of slots. This validator will iterate over the sequence, and commit all slots marked as `to-commit`, while skipping slots marked as `to-skip`