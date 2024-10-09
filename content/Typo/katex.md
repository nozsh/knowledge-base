---
type: docs
title: Katex
# weight: 900
bookCollapseSection: false
bookFlatSection: false
bookToc: false
bookComments: false
bookSearchExclude: true
bookHidden: false
robotsNoIndex: true
---

# KaTeX

KaTeX shortcode let you render math typesetting in markdown document. See [KaTeX](https://katex.org/)

## Example

<div class="book-columns flex flex-wrap">
  <div class="flex-even markdown-inner">

```latex
{{</* katex display=true class="optional" >}}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
{{< /katex */>}}
```

  </div>
  <div class="flex-even markdown-inner">

{{< katex display=true class="optional" >}}
f(x) = \int\_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
{{< /katex >}}

  </div>
</div>

## Display Mode Example

Here is some inline example: {{< katex >}}\pi(x){{< /katex >}}, rendered in the same line. And below is `display` example, having `display: block`
{{< katex display=true >}}
f(x) = \int\_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
{{< /katex >}}
Text continues here.
