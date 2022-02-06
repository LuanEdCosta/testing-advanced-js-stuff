const { getExampleNumber, runExample } = require("../utils/Example.utils.js");

/**
 * You can log symbols and a symbol creates a unique attribute on the object.
 */
const basicExample = () => {
  const symbol = Symbol("symbol");
  const data = {};
  data[symbol] = "Data 1";
  data["symbol"] = "Data 2";
  console.log("Symbol", symbol);
  console.log("Data", data);
};

/**
 * All symbols are different from each other, even with the same description.
 */
const differentSymbolsExample = () => {
  const symbol1 = Symbol("symbol");
  const symbol2 = Symbol("symbol");
  const data = {};
  data[symbol1] = "Data 1";
  data[symbol2] = "Data 2";
  data["symbol"] = "Data 3";
  console.log("Symbols", symbol1, symbol2);
  console.log("Data", data);
};

/**
 * All symbol properties and functions.
 */
const symbolDataExample = () => {
  const symbol = Symbol("symbol");
  console.log(symbol);
  console.log(symbol.description);
  console.log(symbol.valueOf());
  console.log(symbol.toString());
};

runExample(getExampleNumber(), {
  1: basicExample,
  2: differentSymbolsExample,
  3: symbolDataExample,
});
