
import React from 'react'
import './Feature.css'

export const Card_F = (props) => {
  return (
    <>
      <div className="card-box">
        <div className="card-box-col-one">
          <img src={props.source} alt="" />
        </div>
        <div className="card-box-col-two">
          <div className="card-box-col-two-one">
            <i className={`fa-solid fa-${props.icon}`}></i>
            <div className="card-box-col-two-one-title">{props.title}</div>
          </div>
          <div className="card-box-col-two-two">
              <p className='card-box-two-para'>{props.para_one}</p>
              <p className='card-box-two-para'>{props.para_two}</p>
          </div>
        </div>
      </div>
    </>
  )
}
