import React from 'react'
import './Feature.css'
import { Card_F } from './Card_F'

export const Feature = () => {
  return (
    <>
    <div className="features" id="features">
        <div className="feature-box">
            <div className="feature-title">Features</div>
            <div className="feauture-card">
                <Card_F/>
                {/* <div className="card-box"></div> */}
            </div>
        </div>
    </div>
    </>
  )
}
