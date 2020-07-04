function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant;
}

function addMenuItem(restaurant, item) {
    if (restaurant.menus[item.type].includes(item)) {
    } else {
      restaurant.menus[item.type].push(item);
      return restaurant;
    }
}



function removeMenuItem(restaurant, itemName, type) {
  function findItemByName(item) {
    if (item.name === itemName) {
      return true
    } else {
      return false;
    }
  }

  if (type === undefined) {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
    } else {
    var indexOfItemToDelete = restaurant.menus[type].findIndex(findItemByName);
    if (indexOfItemToDelete === -1) {
      return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
    } else {
      restaurant.menus[type].splice(indexOfItemToDelete, 1);
      return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
    }
  }
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
