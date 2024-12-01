import React from 'react'
import './Service.css'
import { Card_S } from './Card_S'

export const Service = () => {
  return (
    <div id="services">
        <div className="service-box">
            <div className="service-box-col-one">Service</div>
            <div className="service-box-col-two">
                <Card_S title='warranty' para_one='1-2 Year Standard' para_two='warranty' icon='shield-heart'/>
                <Card_S title='Software update' para_one='Regular updates for' para_two='security and new features' icon='gear'/>
                <Card_S title='Repair' para_one='Easy repair and' para_two='replacement policy' icon='wrench'/>
            </div>
        </div>
    </div>
  )
}
