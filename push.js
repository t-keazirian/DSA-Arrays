const Array = require('./Array');

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  arr.pop();
  // arr.pop();
  // arr.pop();
  arr.push("tauhida");
  console.log(arr.get(0));
  
}

main();