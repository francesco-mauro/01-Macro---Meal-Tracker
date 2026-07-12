import {FoodItem} from "./FoodItem.js";

let meals = [];

const addFood = (nome, calorie, proteine) => {
  const item = new FoodItem(nome, calorie, proteine);
  meals = [...meals, item];
  console.log(meals);
};

// Esempi di test
addFood("Mela", 95, 0.5);
addFood("Uovo", 78, 6);

const form = document.getElementById("meal-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("foodName").value.trim();
  const calories = parseFloat(document.getElementById("calories").value) || 0;
  const protein = parseFloat(document.getElementById("protein").value) || 0;
  addFood(name, calories, protein);
  form.reset();
});
