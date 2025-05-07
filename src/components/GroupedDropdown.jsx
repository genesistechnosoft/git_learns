import React, { useState } from 'react';
import { Select, Space } from 'antd';
import './GroupedDropdown.css';

const { Option, OptGroup } = Select;

const GroupedDropdown = ({ 
  options, 
  placeholder = 'Select an option',
  onChange,
  value,
  className = '',
  disabled = false,
  loading = false,
  size = 'middle'
}) => {
  const handleChange = (newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`grouped-dropdown-container ${className}`}>
      <Select
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        loading={loading}
        size={size}
        className="grouped-dropdown"
        dropdownClassName="grouped-dropdown-menu"
      >
        {options.map((group) => (
          <OptGroup 
            key={group.key} 
            label={group.label}
            className="dropdown-group"
          >
            {group.options.map((option) => (
              <Option 
                key={option.value} 
                value={option.value}
                className="dropdown-option"
              >
                {option.label}
              </Option>
            ))}
          </OptGroup>
        ))}
      </Select>
    </div>
  );
};

export default GroupedDropdown; 