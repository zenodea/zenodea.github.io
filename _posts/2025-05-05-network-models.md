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
This is a short write-up on network models utilised by consensus protocols. Consensus protocols are necessary for a system to reach consensus on the state of the system. Generally, consensus protocols require two properties to be achieved to be functional:

**Liveness**: This property states that "good things" will, **eventually**, happen. The "good things" here, for example, in the world of cryptocurrencies mean that transactions will be processed eventually, but it can mean anything. 

**Safety**: This property states that "bad things" will **never** happen. Meaning that things that would go against the rules of the system (e.g. in cryptocurrencies, for example, this would be that conflicting transactions, *double spending*, will never happen)

**Safety** is a property that can **never** be broken, in both synchronous or asynchronous settings. However, **Liveness**, is a bit more flexible (note the **eventually** in its definition).

**Synchrony**: Messages from honest participants will be delivered withing $\Delta$.

**Partial Synchrony**: Messages from honest participants are delivered within $GST+\Delta$. GST stands for Global Stabilisation Time (GST), and it represents a point in time (nobody knows exactly when) where the system reaches synchrony (e.g. network congestion has passed). In laymen terms, it just means that when the system network is working as intended, messages will be delivered withing time $\Delta$.

**Asynchrony**: Messages from honest participants will **eventually** be delivered. The eventually is really important here, as we are making no assumption on how long the message will take to arrive.

We mostly care about **partial synchrony** and **asynchrony** The differences between the two models can be a little deceiving, but the most important part is how a protocol handles delayed messages. For example, protocols that uses partially synchronous assumptions can utilise **timeouts**. We know that messages, after $GST$, will be received after $\Delta$, thus if a message is taking longer then expect, we can simply skip it. HOWEVER, we cannot do this for asynchronous settings, as we are making no assumption on the max amount time for a message to arrive. Did the process (i.e. the node) crash? or is the network simply slow? 



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



 


