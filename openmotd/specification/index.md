---
layout: wiki
title: Specification
description: The OpenMOTD v1 protocol specification.
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

# OpenMOTD v1

**Status:** Draft
**Protocol:** OpenMOTD
**Version:** 1

## 1. Overview

OpenMOTD is an open protocol for providing structured server information to clients.

OpenMOTD is designed to provide more information than a traditional Minecraft Server List Ping while remaining simple enough for lightweight clients and servers to implement.

**Version 1 defines the minimum required feature set for OpenMOTD compatibility.**

## 2. Versioning

OpenMOTD uses additive protocol versioning.

A server implementing a newer version of OpenMOTD MUST retain support for all functionality defined by previous versions unless a future specification explicitly states otherwise.

For example:

```text
v1
 ↓
v2 = v1 + new features
 ↓
v3 = v2 + new features
```

An OpenMOTD v1 client MUST be able to process the v1-compatible portion of a response from a newer OpenMOTD server.

## 3. Transport

OpenMOTD v1 uses HTTP(S) as its transport.

The server MUST expose an OpenMOTD endpoint.

For example:

```text
https://example.com/openmotd
```

Responses MUST use:

```text
Content-Type: application/json
```

HTTPS SHOULD be used where available.

## 4. Protocol Identification

Every OpenMOTD response MUST identify itself as OpenMOTD and provide its protocol version.

Example:

```json
{
  "protocol": "openmotd",
  "version": 1
}
```

The `protocol` field MUST contain `openmotd`.

The `version` field MUST contain the integer protocol version implemented by the server.

## 5. Server Information

A v1 response MUST provide the basic identity of the server.

Example:

```json
{
  "protocol": "openmotd",
  "version": 1,

  "server": {
    "name": "Example Minecraft Server",
    "description": "A Minecraft server running OpenMOTD."
  }
}
```

### `server.name`

The human-readable name of the server.

### `server.description`

A human-readable description of the server.

Both values MUST be strings.

## 6. Server Address

A server MAY provide its connection address.

Example:

```json
{
  "server": {
    "name": "Example Minecraft Server",
    "description": "A Minecraft server running OpenMOTD.",
    "address": "play.example.com"
  }
}
```

The `address` field is a string containing the hostname or address clients can use to connect.

A port MAY be included where necessary:

```text
play.example.com:25565
```

## 7. Player Information

A v1 server MAY provide current player information.

Example:

```json
{
  "players": {
    "online": 12,
    "max": 100
  }
}
```

`online` MUST be a non-negative integer.

`max` MUST be a positive integer representing the advertised maximum player capacity.

If the server does not provide player information, the `players` object MAY be omitted.

## 8. Server Icon

A server MAY provide an icon.

Example:

```json
{
  "server": {
    "name": "Example Minecraft Server",
    "description": "A Minecraft server running OpenMOTD.",
    "icon": "data:image/png;base64,..."
  }
}
```

The icon MUST be supplied as a data URI.

PNG SHOULD be used.

Clients MAY ignore the icon if they do not support displaying it.

## 9. Links

A server MAY provide links associated with the server.

Example:

```json
{
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

Each link MUST contain:

- `name` — human-readable link name
- `url` — absolute URL

Clients MAY choose which links they display.

## 10. Complete Example

A complete v1 response could look like:

```json
{
  "protocol": "openmotd",
  "version": 1,

  "server": {
    "name": "Example Minecraft Server",
    "description": "A friendly Minecraft survival server.",
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

## 11. Client Requirements

An OpenMOTD v1 client MUST:

1. Recognise the `openmotd` protocol identifier.
2. Recognise protocol version `1`.
3. Parse the JSON response.
4. Read the `server.name` field.
5. Read the `server.description` field.
6. Gracefully handle optional fields.

Clients MUST NOT assume that optional fields are present.

For example, this is valid v1:

```json
{
  "protocol": "openmotd",
  "version": 1,

  "server": {
    "name": "Minimal Server",
    "description": "A minimal OpenMOTD server."
  }
}
```

This represents the minimum valid OpenMOTD v1 response.

## 12. Unknown Fields

Clients MUST ignore fields they do not recognise.

Servers MAY include fields defined by future protocol versions, provided that doing so does not prevent a v1 client from processing the v1 fields.

This allows the protocol to evolve without immediately breaking older clients.

## 13. Compatibility

OpenMOTD v1 is the baseline protocol version.

Any future OpenMOTD protocol version MUST build upon v1 unless a future specification explicitly defines a breaking change.

A v2 implementation, for example, MUST retain all v1 functionality while adding the features defined by v2.
