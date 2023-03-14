import React from "react";

const Form = ({ className, children }) => {
    return (
        <>
            <form className={className}>{children}</form>
        </>
    );
};

export default Form;
