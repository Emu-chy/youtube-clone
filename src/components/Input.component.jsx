import React from "react";

const Input = ({ type, className, name, placeholder }) => {
    return <input type={type} className={className} name={name} placeholder={placeholder} />;
};

export default Input;
