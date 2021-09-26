import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className='header'>
            <div className='header-text-container'>
                <h2 className='header-title'>Build a Writers Committee</h2>
                <p className='header-text'>The primary responsibility of the Writing Committee is ongoing evaluation and assessment of General Education writing requirements</p>
                <h2>Total Budget : <span className="budget-color">$50000000</span> </h2>
            </div>

            <nav>
                <a href='/home'>Home</a>
                <a href='/writers'>Writers</a>
                <a href='/book'>Books</a>
                <a href='/reviews'>Reviews</a>
                <a href='/contact'>Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;