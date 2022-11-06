import React from 'react'
//styles
import './Join.css'

const Join = () => {
    return (
        <div className="join" id="join">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>ready to</span>
                    <span> level up</span>
                </div>
                <div>
                    <span>your body</span>
                    <span className='stroke-text'> with us</span>
                </div>
            </div>
            <div className="right-j">
                <form className="email-container">
                    <input type="email" name='user_email' placeholder='enter your email adddress' />
                    <button className="btn btn-j">join us</button>
                </form>
            </div>
        </div>
    )
}

export default Join