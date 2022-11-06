import React from 'react'
//styles
import './Plans.css'
//images and icons
import whiteTick from '../../assets/whiteTick.png'
//data
import { plansData } from '../../data/plansData'

const Plans = () => {
    return (
        <div className="plans-container" id="plans">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>ready to start</span>
                <span>your journey</span>
                <span className='stroke-text'>now withus</span>
            </div>
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature" key={i}>
                                    <img src={whiteTick} alt="" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div><span>see more benefits -></span></div>
                        <button className="btn">Join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans