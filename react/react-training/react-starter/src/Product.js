import React, {Component} from 'react';
import './product.css';

class Product extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="product">
				<div>
					<img src={this.props.url} />
				</div>
				<div>
	            	<label>{this.props.name} - {this.props.price}</label>
	            </div>
	            <div>
	            	<button className="addCart">Add</button>
	            </div>
			</div>
			);
	}

}

export default Product;