//start here, key value pair for a name and price. 
class Menu {
	
	constructor() {
		this.price_lookup = {}
		console.log("Created Menu")
	}
	getItemPrice(item) {
		return this.price_lookup[item] || 0 
	}
	setItemPrice(item, cost) {
		this.price_lookup[item] = cost
	}
} 

/*Create a system in which you can order a coffee through the coffee system
needs to take orderCoffee input, return a list of orders made and total cost over the day. 
You will use arrays, */
class CoffeeSystem {
	constructor() {
		this.orders = []
		this.menu = new Menu()
		this.menu.setItemPrice("latte", 4.5)
		this.menu.setItemPrice("flat white", 4.5)
		this.menu.setItemPrice("long black", 4.5)
		this.menu.setItemPrice("espresso", 2.1)
		this.menu.setItemPrice("doppio", 3.8)
	}

	getCoffee(coffee) {
		let price = 0;
		let coffeeTypes = {
			'latte': 10,
			'long black': 8,
			'flat white': 9,
			'doppio': 11
		};
		price = coffeeTypes[coffee] || 0; // "|| 0" basically creates a default class
		return price;

		// //take a string (coffee), return a price using a switch statement. Do this using an object/dictionary
		// let price = 0
		// switch(coffee) {
		// 	case 'latte':
		// 		price = 10;
		// 		break;
		// 	case 'long black':
		// 		price = 8;
		// 		break;
		// 	case 'flat white':
		// 		price = 9;
		// 		break;
		// 	case 'doppio':
		// 		price = 7;
		// 		break;
		// 	default: 
		// 		price = 0;
		// 		break;	
		// return price	
	}

	orderCoffee(customer, coffee) {
		const price = this.getCoffee(coffee)
		const order = new Order(coffee, customer, price)   /*array of orders */
		this.orders.push(order);
	}

	//at home, get total by returning a number which is the sum of all costs in this.orders 
	/*function*/ get total() {
		let sum = 0
		for (let i = 0; i < this.orders.length; i++) {
			const order = this.orders[i];
			sum += order.cost;
		}
		return sum;
	}
}

class Order {
	coffee
	cost
	customer
	constructor(coffeeName, customerName, cost) {
		this.coffee = coffeeName;
		this.cost = cost;
		this.customer = customerName
	}
}


