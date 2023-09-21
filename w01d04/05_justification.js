// single responsiblity principle

// forEach
const myFunc = function(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const index = i;
    callback(element, index, arr);
  }
};

const names = ['alice', 'bob', 'carol'];

const myCallback = function(name, index) {
  console.log(`goodbye ${name} from index ${index}`);
};

myFunc(names, myCallback);

// myFunc([1, 2, 3], function(num) { console.log(num * 2)});

// names.forEach(function(name, index, ogArray) {
//   console.log('element', name);
//   console.log('index', index);
//   console.log('ogArray', ogArray);
//   console.log();
//   // console.log(`goodbye ${name}`);
// });
