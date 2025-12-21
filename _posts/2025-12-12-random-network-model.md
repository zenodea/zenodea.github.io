---
title: "Random Network Model"
last_modified_at: 2025-05-03T14:30:45+00:00
categories:
- Distributed Systems
published: false
---

I've previously talked about how distributed systems operate under specific assumptions, which dictate the conditions required for a consensus protocol to achieve **liveness** and **safety**. Specifically, one of these assumptions is the underlying network condition of a protocol. We can have three types of network models: *synchronous*, *asynchronous* and *partially-synchronous*. The focus of this post will specifically be on the *asynchronous* model, specifically the *random network model*.

## More than one model for asynchrony?
An *asynchronous network model* makes the assumption that the adversaries in the system have complete control over the **message scheduling**. Let's assume a system componsed of $n=3f+1$ participants, where $f$ represents the number of adversaries (also known as byzantine). In the *asynchronous network model*, $f$ participants of the system can withold message for an indefinite amount of time, which causes Byzantine fault-tolerant (BFT) consensus protocol to have lower bounds (???). Furthermore, asynchronous BFT consensus is limited by the need to utilise a global perfect coin, which is computationally expensive. Thus, asynchronous BFT consensus protocols that are utilised in the field make the assumption that there are no adversaries in the network. This means that the implementation of a global perfect coin is not necessary, as we are not trying to defend the system from
