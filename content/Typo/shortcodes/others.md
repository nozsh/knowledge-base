---
robotsNoIndex: true
excludeSearch: true
title: Other Shortcodes
linkTitle: Others
sidebar:
  # exclude: true
---

{{< callout emoji="ℹ️" >}}
Some of these are Hugo built-in shortcodes.
These shortcodes are considered less stable and may be changed anytime.
{{< /callout >}}

## Badge

```
{{</* badge "Badge" */>}}
```

Result:

{{< badge "Badge" >}}

Variants:

```
{{</* badge content="info" type="info" */>}}
{{</* badge content="warning" type="warning" */>}}
{{</* badge content="error" type="error" */>}}
```

Result:

{{< badge content="info" type="info" >}} &nbsp;
{{< badge content="warning" type="warning" >}} &nbsp;
{{< badge content="error" type="error" >}}

With link:

```
{{</* badge content="Releases" link="https://github.com/imfing/hextra/releases" */>}}
```

Result:

{{< badge content="Releases" link="https://github.com/imfing/hextra/releases" >}}

## YouTube

Embed a YouTube video.

```
{{</* iframes/yt jfKfPfyJRdk "title" "params" */>}}
```

Result:

{{< iframes/yt jfKfPfyJRdk "lofi hip hop radio 📚 beats to relax/study to" >}}

## PDF

With PDF shortcode, you can embed a PDF file in your content.

```
{{</* pdf "https://example.com/sample.pdf" */>}}
```

You can also place the PDF file in your project directory and use the relative path.

```
{{</* pdf "path/to/file.pdf" */>}}
```

Example:

{{</* pdf "https://upload.wikimedia.org/wikipedia/commons/1/13/Example.pdf" */>}}
