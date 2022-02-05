const { getExampleNumber, runExample } = require("../utils/Example.utils.js");

const spiderMan = {
  id: "123456",
  name: "Peter Parker",
  heroName: "Spider Man",
  email: "spider@gmail.com",
};

/**
 * Example 1:
 * Nobody should know that Peter is the Spider Man.
 * So when you try to access its name, the heroName is returned instead.
 */
const basicExample = () => {
  const handlers = {
    get(target, prop) {
      if (prop === "name") return target.heroName;
    },
  };

  const proxy = new Proxy(spiderMan, handlers);
  console.log(proxy.name);
};

/**
 * Example 2:
 * Spider Man will be always Spider Man, and you can only change its email.
 */
const exampleWithSet = () => {
  const handlers = {
    set(target, prop, value) {
      if (prop === "email") {
        target[prop] = value;
        return true;
      }

      console.log(`Editing: ${prop}`);
      console.log("Only The Email is Editable");
      return false;
    },
  };

  const proxy = new Proxy(spiderMan, handlers);
  console.log(proxy.email);
  proxy.email = "venom@gmail.com";
  console.log(proxy.email);
  proxy.name = "Venom";
};

runExample(getExampleNumber(), {
  1: basicExample,
  2: exampleWithSet,
});
