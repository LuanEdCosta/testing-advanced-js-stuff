const { getExampleNumber, runExample } = require("../utils/Example.utils.js");

const naruto = {
  name: "Naruto Uzumaki",
  clan: "Uzumaki",
  jinchuuriki: true,
};

const reflectGet = () => {
  const name = Reflect.get(naruto, "name");
  console.log(name);
};

const reflectSet = () => {
  const success = Reflect.set(naruto, "favoriteJutsu", "Rasengan");
  console.log(success, naruto.favoriteJutsu);
};

const reflectHas = () => {
  const hasClan = Reflect.has(naruto, "clan");
  const hasSharingan = Reflect.has(naruto, "hasSharingan");
  console.log(hasClan, hasSharingan);
};

const reflectOwnKeys = () => {
  const keys = Reflect.ownKeys(naruto);
  console.log(keys);
};

const reflectDeleteProperty = () => {
  const success = Reflect.deleteProperty(naruto, "clan");
  console.log(success, naruto);
};

runExample(getExampleNumber(), {
  1: reflectGet,
  2: reflectSet,
  3: reflectHas,
  4: reflectOwnKeys,
  5: reflectDeleteProperty,
});
