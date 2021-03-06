import React from 'react';
const Button = (props) => {
    return(
        <input 
            type="button"
            value={props.label}
            onClick = {props.handleClick}
            className="btn btn-warning"
        />
    )
}

export default Button;