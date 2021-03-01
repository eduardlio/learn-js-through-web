$("document").ready(() => {

	$("#coffee-name").focus()

	coffeeSystem = new CoffeeSystem()

	refreshOrders(coffeeSystem.orders)
	resetOrderTotal(coffeeSystem.total)

	$(".form button").on("click", handleCoffeeEntry)

})
function handleCoffeeEntry(event) {

	event.preventDefault()

	const coffeeInput = $("#coffee-name")
	const coffee = coffeeInput.val()
	const customerInput = $("#customer-name")
	const customer = customerInput.val()

	if(coffee.length && customer.length) {

		coffeeSystem.orderCoffee(customerInput.val(), coffeeInput.val())

		coffeeInput.val("")
		customerInput.val("")

		// refreshOrders(coffeeSystem.orders)
		const {orders} = coffeeSystem;
		const latestOrder = orders[orders.length-1]
		if(latestOrder) {
			pushOrder(latestOrder.coffee, latestOrder.customer)
		}
		resetOrderTotal(coffeeSystem.total)

		coffeeInput.focus()
	}
}

const refreshOrders = (orders) => {
	const list = document.getElementById("order-list")
	list.innerHTML = ""
	orders.forEach(order => {
		const element = document.createElement("li")
		element.innerText = `${order.coffee} for ${order.customer}`
		list.appendChild(element)
	})
}

const pushOrder = (coffee, customer) => {
	const list = document.getElementById("order-list")
	const element = document.createElement("li")
	element.innerText = `${coffee} for ${customer}`
	list.appendChild(element)
}

const resetOrderTotal = (total = 0) => {
	document.getElementById("order-total").innerText = total.toFixed(2)
}
