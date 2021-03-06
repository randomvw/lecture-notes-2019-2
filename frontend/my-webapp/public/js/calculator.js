import { request } from "express";

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
  /*
    {
      prices: [
        3,
        5,
        7
      ]
    }

    {
      sum: 15
    }
  */
  let prices = inputNodes.map(node => Number.parseInt(node.value)); // [3, 5, 7]
  let requestObj = { prices };
  console.log(requestObj);

  let divSumNode = document.querySelector('#sum');
  divSumNode.textContent = sum;
});
