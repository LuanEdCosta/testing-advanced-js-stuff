const { getExampleNumber, runExample } = require("../utils/Example.utils.js");

const basicExample = () => {
  const firstItem = { first: "first" };
  const secondItem = { second: "second" };
  const thirdItem = { third: "third" };

  const weakSet = new WeakSet();
  weakSet.add(firstItem);
  weakSet.add(secondItem);

  // Shows nothing because WeakSet objects are not enumerable
  console.log(weakSet, JSON.stringify(weakSet));
  console.log(weakSet.has(firstItem), weakSet.has(thirdItem));
  console.log(weakSet.delete(secondItem), weakSet.delete(thirdItem));
};

runExample(getExampleNumber(), {
  1: basicExample,
});
