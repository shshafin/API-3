// parameter == jegula declare korbo function e
// arguments == jegula pathabo

function name(a, b, c, d) {
  //   console.log(arguments);
  //   for (let i = 0; i < arguments.length; i++) {
  //     const element = arguments[i];
  //     console.log(element);
  //   }

  // convert into array
  console.log([...arguments]);

  const sum = a + b + c+d;
  return sum;
}

const result = name(2, 3, 4, 5, 6, 7, 8, 9);
console.log(name.length);
