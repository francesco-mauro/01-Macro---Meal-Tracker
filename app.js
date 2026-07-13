import {FoodItem} from './foodItem.js';

let meals = [];

function addFood(nome, calorie, proteine) {
  const item = new FoodItem(nome, calorie, proteine);
  meals = [...meals, item];
  console.log(meals);
}

