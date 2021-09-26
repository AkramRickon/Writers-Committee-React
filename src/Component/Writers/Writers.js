import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Name from '../Name/Name';
import Writer from '../Writer/Writer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'
import './Writers.css'

const Writers = () => {

    // useState() for wrtiters compnent
    const [writers,setWriters]=useState([]);

    // useState() for cart component
    const [cart,setCart]=useState([]);
    useEffect(()=>
    {
        fetch('writers.json')
        .then(res=>res.json())
        .then(data=>setWriters(data))
    },[])

    // Handle event addToCart function
    const addToCart=(writer)=>
    {
        const newCart=[...cart,writer];
        setCart(newCart);
    }

    // react font awesome icons
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const userIcon = <FontAwesomeIcon icon={faUser} />

    return (
        <div className='writers-container'>
            
            <div className='writer-container'>

            {/* display writer component */}
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

                    {/* component for total cost and cart items*/}
                    <div>
                        <Cart cart={cart}></Cart>
                    </div>

                    {/* component for selected writers of the cart */}
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