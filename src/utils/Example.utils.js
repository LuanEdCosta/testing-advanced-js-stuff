const { EOL } = require("os");

const getExampleNumber = () => {
  const args = process.argv.slice(2);
  const [exampleNumber] = args;
  return exampleNumber || 1;
};

const runExample = (exampleNumber, examples = {}) => {
  const exampleFunction = examples[exampleNumber];

  if (exampleFunction) {
    console.log(EOL, `--- Running Example ${exampleNumber} ---`, EOL);
    exampleFunction();
    console.log("");
    return true;
  }

  console.log(
    EOL,
    `--- The Example ${exampleNumber || ""} Was Not Found ---`,
    EOL
  );
};

module.exports = {
  runExample,
  getExampleNumber,
};
