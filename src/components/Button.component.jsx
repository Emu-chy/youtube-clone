import React from "react";

function Button({ className, text, event }) {
    return (
        <button onClick={event} className={className}>
            {text}
        </button>
    );
}

export default Button;
