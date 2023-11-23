// hoisting === function ke ekdom upor theke call kora jabe
name();

function name() {
  console.log(5);
}

// block scope === limitation. if er range jototuk tototuk e tar block scope

function nuu(a) {
  if (a > 5) {
    console.log("jf");
  } else {
    console.log("fbg");
  }
}

// let const block scope . var hoisting
