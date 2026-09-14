---
layout: wiki
title: Identity Layer
description: The OpenMOTD v1.5 Identity Layer.
wiki_title: OpenMOTD
wiki_root: /openmotd/
permalink: /openmotd/identitylayer/
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
  - divider: The v1.5 Layers
  - title: Identity Layer
    url: /openmotd/identitylayer/
---

## Identity Layer

The **Identity Layer** is introduced in OpenMOTD v1.5.

It allows a client to provide a server with an identity consisting of a **username** and **UUID**, allowing the server to provide a different MOTD depending on the player requesting it.

The Identity Layer is **not an authentication system** and must not be treated as one.

### Identity

An identity consists of two fields:

```json
{
  "username": "ExamplePlayer",
  "uuid": "00000000-0000-0000-0000-000000000000"
}
````

| Field      | Type   | Description                                        |
| ---------- | ------ | -------------------------------------------------- |
| `username` | String | The Minecraft username associated with the client. |
| `uuid`     | String | The UUID associated with the client.               |

Both fields SHOULD be provided when using the Identity Layer.

### Identity Request

A v1.5 client MAY include an identity object in its OpenMOTD request:

```json
{
  "protocol": "openmotd",
  "version": 1,
  "identity": {
    "username": "ExamplePlayer",
    "uuid": "00000000-0000-0000-0000-000000000000"
  }
}
```

A v1 client that does not provide an identity MUST continue to be supported by v1.5 servers.

### Incomplete Identity

An identity is considered **incomplete** if the `identity` object is present but does not contain both `username` and `uuid`.

For example:

```json
{
  "identity": {
    "username": "ExamplePlayer"
  }
}
```

or:

```json
{
  "identity": {
    "uuid": "00000000-0000-0000-0000-000000000000"
  }
}
```

A server MUST NOT treat an incomplete identity as a complete identity.

The server MAY ignore the incomplete identity and process the request as an unidentified request.

An incomplete identity MUST NOT result in an error solely because the identity is incomplete.

### Identity Matching

A server MAY maintain its own list of recognised identities, such as a whitelist of players.

The server MAY compare the identity supplied by the client against this list to determine which MOTD to return.

For example, a server could configure a whitelist containing:

```text
ExamplePlayer
00000000-0000-0000-0000-000000000000
```

If the supplied identity matches an entry in the server's configured whitelist, the server may return a MOTD intended for recognised players.

If the supplied identity does not match an entry, the server may return the default MOTD.

The Identity Layer does **not** define or manage the whitelist itself. The whitelist is an implementation-specific server configuration.

### Identity Is Not Trusted

The Identity Layer **MUST NOT be considered proof of identity**.

The username and UUID supplied by a client are treated as claims made by that client. A server MUST NOT use the Identity Layer as the sole basis for security-sensitive decisions.

The Identity Layer is intended for purposes such as:

* Personalised MOTDs
* Player-specific server information
* Whitelisted MOTDs
* Showing different server states to known players
* Other non-security-sensitive customisation

It is not intended to provide:

* Account authentication
* Authorisation
* Proof of ownership
* Secure player verification
* Protection against identity spoofing

### Compatibility

Servers implementing v1.5 SHOULD continue to accept standard v1 requests.

A client that does not support the Identity Layer may send:

```json
{
  "protocol": "openmotd",
  "version": 1
}
```

A v1.5 server receiving such a request MUST treat the client as having no supplied identity and return the appropriate default MOTD.

Unknown identity fields MUST be ignored.

### Privacy

The Identity Layer does not require sensitive authentication credentials.

The identity consists only of information associated with a Minecraft player and is not intended to be secret.

Implementations SHOULD avoid transmitting additional personal or sensitive information through the Identity Layer.
