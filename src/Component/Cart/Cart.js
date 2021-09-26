import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

const Cart = (props) => {

    const { cart } = props;

    const reducer = (previous, current) => previous + current.value;
    const total = cart.reduce(reducer, 0);

    // const userIcon = <FontAwesomeIcon icon={faUser} />

    return (
        <div className='cart-items'>
            <h3>Writers Added : {cart.length}</h3>
            <h3>Total cost : $ {total}</h3>
        </div>
    );
};

export default Cart;