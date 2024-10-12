---
type: docs
title: 🔷 cURL Converter
description: "kb a.k.a Knowledge Base"
# weight: 900
bookCollapseSection: false
bookFlatSection: false
bookToc: false
bookComments: false
bookSearchExclude: false
bookHidden: false
---

# cURL Converter

[cURL Converter](https://curlconverter.com/?sl)

Крутая утилита, используйте вкладку "Сеть" в инструментах разработчика, чтобы скопировать запрос как cURL, и конвертируйте его в код.

{{< details "Пример" >}}
**cURL**

```bash
curl 'http://en.wikipedia.org/' \
    -H 'Accept-Encoding: gzip, deflate, sdch' \
    -H 'Accept-Language: en-US,en;q=0.8' \
    -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0' \
    -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' \
    -H 'Referer: http://www.wikipedia.org/' \
    -H 'Connection: keep-alive' --compressed
```

{{< details "to Python" >}}

```python
import requests

headers = {
    # 'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'en-US,en;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Referer': 'http://www.wikipedia.org/',
    'Connection': 'keep-alive',
}

response = requests.get('http://en.wikipedia.org/', headers=headers)
```

{{< /details >}}

<br>

{{< details "to JS" >}}

```js
fetch("http://en.wikipedia.org/", {
  headers: {
    "Accept-Encoding": "gzip, deflate, sdch",
    "Accept-Language": "en-US,en;q=0.8",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0",
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    Referer: "http://www.wikipedia.org/",
    Connection: "keep-alive",
  },
});
```

{{< /details >}}

<br>

{{< details "to C" >}}

```cpp
#include <curl/curl.h>

int main(int argc, char *argv[])
{
  CURLcode ret;
  CURL *hnd;
  struct curl_slist *headers;

  headers = NULL;
  headers = curl_slist_append(headers, "Accept-Encoding: gzip, deflate, sdch");
  headers = curl_slist_append(headers, "Accept-Language: en-US,en;q=0.8");
  headers = curl_slist_append(headers, "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
  headers = curl_slist_append(headers, "Connection: keep-alive");

  hnd = curl_easy_init();
  curl_easy_setopt(hnd, CURLOPT_BUFFERSIZE, 102400L);
  curl_easy_setopt(hnd, CURLOPT_URL, "http://en.wikipedia.org/");
  curl_easy_setopt(hnd, CURLOPT_NOPROGRESS, 1L);
  curl_easy_setopt(hnd, CURLOPT_HTTPHEADER, headers);
  curl_easy_setopt(hnd, CURLOPT_REFERER, "http://www.wikipedia.org/");
  curl_easy_setopt(hnd, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0");
  curl_easy_setopt(hnd, CURLOPT_MAXREDIRS, 50L);
  curl_easy_setopt(hnd, CURLOPT_HTTP_VERSION, (long)CURL_HTTP_VERSION_2TLS);
  curl_easy_setopt(hnd, CURLOPT_ACCEPT_ENCODING, "");
  curl_easy_setopt(hnd, CURLOPT_FTP_SKIP_PASV_IP, 1L);
  curl_easy_setopt(hnd, CURLOPT_TCP_KEEPALIVE, 1L);

  ret = curl_easy_perform(hnd);

  curl_easy_cleanup(hnd);
  hnd = NULL;
  curl_slist_free_all(headers);
  headers = NULL;

  return (int)ret;
}
```

{{< /details >}}

{{< /details >}}

Очень ускоряет.

Так же [GitHub](https://github.com/curlconverter/curlconverter/?sl)
