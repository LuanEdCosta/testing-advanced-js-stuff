const { getExampleNumber, runExample } = require("../utils/Example.utils.js");

const basicExample = () => {};

runExample(getExampleNumber(), {
  1: basicExample,
});
