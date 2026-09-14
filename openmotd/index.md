---
layout: wiki
title: OpenMOTD
description: An open protocol for dynamic Minecraft server MOTDs.
wiki_title: OpenMOTD
wiki_root: /openmotd/
sidebar:
  - title: Overview
    url: /openmotd/
  - title: Specification
    url: /openmotd/specification/
  - title: Protocol
    url: /openmotd/specification/protocol/
  - title: MOTD Format
    url: /openmotd/specification/motd/
  - title: Implementations
    url: /openmotd/implementations/
---

OpenMOTD is an open network protocol for providing dynamic server information to clients.

The core purpose of **v1** is simple: a client asks a server for its current MOTD, and the server can return different information depending on its current state.

A server can therefore provide different MOTDs for normal operation, maintenance, full capacity, startup, events, or any other state it chooses to represent.

## Protocol Versions

OpenMOTD uses additive versioning.

```text
v1
 ↓
v2 = v1 + additions
 ↓
v3 = v2 + additions
```

A newer version retains the functionality of previous versions unless a future specification explicitly says otherwise.

## v1

Version 1 is intentionally minimal.

It provides:

- TCP transport
- Request/response communication
- Protocol identification
- Protocol version identification
- A dynamic MOTD response

## Documentation

- [Specification →](/openmotd/specification/)
- [Protocol →](/openmotd/specification/protocol/)
- [MOTD Format →](/openmotd/specification/motd/)
- [Implementations →](/openmotd/implementations/)
