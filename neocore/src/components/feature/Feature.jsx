import React from 'react'
import './Feature.css'
import { Card_F } from './Card_F'
import camera from '/src/images/camera.png'
import battery from '/src/images/battery.png'
import ram from '/src/images/ram.png'
import display from '/src/images/display.png'

export const Feature = () => {
  return (
    <>
    <div className="features" id="features">
        <div className="feature-box">
            <div className="feature-title">Features</div>
            <div className="feauture-card ">
              <div className="card-layout">
              <Card_F source={camera} title='Camera' para_one='108MP AI Powered' para_two='Quad Camera' icon='camera'/>
              <Card_F source={battery} title='Battery' para_one='5000mAh' para_two='All Day Power' icon='battery-full'/>
              <Card_F source={ram} title='RAM' para_one='12GB Blazing' para_two='Fast RAM' icon='microchip'/>
              <Card_F source={display} title='Display' para_one="6.7'' Super AMOLED" para_two='120 Hz Display' icon='mobile'/>
              </div>
                
            </div>
        </div>
    </div>
    </>
  )
}
