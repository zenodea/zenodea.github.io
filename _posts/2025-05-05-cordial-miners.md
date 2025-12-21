---
title: "Cordial Miners"
last_modified_at: 2025-05-05T14:30:45+00:00
categories:
  - Consensus Protocols
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
This write-up marks the beginning of my series on Directed Acyclic Graph (DAG) based consensus protocols. My research project has led me to read many consensus protocols, but the one that I wanted to start with was a protocol named Cordial Miners. I have not found many articles on this protocol; rather, most of the popularity has gone into its "spiritual successor", Mysticeti-C and Mahi-Mahi. So, I wanted to shed some light on the protocol that allowed those two to come to fruition. Before delving into this write-up, I would recommend familiarizing yourself with DAG-based consensus protocols (Tusk, Bullshark, etc.), as they differ in many ways compared to more traditional blockchains (HotStuff, etc.).

## Uncertified DAG-Based Consensus Protocols
The term uncertified DAG-Based consensus protocol was first coined by the Mysticeti protocol, but it applies very well to Cordial Miners as well. Usually, blocks proposed by validators need to be certified, meaning that $2f+1$ validators are required to validate and sign the block. Protocols that utilize Narwhal, for example, for transaction dissemination utilize certified blocks. In theory, this is good for a couple of reasons: Bullshark only requires a 2-message delay to commit a leader block and **equivocation** is simply not possible with certified blocks. Blocks will not receive the $2f+1$ votes required to certify a block due to **quorum intersection**.

**Quorum Intersection**: A fancy way to say that two quorums will always have at least one validator in common.

Something very cool about Cordial Miners is that it can be configured for both partially synchronous or asynchronous assumptions. I would recommend reading this [write-up on network models]({% post_url 2025-05-05-network-models %}) to better understand the differences between these network assumptions before proceeding.

## The Blocklace
Before diving into the specific versions of Cordial Miners, we need to understand the core innovation introduced by the research, the **blocklace**. This is Cordial Miners' term for their DAG structure, and it's essentially a partially-ordered counterpart to the totally-ordered blockchain.

Each block in the blocklace contains:
- A set of transactions (the payload)
- Hash pointers to previous blocks (the references)
- The creator's cryptographic signature

Unlike a traditional blockchain where each block points to exactly one predecessor, blocklace blocks can reference multiple previous blocks. When a validator creates a new block, they include references to blocks that haven't been referenced by any other block yet.

### Consensus Components with the Blocklace
The blocklace is clever because it handles all three components of consensus without needing separate protocols:

**Dissemination**: When a validator creates a block, that block acts as both an acknowledgment and a disclosure. By including references to previous blocks, it acknowledges what the validator has seen. By omission, it reveals what the validator hasn't seen yet. This creates what the authors call **cordial dissemination** - if you notice someone is missing blocks you think they should have, you send those blocks to them.

**Equivocation-Exclusion**: Instead of preventing equivocation (like reliable broadcast does), Cordial Miners allows equivocations to exist in the blocklace but excludes them during ordering. Two blocks from the same validator equivocate if neither observes the other. The protocol uses **approval logic** where a block only approves another block if it observes it and doesn't see any equivocations involving it.

**Ordering**: This is handled by the **$\tau$ function**, which converts the partially-ordered blocklace into a totally-ordered sequence. The function works backward from **final leader blocks**, recursively processing their causal history while excluding equivocations.

## Partially Synchronous Version
Cordial Miners realizes that certificates can be implicitly viewed within the DAG structure. It's better to understand this via graphical representations. First of all, let's look at a DAG representation of Bullshark:

<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/cordial_miners/bullshark_commit_rule.svg" alt="Example commit rule bullshark - partially synchronous version" class="responsive-svg">
</div>
<br/>

