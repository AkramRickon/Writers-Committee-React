import React from 'react';
import './Name.css'

// This component will return the name of selected writers of the cart

const Name = (props) => {
    const { name } = props;
    return (
        <div className='name-weight'>
            <p>{name}</p>
        </div>
    );
};
export default Name;