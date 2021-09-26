import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Name from '../Name/Name';
import Writer from '../Writer/Writer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'
import './Writers.css'

const Writers = () => {

    const [writers,setWriters]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>
    {
        fetch('writers.json')
        .then(res=>res.json())
        .then(data=>setWriters(data))
    },[])

    const addToCart=(writer)=>
    {
        const newCart=[...cart,writer];
        setCart(newCart);
    }

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const userIcon = <FontAwesomeIcon icon={faUser} />

    return (
        <div className='writers-container'>
            <div className='writer-container'>
                {
                    writers.map(writer=> <Writer 
                        writer={writer}
                        key={writer.key}
                        handleCart={()=>addToCart(writer)}
                    ></Writer>)
                }
            </div>
            <div className='cart-container'>
               
               <div className='cart-components'>
               <h2>Committee <span className='cart-icon'>{cartIcon}</span></h2>

                <hr style={{width:'80%'}}></hr>

                    <div>
                        <Cart cart={cart}></Cart>
                    </div>

                    <div>
                        <h3> {userIcon} Selected Writers:</h3>
                            {
                            cart.map(writer=> <Name name={writer.name} key={writer.key}></Name>) 
                            }
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Writers;