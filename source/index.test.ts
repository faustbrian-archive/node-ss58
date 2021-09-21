import { decode, encode } from "./index";

const publicKey: string = "10b22ebe89b321370bee8d39d5c5d411daf1e8fc91c9d1534044590f1f966ebc";

test("#encode", () => {
  expect(encode(publicKey, 42)).toStrictEqual("5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYHAH8");
  expect(encode(publicKey, 2)).toStrictEqual("CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz6323P2");
  expect(encode(publicKey, 0)).toStrictEqual("1NthTCKurNHLW52mMa6iA8Gz7UFYW5UnM3yTSpVdGu4Tbgm");
});

test("#decode", () => {
  expect(decode("5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYHAH8", 42).toString("hex")).toStrictEqual(publicKey);
  expect(decode("CxDDSH8gS7jecsxaRL9Txf8H5kqesLXAEAEgp76Yz6323P2", 2).toString("hex")).toStrictEqual(publicKey);
  expect(decode("1NthTCKurNHLW52mMa6iA8Gz7UFYW5UnM3yTSpVdGu4Tbgm", 0).toString("hex")).toStrictEqual(publicKey);
});
