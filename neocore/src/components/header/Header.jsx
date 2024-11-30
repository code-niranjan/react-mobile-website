import React from 'react'
import './Header.css'
import { Navbar } from '../navbar/Navbar'

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-box">
                    <div className="header-logo">
                    <img src="./src/assets/images/logo.jpg" alt="" />
                    </div>
                    <Navbar/>
                    <div className="header-cta-button ">BUY NOW</div>
                </div>


            </div>

        </>
    )
}
