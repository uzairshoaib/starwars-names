'use strict'

var starWarsNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');
var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random,
}
function random(number) {
  if(typeof number === 'undefined') {
    return getRandomItem();
  } else {
    var randomItems = [];
    for(var i=0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}