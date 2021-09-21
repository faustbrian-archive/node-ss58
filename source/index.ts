import { hash as blake2b } from "@faustbrian/node-blake2b";
import { base58 } from "bstring";

export const encode = (publicKey: string, checksum: number): string => {
  const publicKeyBytes: Buffer = Buffer.from(publicKey, "hex");

  if (publicKeyBytes.length != 32) {
    throw new Error("Invalid address length");
  }

  const bytes: Buffer = Buffer.from([checksum, ...publicKeyBytes]);
  const hash: Buffer = blake2b(bytes);

  const a: number | undefined = hash[0];
  const b: number | undefined = hash[1];

  if (a === undefined || b === undefined) {
    throw new Error("Failed to derive all parameters for encoding.");
  }

  return base58.encode(Buffer.from([...bytes, a, b]));
};

export const decode = (address: string, checksum: number): Buffer => {
   let buffer: Buffer = base58.decode(address);

  if (buffer[0] == checksum) {
    if (buffer.length == 32 + 1 + 2) {
      const address: Buffer = buffer.slice(0, 33);
      const hash: Buffer = blake2b(address);

      if (buffer[33] == hash[0] && buffer[34] == hash[1]) {
        return address.slice(1);
      }
    }
  }

  throw new Error("Failed to decode the given address.");
};
