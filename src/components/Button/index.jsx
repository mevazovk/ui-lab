import React from 'react';
import './index.css';

function Button(props) {
    const { variant = "primary", size = "med", children } = props;


    const sizeClass = `my-button--${size}`;


    const className = `my-button my-button--${variant} ${sizeClass}`;

    return (
        <button className={className}>
            {children}
        </button>
    );
}

export default Button;
