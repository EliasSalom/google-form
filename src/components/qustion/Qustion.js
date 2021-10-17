import React,{useState} from 'react'
import "./qustion.css"

function Qustion(props) {
    if (props.type == "text") {
        return (
            <div className="box">
                <h3 className="">{props.qustion}</h3>
                <input className="short-text" placeholder="Your answer" id={"text"+props.id} name={"q"+props.id} type="text"/>
            </div>
        )
    }
    
    else if (props.type == "choice") {
        return (
            <div className="box">
                <h3 className="">{props.qustion}{props.requre? <label className="requir">*</label>:""}</h3>
                {props.answer.map(ans=>(
                <div key={ans}>
                    <input className="radio" type="radio" id={ans} name={"radio"+props.id} value={ans} required={props.requre}/>
                    <label htmlFor={ans}>{ans}</label>
                </div>
                ))
                }
            </div>
        )
    }
    else return (
        <div>
            <h3>this type not found!!!, please add a new type of qustion</h3>
        </div>
    )
}


export default Qustion

