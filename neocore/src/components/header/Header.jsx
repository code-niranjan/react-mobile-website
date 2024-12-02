import React from 'react'
import './Header.css'
import { Navbar } from '../navbar/Navbar'
import logo from "/src/images/logo.jpg"

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-box">
                    <div className="header-logo">
                    <img src={logo} alt="" />
                    </div>
                    <Navbar/>
                    <div className="header-cta-button ">BUY NOW</div>
                </div>


            </div>

        </>
    )
}
