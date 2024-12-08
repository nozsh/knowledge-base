---
type: docs
# slug: ""
url: "private-paste" # Abs URL to
# linkTitle: ""
title: "Private Paste"
description: "kb a.k.a Knowledge Base"
breadcrumbs: false
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
toc: false
excludeSearch: true
robotsNoIndex: true
# weight: 900
---

{{< html/privatePaste >}}

## Как это работает?

- `🔑` - Зашифровать
- `🔓` - Расшифровать

{{< callout type="info" >}}
Текст сжимается с помощью LZMA и хешируется с солью.<br>
Хэш находится в ссылке, чтобы передать сообщение просто отправьте ссылку.
{{< /callout >}}

{{< callout type="warning" >}}
**ВАЖНО! Это небезопасно, если вы не используете пароль!**<br>
Пароль служит доп. солью, известной **только вам** и **другой стороне**.<br>
Без пароля вы **не сможете** восстановить текст.
{{< /callout >}}

{{< callout type="error" >}}
Если поле пароль не заполнить будет использоваться **общедоступная** соль!
{{< /callout >}}

{{< callout type="green" emoji="🛡️" >}}
**Ни текст, ни пароль, ничего не хранится в БД.**
{{< /callout >}}

{{< callout type="white" >}}
Нажмите [здесь](https://x2x.su/private-paste-example), чтобы увидеть пример сообщения.<br>
Пароль `qwerty`.
{{< /callout >}}

---

{{< callout type="warning" >}}
QR-код на очень длинные сообщения не работает.
{{< /callout >}}