Here, we can see how leader block $L_0$ gets skipped due to having less than $f+1$ votes; however, $L_1$, the block proposed from the leader of round $r+2$, has enough support to be committed, alongside its causal history. This means that all of $L_1$'s referenced DAG will be included in the commitment, and, for those unaware, the block will look for an uncommitted leader block in its causal history ($L_0$), and if a path exists, the found leader block, alongside its causal history, will be committed first. Thus, intuitively, we can see how a proposed block has a $2$-message delay (i.e., we need $2$ rounds to commit the block). HOWEVER, we have to remember that Bullshark utilizes certified blocks. Meaning that it actually takes a $6$-message delay to commit a block, since, for every block the following happens:
- Message 1: Validator $v$ shares blocks with the rest of the validators
- Message 2: The validators may sign the block
- Message 3: If $2f+1$, where n = $3f+1$, have signed the block, a certificate is constructed (**quorum certificate**), and validator $v$ proposes the block

Now, let us see how Cordial Miners commits a leader block:

<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/cordial_miners/cordial_miners_commit_rule.svg" alt="Example commit rule cordial miners - partially synchronous version" class="responsive-svg">
</div>
<br/>

We can see that Cordial Miners requires a $3$-message delay to propose a block. Intuitively this is because:

- Round $r$: Validator $v$ proposes block $L_0$
- Round $r+1$: $2f+1$ validators include block $L_0$ in their references
- Round $r+2$: A further $2f+1$ view the $2f+1$ pattern in round $r+1$, confirming the existence of a certificate

Although Cordial Miners requires a $3$-message delay to commit a leader block, compared to the $2$-message delay of Bullshark, Cordial Miners blocks are simply signed by the validator (i.e., only a $1$-message delay to propose a block). We can clearly see how much faster this design is compared to Bullshark's "certified" DAG structure.

In the partially synchronous version, Cordial Miners uses **3-round waves** and **deterministic leader selection** (typically round-robin). Since the network eventually becomes synchronous, validators can safely use timeouts to advance rounds and the protocol can rely on predetermined leaders without worrying about adversarial manipulation.

## Asynchronous Version
Cordial Miners is also capable of being configured for asynchronous network assumptions. The main challenge in asynchronous networks is that we can't use predetermined leaders. If an adversary knows who the leader will be ahead of time, they can manipulate message delivery to ensure that leader never gets enough support for finality.

<div class="svg-container">
<img src="{{ site.baseurl }}/assets/graphs/cordial_miners/cordial_miners_async_commit_rule.svg" alt="Example commit rule cordial miners - asynchronous version" class="responsive-svg">
</div>
<br/>

For the asynchronous setting, Cordial Miners uses **5-round waves** instead of 3 rounds. This longer structure implements **retrospective leader selection** using a **shared random coin**. Here's how it works:

- Round $r$: All validators propose blocks (nobody knows who the leader will be)
- Rounds $r+1$ to $r+3$: Validators build their references, establishing the support patterns
- Round $r+4$: The shared coin is revealed, determining which round $r$ block becomes the leader

The shared coin uses cryptographic techniques to ensure the result is both unpredictable beforehand and agreed upon by all correct validators. Each validator includes their coin share in their round $r+4$ block, and once enough shares are collected, the leader can be deterministically computed.

Since the leader is only revealed after the support patterns are already established, Byzantine validators can't strategically withhold support. With probability $\frac{2f+1}{3f+1} = \frac{2}{3}$, an honest validator will be selected as leader. When this happens and the leader has sufficient support, the block becomes final. This gives us an expected latency of $1.5 \times 5 = 7.5$ rounds.

## Performance of Cordial Miners

**Partially Synchronous Settings:**
- Cordial Miners: 3 rounds (good case), 4.5 rounds (expected)
- Bullshark: 4 rounds (good case), 9 rounds (expected)

**Asynchronous Settings:**
- Cordial Miners: 5 rounds (good case), 7.5 rounds (expected)
- DAG-Rider: 8 rounds (good case), 12-24 rounds (expected)

The performance gains come directly from eliminating reliable broadcast. While other protocols spend multiple rounds just getting blocks certified before they can be considered for commitment, Cordial Miners can disseminate and process blocks in a single round.

## After Cordial Miners?
Cordial Miners laid the foundation for even more advanced protocols. **Mysticeti** extended these ideas with multi-leader approaches, achieving the theoretical minimum latency of 3 rounds for partially synchronous networks and now powers the Sui blockchain in production. **Mahi-Mahi** pushed the asynchronous concepts further, supporting multiple leaders per wave and achieving performance that rivals partially synchronous protocols.

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
