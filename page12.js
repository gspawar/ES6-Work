console.log("hi");

function couter() {
  let counter = 0;
  console.log("couter", this);
  function count() {
    console.log("count", this);

    return function incrementCounter() {
      console.log("incrementCounter", this);
      return counter++;
    };
  }
  return count();
}

var c = couter();

console.log(c());
console.log(c());
console.log(c());