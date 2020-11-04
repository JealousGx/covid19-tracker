import React from 'react';
import './App.css';

export default function Footer() {
    return (
        <div className='container-fluid'>
            <div className='footer bg-dark-gray py-1 mt-5'>
                <div>
                <a href='https://github.com/JealousGx/react-phone-store'><i className='fa fa-github icon mt-1 git-icon' /></a>
                <a href='https://twitter.com/mateen_khilji'><i class="fab fa-twitter icon mx-4 twitter-icon" /></a>
                <a href='https://www.linkedin.com/in/abdul-mateen-khilji-8a743217b/'><i class='fa fa-linkedin-square icon in-icon' /></a>
                </div>
            </div>
        </div>
    )
}
