import React from 'react'
import './Feature.css'
import { Card_F } from './Card_F'

export const Feature = () => {
  return (
    <>
    <div className="features" id="features">
        <div className="feature-box">
            <div className="feature-title">Features</div>
            <div className="feauture-card ">
              <div className="card-layout">
              <Card_F source={'./src/assets/images/camera.png'} title='Camera' para_one='108MP AI Powered' para_two='Quad Camera' icon='camera'/>
              <Card_F source={'./src/assets/images/battery.png'} title='Battery' para_one='5000mAh' para_two='All Day Power' icon='battery-full'/>
              <Card_F source={'./src/assets/images/ram.png'} title='RAM' para_one='12GB Blazing' para_two='Fast RAM' icon='microchip'/>
              <Card_F source={'./src/assets/images/display.png'} title='Display' para_one="6.7'' Super AMOLED" para_two='120 Hz Display' icon='mobile'/>
              </div>
                
            </div>
        </div>
    </div>
    </>
  )
}
