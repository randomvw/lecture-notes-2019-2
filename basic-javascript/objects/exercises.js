// Create two pizza objects pizza1, pizza2 and assign them
// two properties, a price, and an array of toppings

let pizza1 = {
  price: 12.99,
  toppings: [ "pepperoni", "sausage" ]
}

let pizza2 = {
  price: 13.99,
  toppings: [ "bacon", "peppers", "onions" ]
}

// Add a size property to both pizzas after your objects are already created
pizza1.size = "large";
pizza2.size = "medium";

// Add a topping to pizza1 and pizza2
pizza1.toppings.push("mushrooms");
pizza2.toppings.push("extra cheese");