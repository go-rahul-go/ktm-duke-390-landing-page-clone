


import React, { useRef, useState } from 'react'
import "./components.css";

const TechincalDetails = () => {
    const [h, setHeight] = useState("500px")
    const [btext, setBtext] = useState("Show All")
    const expand = useRef();

    function grow() {
        
        if(h==="500px")
        {
            setHeight("1000px");
            expand.current.style.height=h;
            setBtext("Show All")
        }
        else{
            setHeight("500px")
            expand.current.style.height=h;
            setBtext("hide");
        }
    }

    return (
        <div className="technical-details">
            <h1 className="technical-head">technical details</h1>
            <div className="expand-box" ref={expand}>
                <div className="ex-flex">
                    <div id="engine">
                        <h2>engine</h2>
                        <table>
                            <tr>
                                <td>torque</td>
                                <td>39 nm</td>
                            </tr>
                            <tr>
                                <td>tranmission</td>
                                <td>6-speed</td>
                            </tr>
                            <tr>
                                <td>Battery capacity</td>
                                <td>8Ah</td>
                            </tr>
                            <tr>
                                <td>cooling</td>
                                <td>liquid cooling</td>
                            </tr>
                            <tr>
                                <td>power(kw)</td>
                                <td>33 kw</td>
                            </tr>
                            <tr>
                                <td>starter</td>
                                <td>Electric starter</td>
                            </tr>
                            <tr>
                                <td>stroke</td>
                                <td>64 mm</td>
                            </tr>
                            <tr>
                                <td>bore</td>
                                <td>89 mm</td>
                            </tr>
                            <tr>
                                <td>displacement</td>
                                <td>398.7 cm<sup>3</sup></td>
                            </tr>
                            <tr>
                                <td>ems</td>
                                <td>Bosch ems with rbw</td>
                            </tr>
                            <tr>
                                <td>design</td>
                                <td>1 cylinder,4 stroke engine</td>
                            </tr>
                            <tr>
                                <td>lubrication</td>
                                <td>wet sump</td>
                            </tr>
                        </table>
                    </div>
                    <div id="chasis">
                       <h2>Chasis</h2>
                       <table>
                        <tr>
                            <td>abs</td>
                            <td>Bosch 9.3 two channel</td>
                        </tr>
                        <tr>
                            <td>front disc</td>
                            <td>320mm</td>
                        </tr>
                        <tr>
                            <td>rear disc</td>
                            <td>240mm</td>
                        </tr>
                        <tr>
                            <td>front brake</td>
                            <td>4 piston</td>
                        </tr>
                        <tr>
                            <td>rear brake</td>
                            <td>2 piston</td>
                        </tr>
                        <tr>
                            <td>chain</td>
                            <td>520 x-ring</td>
                        </tr>
                        <tr>
                            <td>frame</td>
                            <td>steel trelis frame</td>
                        </tr>
                        <tr>
                            <td>front suspension</td>
                            <td>wp apex 43</td>
                        </tr>
                        <tr>
                            <td>rear suspension</td>
                            <td>wp apex monoshock</td>
                        </tr>
                        <tr>
                            <td>suspension travel (front)</td>
                            <td>150mm</td>
                        </tr>
                        <tr>
                            <td>suspension travel (rear)</td>
                            <td>150mm</td>
                        </tr>
                        </table>     
                    </div>
                    <div className='tech-image'>
                        <img src={require("../images/side.jpg")} alt="side" />
                    </div>
                </div>
                <button id="exp-btn" onClick={grow} >{btext}</button>
            </div>

        </div>
    )
}

export default TechincalDetails;