import React from 'react';

function CustomInput({ label, type = 'text', placeholder, value, onChange, error, ...rest }) {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      
      <input
        label={label}
        type={type}
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