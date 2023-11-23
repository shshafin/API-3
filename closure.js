function name() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const watch1 = name();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());

// closure === function er moddhe internal ekta function uporer variable ke access korte parle take closure bole

// a closure gives you access to an outer function's scope from inner function
