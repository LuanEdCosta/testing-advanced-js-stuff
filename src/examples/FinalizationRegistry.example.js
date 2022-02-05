const { getExampleNumber, runExample } = require("../utils/Example.utils.js");

const basicExample = () => {
  const someObject = { test: "test" };

  const registry = new FinalizationRegistry((heldValue) => {
    console.log("The object was garbage-collected");
    console.log("Held Value: ", heldValue);
  });

  registry.register(someObject, "Held Value");
};

runExample(getExampleNumber(), {
  1: basicExample,
});
