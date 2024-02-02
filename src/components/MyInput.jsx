import React from "react";

export default function MyInput({placeholder, onChange, type, value}) {
    return (
        <input type={type} onChange={onChange} value={value} className="my-input" placeholder={placeholder} />
    );
}