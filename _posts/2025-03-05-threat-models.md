---
title: "Threat Models"
last_modified_at: 2025-05-03T14:30:45+00:00
categories:

tags:
  - Consensus Protocols
  - Threat Models 

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

# Threat Models
## Crash Fault Tolerance
A crash fault tolerant (CFT) protocol is one that is capable of handling $f$ faults, and continue working.  
<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/threat_models/ctf_yes.svg" alt="Example partial synchrony" class="responsive-svg">
</div>
<br/>

<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/threat_models/cft_no.svg" alt="Example partial synchrony" class="responsive-svg">
</div>
<br/>

## Byzantine Fault Tolerance
As we can see from the figure below, 
<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/threat_models/bft_yes.svg" alt="Example partial synchrony" class="responsive-svg">
</div>
<br/>

<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/threat_models/bft_no.svg" alt="Example partial synchrony" class="responsive-svg">
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



 


