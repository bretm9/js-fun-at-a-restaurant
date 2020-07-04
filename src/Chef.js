class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customer, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${customer}!`;
    } else {
      return `Hello, ${customer}!`;
    }
  }

  checkForFood(item) {
    if (this.restaurant.menus[item.type].includes(item)) {
      return `Yes, we're serving ${item.name} today!`;
    } else {
      return `Sorry, we aren't serving ${item.name} today.`;
    }
  }

}

module.exports = Chef;
