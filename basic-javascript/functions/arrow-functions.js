/*
function getSum(numA, numB) {
  return numA + numB;
}
*/
const getSum = (numA, numB) => numA + numB;

console.log(getSum(2, 2));
const getArea = radius => Math.PI * radius * radius;

/*
* Remove function keyword and use an => after the parameters.
* Remove parens with a single parameter.
* Remove curly braces for single lines of code.
* Use implicit returns for single lines of code.
* If you have curly braces you need to use a return keyword.
* If you have zero parameters, then you use empty parens ()
*/

const sayHello = () => console.log("Hello");
sayHello();
sayHello();