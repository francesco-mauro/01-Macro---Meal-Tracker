import { FoodItem } from "./foodItem.js";

let meals = [];

function addFood(nome, calorie, proteine) {
  const item = new FoodItem(nome, calorie, proteine);
  meals = [...meals, item];
  console.log(meals);
  renderMeals();
}

const renderMeals = () => {
  const listElement = document.getElementById("meal-list");
  if (!listElement) {
    console.warn("Elemento #meal-list non trovato");
    return;
  }

  const htmlString = meals
    .map(({ name, calories, protein }) => {
      return `
        <li class="meal-item">
          <strong>${name}</strong> - ${calories} kcal - ${protein} g protein
        </li>`;
    })
    .join("");

  listElement.innerHTML = htmlString;
};

addFood("Mela", 95, 0.5);

const form = document.getElementById("meal-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("foodName").value.trim();
    const calories = parseFloat(document.getElementById("calories").value) || 0;
    const protein = parseFloat(document.getElementById("protein").value) || 0;
    if (!name) return;
    addFood(name, calories, protein);
    form.reset();
  });
} else {
  console.warn("Elemento #meal-form non trovato");
}
