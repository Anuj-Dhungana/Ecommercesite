import React from "react";

const textField = (
  { label, id, placeholder, value, onChange, required = false },
  type = "text"
) => {
  return (
    <div className="flex gap-3">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
       
      />
    </div>
  );
};

export default textField;
