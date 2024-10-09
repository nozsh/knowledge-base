---
type: docs
title: Что это?
description: Самая разная информация.
# weight: 1
bookCollapseSection: true
bookFlatSection: false
bookToc: false
bookComments: false
bookSearchExclude: false
bookHidden: false
---

# Knowledge Base

{{< hint info >}}
Это база знаний интересной, полезной и не очень информации.
{{< /hint >}}

<!-- <img alt="Knowledge Base" id="giphy-image" src="@img/where.gif" width="100%" no-zoom> -->

<img loading="eager" alt="Knowledge Base" width="100%" src="https://assets.nozsh.su/img/kb/kb/where.webp" no-zoom>


<style>
.book-footer > div {
  display: none;
}
</style>

<!-- <script>
  document.addEventListener("DOMContentLoaded", () => {
    let giphyImageElement = document.getElementById("giphy-image");

    // Thanks github.com/shravzzv for api key <3
    let apiKey = "uDu77HHFhXrEpWJCGuI83p9YtVnbhQAf";
    let apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

    let fetchRandomGif = () => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.data && data.data.images && data.data.images.original) {
            let gifUrl = data.data.images.original.url;
            giphyImageElement.src = gifUrl;
          } else {
            showDefaultGif();
          }
        })
        .catch((error) => {
          console.error("Error fetching the gif:", error);
          showDefaultGif();
        });
    };

    let showDefaultGif = () => {
      let defaultGif = "where.gif";
      giphyImageElement.src = defaultGif;
    };

    fetchRandomGif();
  });
</script> -->
