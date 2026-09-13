---
layout: wiki
title: OpenMOTD
description: An open protocol for providing structured Minecraft server information.
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

# OpenMOTD

OpenMOTD is an open protocol for providing structured information about Minecraft servers.

It is designed to provide richer server information than a traditional Server List Ping while remaining simple enough for lightweight clients and servers to implement.

## Protocol Versions

OpenMOTD uses additive protocol versioning.

Each new protocol version builds upon the previous version rather than replacing it.

```text
v1
 ↓
v2 = v1 + new features
 ↓
v3 = v2 + new features
```

Version 1 is the baseline protocol. Future versions add functionality while retaining the functionality of previous versions unless a specification explicitly defines otherwise.

## Current Version

**OpenMOTD v1**

v1 defines the minimum functionality required for an OpenMOTD implementation.

[Read the v1 specification →](/openmotd/specification/)

## Design Goals

OpenMOTD is designed around several principles:

- **Open** — the protocol is publicly documented.
- **Simple** — the baseline should be easy to implement.
- **Additive** — new versions should build upon older versions.
- **Extensible** — clients should safely ignore information they do not understand.
- **Minecraft-focused** — the protocol is intended for Minecraft server information.

## Documentation

Use the navigation on the left to explore the specification and implementation documentation.
