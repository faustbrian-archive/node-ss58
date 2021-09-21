**You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/faustbrian).**

---

# @faustbrian/node-ss58

[![npm version](https://badgen.net/npm/v/@faustbrian/node-ss58)](https://npm.im/@faustbrian/node-ss58)

## Installation

```
pnpm install @faustbrian/node-ss58
```

## Usage

```ts
import { encode, decode } from "@faustbrian/node-ss58";

decode(encode("10b22ebe89b321370bee8d39d5c5d411daf1e8fc91c9d1534044590f1f966ebc", 42), 42);
```

## License

This is an open-sourced software licensed under the [AGPL-3.0-or-later](LICENSE).
