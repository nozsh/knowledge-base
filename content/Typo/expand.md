---
type: docs
title: Аккордеон
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

# Expand

Expand shortcode can help to decrease clutter on screen by hiding part of text. Expand content by clicking on it.

## Example

### Default

```tpl
{{</* expand */>}}
## Markdown content
Lorem markdownum insigne...
{{</* /expand */>}}
```

{{< expand >}}

## Markdown content

Lorem markdownum insigne...
{{< /expand >}}

### With Custom Label

```tpl
{{</* expand "Custom Label" "..." */>}}
## Markdown content
Lorem markdownum insigne...
{{</* /expand */>}}
```

{{< expand "Custom Label" "..." >}}

## Markdown content

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{< /expand >}}
