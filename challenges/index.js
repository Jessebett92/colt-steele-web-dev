const arr = ["hello", "goodbye", "hello", "goodbye", "hello"];

console.log([...new Set(arr)]);

console.log(arr.filter((item, index) => arr.indexOf(item) === index));

const isUniform = arr => {
  let test = null;
  arr.forEach(item => {
    if (item === arr[0]) {
      test = true;
    } else {
      test = false;
    }
  });
  console.log(test);
};

isUniform([1, 2, 5]);
