import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import './Writer.css'

const Writer = (props) => {
    const { name, born, country, category, img, followers, value } = props.writer;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    // const userIcon = <FontAwesomeIcon icon={faUser} />
    return (
        <div className='details-container'>
            <img src={img} alt=""></img>
            <h4>Name : {name}</h4>
            <p><b>Country : </b>{country}</p>
            <p><b>Born : </b> {born}</p>
            <p><b>Category: </b>{category}</p>
            {/* <p>Followers : {userIcon} {followers}</p> */}
            <p><b>Salary : </b> <span className='salary-color'>${value}</span> </p>
            <button onClick={props.handleCart} className='btn-cart' >{cartIcon} Add to Committee</button>
        </div>
    );
};

export default Writer;