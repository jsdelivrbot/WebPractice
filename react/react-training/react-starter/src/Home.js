import React, {Component} from 'react';
import Product from './Product';

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			products: [
				{
					id: "1001",
					name: "Mi Phone",
					price: "10000 INR",
					url: "https://drop.ndtv.com/TECH/product_database/images/112201713803PM_635_xiaomi_redmi_y1.jpeg"
				},
				{
					id: "1002",
					name: "Samsung Phone",
					price: "30000 INR",
					url: "https://md3.pricebaba.com/images/product/mobile/32421/samsung-galaxy-on-nxt-64gb-raw.jpg"
				},
				{
					id: "1003",
					name: "Apple Phone",
					price: "50000 INR",
					url: "https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg"
				}
			],
			cartItems: []
		};
		this.addToCart = this.addToCart.bind(this);
	}

	addToCart(e) {
		let newCart = this.state.cartItems;
		newCart.push(e);
		this.setState({
			cartItems: newCart
		});

		this.props.displayCart(this.state.cartItems);
	}

	render() {
		let displayItems = [];
		for(let i=0;i<this.state.products.length;i++) {
					displayItems.push(<Product 
			            url= {this.state.products[i].url}
			            name= {this.state.products[i].name}
			            price= {this.state.products[i].price}
			            key={this.state.products[i].id}
			            addToCartEvent={this.addToCart} />);
			}

		return (
				displayItems
			);
	}
}

export default Home;