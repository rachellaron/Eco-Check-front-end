import React, { useState } from 'react'
import LabelTips from './images/LabelTips.png'
import LabelTipsTrans from './images/lable-tips-trans.png'
import './LableTips.css'

function TipsToggle() {
    const [show, setShow] = useState(false)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    return (

        <div className="label-tips">
            {/* <a href="#top">Back to Top</a> */}
            <label>Label Tips</label>
            <a href="#bottom"><button className="dropdown-btn" onClick={() => setShow(!show)} >
                <div className="dropdown-btn" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-chevron-down'}></i>
                </div></button></a>
            {
                show ? <img className="label-tips-img" src={LabelTipsTrans} alt="" /> : null
            }
            {/* <div className="bottom" id="bottom">bottom</div> */}
        </div>
    );
}

export default TipsToggle

