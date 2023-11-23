function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingHandler(name) {
  console.log("hello", name);
}

greeting(greetingHandler, "world");

// callback function === ekta function er argument hishebe arekta function ke pathaile & oi parameter function ke vitore call kora
