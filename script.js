"use strict";
// John => Hello my dear John
// Helen => Hi 
// Don => good Morning 
// Rick=> Hello my dear Rick
// => Hi, User 

function hello2( value ) {
  let result;
  switch (value) {
    case 'John':
    case 'Rick':
      result = `Hello my dear ${value}`
      break;

    case 'Helen':
      result = 'Hi';
      break;

    case 'Don':
      result = 'good Morning';
      break;

    default:
      result = 'Hi, User';
  }

  return result;
}

function hello(m) {
  if (typeof m === typeof "string") {
    console.log("hello, " + m);
    console.log(`hello, ${m}`);
  }
}

// hello("red")

function odd(a, b, reverse = false) {
  if ((typeof a === "number") && (typeof b === "number") && (typeof reverse === 'boolean')) {
    let startNum, endNum, increment;

    if (reverse === true) {
      increment = -1;
      startNum = a > b ? a : b;
      endNum = a < b ? a : b;
    } else {
      increment = 1;
      startNum = a < b ? a : b;
      endNum = a > b ? a : b;
    }
    if ((startNum % 2)) {
      startNum = startNum + increment
    }
    increment = increment * 2

    for (let i = startNum;
      (reverse ? i >= endNum : i <= endNum); i += increment) {
      console.log(i);
    }
  }
}

// odd(2, 20);
// odd("hello", "world")
// odd(2, "world")
// console.log("#######")
// odd(100, 2)
// odd(100, 2, true)