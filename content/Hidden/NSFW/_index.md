---
type: docs
# slug: ""
# url: "" # Abs URL to
# linkTitle: ""
title: "NSFW"
description: "kb a.k.a Knowledge Base"
# aliases:
#   - callouts
sidebar:
  # open: true
  # exclude: true
# date: ""
# math: true
# draft: true
# prev: docs/folder/
# next: docs/folder/
# toc: false
excludeSearch: true
robotsNoIndex: true
# weight: 900
---

{{< imgs/img2 id="abc123" src="@img/nsfw-t-bw-cover.png" alt="NSFW Cover" loading="eager" width="1100px" height="400px" >}}

<script>
    const imageNames = [
        'nsfw-t-default-cover.png',
        'nsfw-t-cyan-cover.png',
        'nsfw-t-green-cover.png',
        'nsfw-t-orange-cover.png',
        'nsfw-t-purple-cover.png',
        'nsfw-t-red-cover.png',
        'nsfw-t-yellow-cover.png'
    ];

    document.addEventListener('DOMContentLoaded', () => {
        let imgElement = document.querySelector('#abc123');
        let currentSrc = imgElement.src;

        let baseUrl = currentSrc.substring(0, currentSrc.lastIndexOf('/') + 1);

        let getRandomImage = () => {
            let randomIndex = Math.floor(Math.random() * imageNames.length);
            return baseUrl + imageNames[randomIndex];
        };

        imgElement.src = getRandomImage();
    });
</script>

<div style="width: 100%; display: flex; justify-content: center; margin-bottom: 2rem;">
  <p style="margin-top: 0; line-height: 0;">
    <span style="font-size: 75%; top: -0.5em; position: relative;">Art Artist: <a href="https://x.com/Spl4ts/?sl">spl4ts</a></span>
  </p>
</div>

{{< cards cols="2" >}}
{{< card link="booru-boards" title="Boards" icon="game-icons dripping-tube" tag="" subtitle="Доски с картинками и анимацией." >}}
{{< card link="hentai" title="Hentai" icon="arcticons blue-archive" tag="" subtitle="Манги и аниме для взрослых." >}}
{{< card link="just-tubes" title="Tubes" icon="fe video" tag="" subtitle="Просто сайты." >}}
{{< card link="shorts" title="Shorts" icon="simple-icons youtubeshorts" tag="" subtitle="Сайты с короткими видео." >}}
{{< card link="paywall-leaks" title="PayWall Leaks" icon="emojione-monotone money-with-wings" tag="" subtitle="Слив платного контента." >}}
{{< card link="underground-tubes" title="Underground" icon="arcticons underhand" tag="" subtitle="Настоящее + ЧЗП." >}}
{{< /cards >}}
