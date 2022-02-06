const { getExampleNumber, runExample } = require("../utils/Example.utils.js");

/**
 * Endian and endianness (or "byte-order") describe how computers organize the bytes that make up numbers.
 */
const basicExample = () => {
  const isLittleEndian = (() => {
    var buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, true); // Uses Little Endian
    return new Int16Array(buffer)[0] === 256; // Uses platform endianness
  })();

  const isBigEndian = (() => {
    var buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, false); // Uses Big Endian
    return new Int16Array(buffer)[0] === 256; // Uses platform endianness
  })();

  const isBigEndian2 = (() => {
    var buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, false); // Uses Big Endian
    return new DataView(buffer).getInt16(0, false) === 256; // Compares with Big Endian
  })();

  console.log("isLittleEndian", isLittleEndian);
  console.log("isBigEndian", isBigEndian);
  console.log("isBigEndian2", isBigEndian2);
};

runExample(getExampleNumber(), {
  1: basicExample,
});
