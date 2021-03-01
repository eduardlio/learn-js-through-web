class CoffeeSystem{
	orders = []
	constructor() {
		this.orders = []
		this.menu = new Menu()
		this.menu.setItemPrice("latte", 4.5)
		this.menu.setItemPrice("flat white", 4.5)
		this.menu.setItemPrice("long black", 4.5)
		this.menu.setItemPrice("espresso", 2.1)
		this.menu.setItemPrice("doppio", 3.8)
	}

	orderCoffee(customer, coffee) {
	}

	get total() {
	}
}

class Menu {
	constructor() {
	}
	getItemPrice(item) {
	}
	setItemPrice(item, cost) {
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
