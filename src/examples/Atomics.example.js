const { getExampleNumber, runExample } = require("../utils/Example.utils.js");

/**
 * Atomics was created to work with multiple threads.
 * When using the add, load or other static function from Atomics the read and write
 * operations are blocked to maintain consistency of the data.
 */
const basicExample = () => {
  const sab = new SharedArrayBuffer(1024);
  const uint = new Uint8Array(sab);
  uint[0] = 10;
  console.log(Atomics.add(uint, 0, 10));
  console.log(uint);
  console.log(uint[0], uint[1]);
  console.log(Atomics.load(uint, 0));
};

runExample(getExampleNumber(), {
  1: basicExample,
});
