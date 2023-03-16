import React from "react";

const Input = ({ type, className, name, placeholder, handleChange, value }) => {
    return (
        <input
            type={type}
            className={className}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
        />
    );
};

export default Input;
