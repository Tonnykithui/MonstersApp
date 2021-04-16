import React from 'react'
import './Input.styles.css'

export default function Input({type, placeholder, handleChange}) {
    return (
        <div className="input">
            <input type={type} placeholder={placeholder} onChange = {handleChange}/>
        </div>
    )
}
