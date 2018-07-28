/*const products = document.querySelectorAll(".product");
const addButtons = document.querySelectorAll(".addCart");
const cartDetails = document.querySelector("#cartDetails");
const clearCartBtn = document.querySelector("#clearCart");
let arrOfProducts = [];
const cartButton = document.querySelector("#cart")*/

class ECommerceCart {

	constructor() {
		this.products = document.querySelectorAll(".product");
		this.addButtons = document.querySelectorAll(".addCart");
		this.cartDetails = document.querySelector("#cartDetails");
		this.clearCartBtn = document.querySelector("#clearCart");
		this.arrOfProducts = [];
		this.cartDetails.style.display="none";
		this.cartButton = document.querySelector("#cart");
	}

	addListeners() {
		this.addButtons.forEach((item,i)=>{
		item.addEventListener("click", () => {
			this.arrOfProducts.push(this.products[i].innerText);
		});
	});

	this.cartButton.addEventListener("click",() => {
		this.cartDetails.innerHTML='Cart Details: ';

		if(this.cartDetails.length === 0) {
			this.cartDetails.innerHTML += 'Empty';
		}

		for(let i=0; i < this.arrOfProducts.length; i++) {
			this.cartDetails.innerHTML += '<li>'+this.arrOfProducts[i]+'</li>';
		} 
		this.cartDetails.style.display="block";

	});

	this.clearCartBtn.addEventListener("click",() => {
		this.arrOfProducts = [];
		this.cartDetails.style.display="none";
	});
		}
}

let cart = new ECommerceCart();
cart.addListeners();

/*addButtons.forEach(function(item,i){
	item.addEventListener("click", () => {
		arrOfProducts.push(products[i].innerText);
	});
});


cartButton.addEventListener("click",() => {
	cartDetails.innerHTML='Cart Details: ';

	if(cartDetails.length === 0) {
		cartDetails.innerHTML += 'Empty';
	}

	for(let i=0; i < arrOfProducts.length; i++) {
		cartDetails.innerHTML += '<li>'+arrOfProducts[i]+'</li>';
	} 
	cartDetails.style.display="block";

});

clearCartBtn.addEventListener("click",() => {
	arrOfProducts = [];
	cartDetails.style.display="none";
});*/