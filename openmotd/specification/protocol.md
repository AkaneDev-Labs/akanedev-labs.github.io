---
layout: wiki
title: Protocol
description: OpenMOTD transport, versioning, compatibility, and protocol identification.
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

# Protocol

This page documents the protocol-level rules of OpenMOTD v1.

## Transport

OpenMOTD v1 uses HTTP(S).

An implementation exposes an endpoint that returns the OpenMOTD document.

```text
https://example.com/openmotd
```

The response MUST use JSON:

```text
Content-Type: application/json
```

HTTPS SHOULD be used where available.

## Protocol Identifier

Every response MUST contain:

```json
{
  "protocol": "openmotd",
  "version": 1
}
```

The `protocol` value is always `openmotd`.

The `version` value identifies the highest OpenMOTD protocol version implemented by the server.

## Versioning

OpenMOTD versions are additive.

A newer version MUST retain the functionality of previous versions unless a future specification explicitly defines otherwise.

```text
v1
 ↓
v2 = v1 + additions
 ↓
v3 = v2 + additions
```

## Unknown Fields

Clients MUST ignore fields they do not understand.

This allows newer servers to provide additional information without making older clients fail.

## Optional Data

Unless the specification marks a field as required, clients MUST be prepared for that field to be absent.

Servers SHOULD avoid returning meaningless placeholder values when an optional value is unavailable.

## Compatibility

A v1 client is only required to understand v1 fields.

A newer server MAY return additional fields, but the v1 fields MUST remain usable by a v1 client.
