const { getExampleNumber, runExample } = require("../utils/Example.utils.js");

/**
 * WeakMap uses the memory address of the key object to gey the value.
 * You cannot see the keys and values logging the WeakMap instance.
 */
const basicExample = () => {
  const key = { test: "test" };
  const weakMap = new WeakMap();
  weakMap.set(key, { value: "value" });
  console.log("ORIGINAL", weakMap, JSON.stringify(weakMap));
  console.log("GET", weakMap.get(key), weakMap.get({ test: "test" }));
  console.log("HAS", weakMap.has(key), weakMap.has({ test: "test" }));
  console.log("DELETE", weakMap.delete({ test: "test" }), weakMap.delete(key));
  console.log("DELETE", weakMap.delete({ test: "test" }), weakMap.delete(key));
  console.log("ORIGINAL", weakMap, JSON.stringify(weakMap));
};

runExample(getExampleNumber(), {
  1: basicExample,
});
