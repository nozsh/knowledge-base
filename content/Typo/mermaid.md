---
type: docs
title: Mermaid
description: "kb a.k.a Knowledge Base"
# weight: 900
bookCollapseSection: false
bookFlatSection: false
bookToc: false
bookComments: false
bookSearchExclude: true
bookHidden: false
robotsNoIndex: true
---

# Mermaid Chart

[MermaidJS](https://mermaid-js.github.io/) is library for generating svg charts and diagrams from text.

{{< hint info >}}
**Override Mermaid Initialization Config**

To override the [initialization config](https://mermaid-js.github.io/mermaid/#/Setup) for Mermaid,
create a `mermaid.json` file in your `assets` folder!
{{< /hint >}}

## Example

<div class="book-columns flex flex-wrap">
  <div class="flex-even markdown-inner">

```tpl
{{</* mermaid class="optional" >}}
stateDiagram-v2
    State1: The state with a note
    note right of State1
        Important information! You can write
        notes.
    end note
    State1 --> State2
    note left of State2 : This is the note to the left.
{{< /mermaid */>}}
```

  </div>
  <div class="flex-even markdown-inner">

{{< mermaid class="optional" >}}
stateDiagram-v2
State1: The state with a note
note right of State1
Important information! You can write
notes.
end note
State1 --> State2
note left of State2 : This is the note to the left.
{{< /mermaid >}}

  </div>
</div>
