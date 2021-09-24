import React, { useState } from 'react'
import LabelTips from './images/lable-tips-trans.png'
import './LableTips.css'

function TipsToggle() {
    const [show, setShow] = useState(false)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    return (
        <div className="label-tips">
            <div className="pannel">
                <label>Label Tips</label>
                <button className="dropdown-btn" onClick={() => setShow(!show)} >
                    <div className="dropdown-btn" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-chevron-down'}></i>
                    </div></button>
            </div>
            {
                show ? <img className="label-tips-img" src={LabelTips} alt="" /> : null
            }
        </div>
    );
}

export default TipsToggle

