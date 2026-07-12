class FoodItem {
  constructor(name, calories, protein) {
    this.name = name;
    this.calories = calories;
    this.protein = protein;
  }
}

export { FoodItem };


let meals = [];

const addFood = (nome, calorie, proteine) => {
  const item = new FoodItem(nome, calorie, proteine);
  meals = [...meals, item];
  console.log(meals);
};

// Esempi di test
addFood('Mela', 95, 0.5);
addFood('Uovo', 78, 6);