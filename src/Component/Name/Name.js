import React from 'react';
import './Name.css'

const Name = (props) => {
    const { name } = props;
    return (
        <div style={{ textAlign: 'center' }}>
            
            <h5>{name}</h5>
        </div>
    );
};

export default Name;