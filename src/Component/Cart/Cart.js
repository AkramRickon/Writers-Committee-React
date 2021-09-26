import './Cart.css';
import React from 'react';

const Cart = (props) => {

    const { cart } = props;

    // total cost function
    const reducer = (previous, current) => previous + current.value;
    const total = cart.reduce(reducer, 0);

    return (
        <div className='cart-items'>
            <h3>Writers Added : {cart.length}</h3>
            <h3>Total cost : $ {total}</h3>
        </div>
    );
};

export default Cart;