---
layout: wiki
title: Protocol
description: Transport, framing, requests, responses, and versioning for OpenMOTD.
wiki_title: OpenMOTD
wiki_root: /openmotd/
permalink: /openmotd/specification/protocol/
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

# Protocol

## Transport

OpenMOTD v1 uses TCP.

The protocol is independent of HTTP, HTTPS, web servers, and specific Minecraft server software.

## Request/Response

Communication consists of one request followed by a response.

```text
Client → Server: Request
Client ← Server: Response
```

## Framing

Each TCP message is framed with a 4-byte unsigned big-endian payload length followed by the JSON payload.

```text
[ 4-byte payload length ][ JSON payload ]
```

This prevents implementations from relying on TCP packet boundaries.

## Request

```json
{
  "protocol": "openmotd",
  "version": 1
}
```

## Response

```json
{
  "protocol": "openmotd",
  "version": 1,
  "motd": "Welcome!"
}
```

## Dynamic MOTDs

The server is responsible for choosing the response according to its current state.

The protocol does not prescribe a fixed set of states.

A server can therefore implement states such as:

- Online
- Maintenance
- Full
- Starting
- Event
- Closed

without requiring a new protocol version.

## Compatibility

Clients MUST ignore unknown fields.

Future protocol versions should add functionality rather than replacing the v1 model.
