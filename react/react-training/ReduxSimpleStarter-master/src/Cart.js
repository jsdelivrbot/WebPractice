import React, {Component} from 'react';

class Cart extends Component {
    render() {
        return (
            <div>
            <div id="header">
            <button id="cart">Cart</button>
            <button id="clearCart">Clear cart</button>
        </div>
        <div id="cartDetails">
    
        </div>
        <div className="product">
            <img src="https://drop.ndtv.com/TECH/product_database/images/112201713803PM_635_xiaomi_redmi_y1.jpeg" />
            <label>Mi Phone: Rs. 10000</label>
            <button className="addCart" value="1">Add</button>
        </div>
    
        <div className="product">
            <img src="https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg" />
            <label>Apple Phone: Rs. 50000</label>
             <button className="addCart" value="2">Add</button>
        </div>
    
        <div className="product">
            <img src="https://md3.pricebaba.com/images/product/mobile/32421/samsung-galaxy-on-nxt-64gb-raw.jpg" />
            <label>Samsung Phone: Rs. 35000</label>
             <button className="addCart" value="3">Add</button>
        </div>
        </div>
        );

       
    }
}

export default Cart;