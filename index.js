"use strict";
function updateInventory(current, incoming) {
  // function to sort array alphabetically by item
  function sortArray(arr) {
    return arr.sort((a, b) => a[1].localeCompare(b[1]));
  }

  // if either input is empty, just return the other, sorted
  if (incoming.length === 0) {
    return sortArray(current);
  }
  if (current.length === 0) {
    return sortArray(incoming);
  }

  // function to turn arrays into objects with key-value pairs
  var objectify = function (inv) {
    return inv.reduce((acc, el) => {
      acc[el[1]] = el[0];
      return acc;
    }, {});
  };

  // new stock and delivery transformed into objects
  var stock = objectify(current);
  var delivery = objectify(incoming);

  // merge stock and delivery values
  for (let item in delivery) {
    stock[item] = delivery[item] + stock[item] || delivery[item];
  }

  // translate stock object back to array with correct format
  var answer = [];

  for (let item in stock) {
    answer.push([stock[item], item]);
  }
  // console.log(answer);

  // sort answer alphabetically by item name
  return sortArray(answer);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
