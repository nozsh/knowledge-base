---
type: docs
title: Спойлер
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

# Details

Details shortcode is a helper for `details` html5 element. It is going to replace `expand` shortcode.

## Example

```tpl
{{</* details "Title" [open] */>}}
## Markdown content
Lorem markdownum insigne...
{{</* /details */>}}
```

```tpl
{{</* details title="Title" open=true */>}}
## Markdown content
Lorem markdownum insigne...
{{</* /details */>}}
```

{{< details "Title" open >}}

## Markdown content

Lorem markdownum insigne...
{{< /details >}}
