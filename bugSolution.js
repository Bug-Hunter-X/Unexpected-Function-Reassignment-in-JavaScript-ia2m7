function foo(a,b){
  'use strict';
  return a+b;}
console.log(foo(2,3));
foo = 5;
console.log(foo); // Output: 5. foo is no longer a function
//Alternative: Using a closure
function createAdder(){
  function add(a, b){
    return a+b;
  }
  return add;
}
const adder = createAdder();
console.log(adder(2,3)); //output: 5
adder = 5; 
console.log(adder(2,3));// throws error because adder is not a function