import React, { useState } from 'react';
import './FormInput.css';

const FormInput = ({ 
  type, 
  placeholder, 
  name, 
  required = false,
  value,
  onChange
}) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className="form-input-container">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="form-input"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        data-focused={focused}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;