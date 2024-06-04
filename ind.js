// Task 6:
function createFunctions() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

const funcs = createFunctions();
funcs.forEach((fn) => fn()); // 0, 1, 2, 3, 4
