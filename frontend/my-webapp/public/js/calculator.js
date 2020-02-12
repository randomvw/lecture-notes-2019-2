let addButtonNode = document.querySelector('#addButton');
let calculateButtonNode = document.querySelector('#calculateButton');

addButtonNode.addEventListener('click', event => {
  let pricesDivNode = document.querySelector('#formPrices');
  let inputNode = document.createElement('input');
  inputNode.name = "price[]";
  inputNode.type = "text";
  let breakNode = document.createElement('br');
  pricesDivNode.appendChild(inputNode);
  pricesDivNode.appendChild(breakNode);
  console.log('add new');
});

calculateButtonNode.addEventListener('click', event => {
  console.log('calculate');
  let inputNodes = document.querySelectorAll("input[name='price[]']");
  let sum = 0;
  inputNodes.forEach(node => sum += Number.parseInt(node.value));
  let divSumNode = document.querySelector('#sum');
  divSumNode.textContent = sum;
});
