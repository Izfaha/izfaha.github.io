---
slug: sunshine
title: Sunshine Game Stream
authors: faiz_maulana_habibi
tags: [linux, secure]
---

## Installation Using Pacman

```sh
yay -S sunshine wf-recorder slurp grim wl-clipboard

# enable service
systemctl --user start sunshine # if you need to start on boot just using `systemctl --user enable sunshine`

# If it doesn't start just hit
sunshine            # <= this is a command
```

`{/* truncate */}`

You will see line bellow
![Sunshine Run](./img/sunshine.webp)
Afterward, coppy the link and paste to your browser.

:::warning[Attention]
Ignore any warning given by your browser about "insecure website". This is due to the SSL certificate being self-signed.
:::

If you encounter any issu just hit the [documentation](https://docs.lizardbyte.dev/projects/sunshine/latest/md_docs_2getting__started.html).
