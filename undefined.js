/**
 * 8 ways to get undefined
 *
 * 1.variable that is not initialized will give undefined
 * 2.function with no return
 * 3.parameter that is not passed will give undefined
 * 4.if return has nothing on the right side will give undefined
 * 5.property that doesn't exist on an object wil give undefined
 * 6.accessing array elements outside of the index range
 * 7.deleting an element inside an array
 * 8.set a value directly to undefined
 */

// we shouldn't use undefined instead of null

const name = undefined; // wrong

const name2 = null; // right
console.log(name2);
