---
title: Access SSH VM through Tailscale laverage ProxyJump and SSH Tunnel
date: 2026-09-30
description: Access an Ubuntu VM on a lab PC's local network from home using Tailscale, SSH ProxyJump, and local port forwarding.
slug: ssh-vm-tailscale-proxyjump-tunnel
authors: faiz_maulana_habibi
tags: [linux, ssh, networking, tailscale]
keywords: [ssh, tailscale, proxyjump, ssh tunnel, local port forwarding, ubuntu, virtual machine, remote access]
hide_table_of_contents: false

custom_fields:
  og_title: Access an Ubuntu VM over Tailscale with SSH ProxyJump and Tunneling
  og_description: Learn how to access an Ubuntu VM through a lab PC acting as a jump host, with explanations of the SSH -J, -N, and -L options.
---

## SSH Tunnel

Recently I felt suprisingly amazed about what i found, maybe not something special for you guys. sorry :p.
I wonder could I access local ip proxmox from different network? let say my local proxmox ip is `192.168.24.156:8006` yes does not have public ip, it can only access on my lab local internet `192.168.24.0/24`. Something came up suddenly when I woke up from my sleep "could I access my proxmox in lab from my home?" then I got an ide that I have Jetson nano with private ip using tailscale so I tried to create a tunnel using ssh.

{/* truncate */}

<img
  src={require('./img/topology.webp').default}
  alt="Alur akses Proxmox melalui SSH tunnel"
  style={{
    width: '300px',
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '24px auto',
  }}
/>

I can access using this command :

```
ssh -N -L 127.0.0.1:18006:192.168.24.156:8006 pc-lab@100.123.45.44
```

| Command | Description |
| ----- |-----|
|`ssh`|This is command to establish connection to device using ssh protocol.|
|`-N`|Not opening shell on pc lab, used for only forwading the ip and port.|
|`-L`|Create local port forwading.|
|`127.0.0.1:18006:192.168.24.156:8006`| bind_address:local_port:host_destination:port_destination |
|`pc-lab@100.123.45.44`|username-lab@ip-lab|

## Proxy Jump

Proxy jump is access vm inside my pc lab. Instead of I ssh to my pc then ssh again to my vm type ssh command twice why I do not just only type one command to access my vm inside my pc lab.

{/* proxy jump topology */}

<img
  src={require('./img/proxy-jump.webp').default}
  alt="Alur akses Proxmox melalui SSH tunnel"
  style={{
    width: '300px',
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '24px auto',
  }}
/>

Just type this command :

```
ssh -J pc-lab@100.123.45.44 ubuntu-vm@192.168.58.10 
```
| Command | Description |
| ----- |-----|
|`-J`|To establish ssh using jump host (Proxy Jump).|
|`pc-lab@100.123.45.44`|This is my computer in my lab.|
|`ubuntu-vm@192.168.58.10`|This is VM inside my pc lab|

Done guys, sorry i was too exited and thank you for reading.:)