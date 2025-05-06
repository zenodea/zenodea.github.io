---
title: "Network Models"
last_modified_at: 2025-05-05T14:30:45+00:00
categories:
  - Distributed Systems 
tags:
  - Consensus Protocols
  - Network Models
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
This is a short write-up on network models utilized by consensus protocols. Consensus protocols are necessary for a system to reach agreement on the state of the system. When building a distributed network, we need to make assumptions about message delivery times to ensure consensus can be achieved.

# Network Models
Generally, consensus protocols require two properties to be achieved to be functional:

**Safety**: This property states that "bad things" will **never** happen. Meaning that things that would go against the rules of the system (e.g. in cryptocurrencies, this would mean that conflicting transactions, *double spending*, will never happen).

**Liveness**: This property states that "good things" will, **eventually**, happen. The "good things" here, for example, in the world of cryptocurrencies mean that transactions will be processed eventually, but it can mean any progress in the system.

Safety is a property that can **never** be broken, while **Liveness** is a bit more flexible (note the **eventually** in its definition). A consensus protocol requires these two properties, and they are affected by the network model assumptions we make.

Network models are typically categorized as follows:

**Synchrony**: Messages from honest participants will be delivered within a known bound $\Delta$.

**Partial Synchrony**: Messages from honest participants are delivered within $GST+\Delta$. GST stands for Global Stabilization Time, and it represents a point in time (unknown to the participants) where the system reaches synchrony (e.g. network congestion has passed). In simpler terms, it means that when the system network is working as intended, messages will be delivered within time $\Delta$.

**Asynchrony**: Messages from honest participants will **eventually** be delivered. The "eventually" is crucial here, as we are making no assumption on how long the message will take to arrive.

We mostly care about **partial synchrony** and **asynchrony** in practical distributed systems. The differences between the two models can be subtle, but the most important distinction is how a protocol handles delayed messages.

## Partial Synchrony

In partial synchrony, we assume that, once $GST$ is reached, all messages sent by honest processes will reach other processes in $\Delta$ time. If a message is not received within $\Delta$, we can assume that the sender is either faulty or malicious, thus we can safely skip it. This is known as a **timeout** mechanism, where after a certain timeout (usually $\Delta$), a process can be skipped. 

Let's consider a scenario where each round a process $P$ is chosen to be leader. This leader needs to communicate with all other processes within $\Delta$, or the other processes will skip it. As the figure below shows, $P_1$ proposes a block in time ($< \Delta$), and we continue to the next leader process $P_2$. $P_2$ also sends a message to all other processes within $\Delta$, however, $P_3$, the leader of the next round, does not. Thus, $P_3$ is skipped, and we move on to the next leader.

<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/network_model/partial_synchrony.svg" alt="Example partial synchrony" class="responsive-svg">
</div>
<br/>


## Asynchrony

In an asynchronous setting, we face a fundamental challenge: **Did the process (i.e. the node) crash? Is the network congested? Or, is the process acting maliciously?**

We can't simply skip a process that is taking too long, which means we cannot take advantage of timeouts to skip delayed/malicious processes. This brings us to one of the most important dilemmas in asynchronous distributed systems. If we skip a delayed process, then we risk violating **safety**, as that skipped process may know information that could conflict with the current state of the system. If we decide to wait for a process, then we risk **liveness**, as that process's message may never arrive.

This is related to the FLP impossibility result (Fischer, Lynch, and Paterson), which states that deterministic consensus protocols cannot guarantee both safety and liveness in an asynchronous system with even just one faulty process. So what can we do?

Let's look at this using a more realistic scenario. We have 4 processes that propose blocks (like in a blockchain) which contain transactions. The processes propose a block each round, and for each round, a leader is deterministically chosen. Now, in an asynchronous system, we only know that messages will, eventually, arrive, so what happens if the leader role falls upon a malicious actor who decides to withhold the leader block?

In this case, with deterministic leader selection, the system could stall indefinitely.

The malicious actor knows in advance when they will be given the leader role, due to the deterministic leader selection process, thus, they simply need to wait for such occasion to disrupt our system, and we cannot use timeouts due to our asynchronous assumptions. 

What we can do, however, is utilize randomization in the leader selection process to thwart such adversaries. The intuition here is that, instead of choosing a leader deterministically, we choose a leader after they have already proposed the blocks for a round, "after the fact." For example, in the figure below, each round a proposer $P_n$ proposes a block, and in round $r+1$, a leader is chosen via some form of randomness. It's important to note that processes that have not proposed a block in a round, such as $P_2$ in round $2$, can still be chosen as leaders in future rounds. We only care that **liveness** will, eventually, be achieved. Thus, each round we have some probability of picking an honest process that has proposed a block, and after enough rounds, the probability approaches 1.

<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/network_model/asynchrony.svg" alt="Example partial synchrony" class="responsive-svg">
</div>
<br/>

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



 


