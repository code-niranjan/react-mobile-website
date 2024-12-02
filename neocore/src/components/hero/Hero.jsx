import React from 'react'
import './Hero.css'
import hero_img from '/src/images/image_1.png'

export const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-box">
                    <div className="hero-column-one">
                        <div className="hero-title">
                            <div className="hero-heading">Infinity One</div>
                            <div className="hero-subheading">reflects precision and power</div>
                        </div>
                        <div className="hero-price-button">$100</div>
                    </div>
                    <div className="hero-column-two">
                        <img src={hero_img} alt="" />
                    </div>

                </div>

            </div>

        </>
    )
}
