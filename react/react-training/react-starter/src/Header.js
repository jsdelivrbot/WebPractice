import React, {Component} from 'react';
import './style/Header.css';

export default class Header extends Component {	

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button onClick={this.props.cartBtnEvent}>Cart</button>
				<button >Clear cart</button>
			</div>
		);	
	}

}