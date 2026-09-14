---
layout: wiki
title: MOTD Format
description: The JSON message format used by OpenMOTD v1.
wiki_title: OpenMOTD
wiki_root: /openmotd/
permalink: /openmotd/specification/motd/
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
  - title: The v1.5 Layers
  - title: Identity Layer
    url: /openmotd/identitylayer
---


OpenMOTD v1 messages use JSON.

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
  "motd": "Welcome to Example SMP!"
}
```

## Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `protocol` | string | Yes | Must be `openmotd`. |
| `version` | integer | Yes | OpenMOTD protocol version. |
| `motd` | string | Yes in a v1 response | Current server MOTD. |

## Dynamic Responses

The server can return different responses at different times.

```json
{
  "protocol": "openmotd",
  "version": 1,
  "motd": "Server maintenance is in progress."
}
```

The client displays the response it receives. It does not need to understand why the server selected it.

## Future Fields

Future versions may add fields to the response.

A v1 client MUST ignore fields it does not recognise.
