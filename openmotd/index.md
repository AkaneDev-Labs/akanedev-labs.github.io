---
layout: wiki

title: OpenMOTD
description: An open server information standard for Minecraft.

wiki_title: OpenMOTD

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

OpenMOTD is an open standard for delivering rich server information to Minecraft clients.

## Overview

OpenMOTD provides a separate protocol for servers and compatible clients to exchange information beyond Minecraft's normal Server List Ping.

## Why OpenMOTD?

Minecraft's normal MOTD is intentionally limited. OpenMOTD allows servers to provide richer information while remaining separate from the vanilla server status system.

## Features

- Rich MOTD documents
- Extensible protocol
- Client and server implementations
- Version negotiation
- Player-aware information
- Optional authentication
- Custom markup