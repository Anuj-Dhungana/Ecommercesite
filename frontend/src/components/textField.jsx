import React from "react";

const TextField = ({ 
  label, 
  id, 
  name, 
  placeholder, 
  value, 
  onChange, 
  type = "text", 
  required = false 
}) => {
  // Convert type to lowercase for HTML input
  const inputType = type.toLowerCase();
  
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
      />
    </div>
  );
};

export default TextField;
