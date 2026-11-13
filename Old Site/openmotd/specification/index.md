---
layout: wiki
title: Specification
description: The OpenMOTD v1 protocol specification.
wiki_title: OpenMOTD
wiki_root: /openmotd/
sidebar:
  - divider: Main
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
  - divider: The v1.5 Layers
  - title: Identity Layer
    url: /openmotd/identitylayer/
---

# OpenMOTD v1

**Status:** Draft  
**Protocol:** OpenMOTD  
**Version:** 1

## 1. Overview

OpenMOTD is an open network protocol for providing dynamic server information to clients.

Version 1 defines the minimum protocol required for a compatible implementation.

The primary purpose of v1 is to allow a client to request the server's current MOTD and receive a response selected according to the server's current state.

## 2. Transport

OpenMOTD v1 uses **TCP** as its transport.

It does not require HTTP, HTTPS, a web server, or any particular Minecraft server implementation.

TCP provides a broadly available transport while leaving the application protocol independent of the game host.

## 3. Communication

OpenMOTD v1 uses a simple request/response model.

```text
Client                         Server
  │                              │
  │──── OpenMOTD Request ───────>│
  │                              │
  │<──── OpenMOTD Response ──────│
  │                              │
```

The client sends a v1 request.

The server determines its current state and returns the appropriate v1 response.

## 4. TCP Framing

TCP is a byte stream rather than a message protocol. Implementations therefore MUST use explicit message framing.

Each message consists of:

```text
┌──────────────┬─────────────────────────┐
│ Length       │ Payload                 │
│ 4 bytes      │ N bytes                 │
└──────────────┴─────────────────────────┘
```

The length field contains the size of the payload in bytes.

The payload is the JSON message.

The length field SHOULD use unsigned 32-bit big-endian byte order.

## 5. Request

A v1 request identifies the OpenMOTD protocol and requested version.

```json
{
  "protocol": "openmotd",
  "version": 1
}
```

## 6. Response

A valid v1 response contains the protocol, version, and current MOTD.

```json
{
  "protocol": "openmotd",
  "version": 1,
  "motd": "Welcome to Example SMP!"
}
```

The `protocol` field MUST contain `openmotd`.

The `version` field MUST contain `1` for a v1 response.

The `motd` field MUST contain a string.

## 7. Dynamic Responses

The server MAY return different MOTDs depending on its current state.

For example, during normal operation:

```json
{
  "protocol": "openmotd",
  "version": 1,
  "motd": "Welcome to Example SMP!"
}
```

During maintenance:

```json
{
  "protocol": "openmotd",
  "version": 1,
  "motd": "The server is currently undergoing maintenance."
}
```

When full:

```json
{
  "protocol": "openmotd",
  "version": 1,
  "motd": "The server is currently full."
}
```

The protocol does not require the client to understand the server's internal state. The server simply provides the MOTD appropriate to that state.

## 8. Minimum Implementation

The smallest valid v1 response is:

```json
{
  "protocol": "openmotd",
  "version": 1,
  "motd": "Hello, Minecraft!"
}
```

No additional server information is required by v1.

## 9. Unknown Fields

Clients MUST ignore fields they do not recognise.

This allows future protocol versions to add information without breaking older clients.

## 10. Versioning

OpenMOTD versions are additive.

A v2 implementation MUST retain v1 functionality unless the v2 specification explicitly defines otherwise.

```text
v1
 ↓
v2 = v1 + additions
 ↓
v3 = v2 + additions
```

This makes v1 the compatibility baseline for the OpenMOTD protocol.
