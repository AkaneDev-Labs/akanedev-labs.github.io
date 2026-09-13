---
layout: wiki
title: MOTD Format
description: The structured JSON format used by OpenMOTD v1.
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

# MOTD Format

OpenMOTD v1 responses are JSON documents.

## Minimum Response

The smallest valid OpenMOTD v1 response is:

```json
{
  "protocol": "openmotd",
  "version": 1,
  "server": {
    "name": "Example Server",
    "description": "An OpenMOTD server."
  }
}
```

## Root Object

| Field | Type | Required | Description |
|---|---|---:|---|
| `protocol` | string | Yes | Must be `openmotd`. |
| `version` | integer | Yes | OpenMOTD protocol version. |
| `server` | object | Yes | Basic server information. |
| `players` | object | No | Player count information. |
| `links` | array | No | Links associated with the server. |

## Server Object

| Field | Type | Required | Description |
|---|---|---:|---|
| `name` | string | Yes | Human-readable server name. |
| `description` | string | Yes | Human-readable server description. |
| `address` | string | No | Server connection address. |
| `icon` | string | No | Server icon as a data URI. |

## Players Object

| Field | Type | Required | Description |
|---|---|---:|---|
| `online` | integer | Yes if object exists | Number of currently online players. |
| `max` | integer | Yes if object exists | Advertised maximum player capacity. |

The `online` value MUST NOT be negative.

The `max` value MUST be positive.

## Links

Each link is an object containing:

```json
{
  "name": "Website",
  "url": "https://example.com"
}
```

Both `name` and `url` are required.

The `url` MUST be an absolute URL.

## Icon

The v1 icon value is a data URI.

Example:

```text
data:image/png;base64,...
```

PNG is the recommended image format.

Clients MAY ignore icons.

## Complete Example

```json
{
  "protocol": "openmotd",
  "version": 1,
  "server": {
    "name": "Example Minecraft Server",
    "description": "A friendly survival server.",
    "address": "play.example.com",
    "icon": "data:image/png;base64,..."
  },
  "players": {
    "online": 42,
    "max": 100
  },
  "links": [
    {
      "name": "Website",
      "url": "https://example.com"
    },
    {
      "name": "Discord",
      "url": "https://discord.gg/example"
    }
  ]
}
```
