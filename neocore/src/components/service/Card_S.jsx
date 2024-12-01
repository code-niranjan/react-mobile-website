import React from 'react'
import './Service.css'
export const Card_S = (props) => {
    return (
        <>
            <div className="service-box-card">
                {/* <div className="service-box-border"> */}
                <div className="service-container">
                    <div className="service-card-title">{props.title}</div>
                    <div className="service-card-text">
                        <p className='service-card-para'>{props.para_one}</p>
                        <p className='service-card-para'>{props.para_two}</p>
                    </div>
                </div>
                <div className="service-card-icon"><i className={`fa-solid fa-${props.icon}`}></i></div>
                {/* </div> */}

            </div>
        </>
    )
}
