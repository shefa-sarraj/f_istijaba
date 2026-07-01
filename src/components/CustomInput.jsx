import React from 'react';

function CustomInput({ label,required = false, type = 'text', placeholder, value, onChange, error, ...rest }) {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label} {required && <span className="required-star">*</span>}</label>}
      
      <input
        label={label}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="custom-input"
      />
      
      {error && (
        <span style={{ color: '#dc3545', fontSize: '0.85rem', marginTop: '6px', fontWeight: '500', fontFamily: 'lion' }}>
          {error}
        </span>
      )}
    </div>
  );
}

export default CustomInput;