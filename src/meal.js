function nameMenuItem(menuItemName) {
  return "Delicious " + menuItemName;
}

function createMenuItem(menuItemName, price, menuItemType) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: menuItemType
  }
  return menuItem;
}

function addIngredients(ingredientsToAdd, ingredientsArray) {
  if (ingredientsArray.includes(ingredientsToAdd) === true) {
  }
  else {
    ingredientsArray.push(ingredientsToAdd);
    return ingredientsArray;
  }
}

function formatPrice(initialPrice) {
  formattedPrice = "$" + initialPrice;
  return formattedPrice;
}

function decreasePrice(menuItemPrice) {
  // create a var decreasedPrice that equals menuItemPrice decreased by 10%
  var decreasedPrice = menuItemPrice * .9;
  return decreasedPrice;
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
