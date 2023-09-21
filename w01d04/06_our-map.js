const ourMap = function(arr, callback) {
  // create an output array
  const output = [];

  // loop through the provided array
  for (let i = 0; i < arr.length; i++) {
    // grab the current element
    const element = arr[i];

    // call the provided callback with the element and index AND capture the return value
    const returnVal = callback(element, i, arr);

    // push the returnVal to the output array
    output.push(returnVal);
  }

  // return the output array
  return output;
};

const nums = [1, 2, 3, 4];

const doOnEachLoop = function(num) {
  return num * 2;
};

const mappedNums = ourMap(nums, doOnEachLoop);

const builtInMap = nums.map(doOnEachLoop)

console.log('original', nums);
console.log('mapped', mappedNums);
console.log('builtin', builtInMap);
