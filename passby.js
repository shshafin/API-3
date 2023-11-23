// primitive ===  age pore pass korleo output same
// primitive's are pass by values
let n1 = 2;
let n2 = 3;

function number(a, b) {
  a = 28;
  const sum = a * b;
  return sum;
}
console.log(n1);
number(n1, n2);
console.log(n1);


// object and array are pass by reference
// non primitive === age pass korle variable er value tai dekhabe pore pass korle function e change korle oi changed value dekhabe
let student1 = { name: "shafin", partner: "swarna" };
let student2 = { name: "afia", partner: "jakia" };

function couples(couple1, couple2) {
  couple1.name = "sadnan";
  couple1.partner = "shaila";
}
console.log(student1, student2);
couples(student1, student2);
console.log(student1, student2);


