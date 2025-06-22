---
title: "Threat Models"
last_modified_at: 2025-05-03T14:30:45+00:00
categories: 
- Distributed Systems
published: true
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
# Introduction
This is a short write-up on threat models utilized by consensus protocols. Consensus protocols are necessary for a system to reach agreement on the state of the system. When building a distributed network, we need to make assumptions about the types of failures and adversarial behavior that can occur to ensure consensus can be achieved.

# Threat Models
Generally, consensus protocols must account for different types of failures and malicious behavior to maintain the safety and liveness properties we discussed in network models. The threat model defines what kinds of faults the system can tolerate while still functioning correctly.

**Safety**: This property states that "bad things" will **never** happen. In the context of threat models, this means that even with the presence of faulty or malicious nodes, the system will never reach an inconsistent state.

**Liveness**: This property states that "good things" will, **eventually**, happen. Under our threat model assumptions, the system will continue to make progress despite the presence of faults.

The robustness of a consensus protocol is fundamentally determined by the threat model it can handle. Threat models are typically categorized as follows:

## Crash Fault Tolerance (CFT)

A crash fault tolerant (CFT) protocol is one that is capable of handling $f$ **crash faults** and continue working. In this model, nodes can only fail by crashing (stopping completely) - they cannot exhibit arbitrary or malicious behavior.

**Crash Faults**: A node that suffers a crash fault simply stops responding. It doesn't send any more messages, doesn't participate in the protocol, and essentially becomes unreachable. Importantly, crashed nodes do not send conflicting or malicious messages.

CFT protocols typically require $2f + 1$ total nodes to tolerate $f$ crash faults. This is because we need a majority of nodes to remain operational to make progress. Examples of CFT protocols include **Raft** and **PBFT** when configured for crash faults only. Intuitively, the $2f+1$ metric means that our system will continue working as expected as long as $>50%$ of the nodes are still operating. 

The assumption here is that these nodes do not act maliciously, meaning that: nodes fail due to hardware issues, software bugs, or network partitions, but they don't actively try to disrupt the system. This makes CFT protocols simpler to implement and more efficient, but they cannot handle malicious actors.

## Byzantine Fault Tolerance (BFT)

Byzantine fault tolerance represents a stronger threat model where nodes can exhibit **arbitrary behavior**. This includes not just crashes, but also malicious, coordinated attacks on the system.

**Byzantine Faults**: A Byzantine faulty node can do anything: send conflicting messages to different nodes, lie about its state, collude with other Byzantine nodes, or even try to break the safety and liveness properties of the system. The name comes from the "Byzantine Generals Problem," where generals (nodes) must coordinate an attack but some may be traitors.

BFT protocols typically require $3f + 1$ total nodes to tolerate $f$ Byzantine faults. This higher threshold exists because Byzantine nodes can send conflicting messages, so we need enough honest nodes to detect and overcome such behavior.

Let's consider a scenario where we have 4 nodes and 1 Byzantine node. The Byzantine node $B$ could send different proposals to different honest nodes, trying to create disagreement. As shown in the figure below, $B$ sends "Propose A" to $P_1$ and $P_2$, but "Propose B" to $P_3$. However, with $3f + 1 = 4$ total nodes, the honest majority can detect this inconsistency and exclude the Byzantine node's influence.

## Adaptive vs Static Adversaries

An important distinction in threat models is whether the adversary is **adaptive** or **static**.

**Static Adversary**: The set of faulty nodes is fixed at the beginning of the protocol execution and doesn't change. The adversary cannot "corrupt" additional nodes during the execution.

**Adaptive Adversary**: The adversary can corrupt nodes during the protocol execution, potentially based on information learned from previous rounds. This is a much stronger threat model, as the adversary can strategically corrupt nodes at the most damaging times.

Most practical BFT protocols assume a static adversary for simplicity.

## Threshold Assumptions

Different protocols make different assumptions about the maximum number of faulty nodes:

**Honest Majority**: Assumes that strictly more than half of the nodes are honest. This is common in CFT protocols and some BFT protocols. We have talked about CFT protocols, but what about BFT protocols that require a majority of nodes to be honest? One such protocol is the Nakamoto consensus, the consensus protocols utilised by the bitcoin blockchain. 

**2/3 Honest**: Assumes that at least 2/3 of nodes are honest, which is the minimum required for BFT protocols to guarantee both safety and liveness.

## Economic Threat Models

In cryptocurrency and blockchain systems, we often consider **economic threat models** where the adversary is rational and profit-motivated rather than purely malicious.

**Rational Adversary**: Assumes that faulty nodes will deviate from the protocol only if it's profitable to do so. This leads to protocols that rely on economic incentives and penalties (like **Proof-of-Stake** (PoS)) rather than just cryptographic and algorithmic guarantees. The Ethereum blockchain is one of the more popular blockchains that has incorporated PoS into their consensus algorithm.

## Conclusion

 CFT protocols like **Raft** offer simplicity and efficiency but cannot handle malicious actors. BFT protocols like **PBFT**, **HotStuff**, and **Tendermint** provide stronger guarantees but require more nodes and have higher overhead.

Modern blockchain protocols often incorporate economic incentives to discourage Byzantine behavior, while research protocols explore even stronger threat models like adaptive adversaries and rational coalitions. The key insight is that there's no universally "best" threat model—the choice depends on your system's environment and requirements.

If you're building a system within a trusted environment (like a single organization's data centers), CFT might be sufficient. If you're building a public blockchain or any system where participants don't trust each other, BFT becomes necessary . Understanding these trade-offs helps explain why we see such diversity in consensus protocol designs across different application domains.



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
    min-width: 70%;
    height: auto;
  }
  
  .inverted {
    filter: invert(100%);
  }
</style>



 


