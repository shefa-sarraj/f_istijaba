import React, { useState, useRef, useEffect } from 'react';

function CustomInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  required,
  error,
  backgroundColor = '#dbdbdb',
  border = 'none',
  color,
  options
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const normalizedOptions = options
    ? options.map((opt) =>
        typeof opt === 'object' ? opt : { value: opt, label: opt }
      )
    : [];

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  const handleSelect = (optValue) => {
    setIsOpen(false);
    // نحاكي شكل الـ event العادي حتى يشتغل نفس onChange تبع الـ input
    onChange({ target: { name, value: optValue } });
  };

  return (
    <div className="input-group">
      {label && (
        <label className="input-label" style={{ color: color }}>
          {label} {required && <span className="required-star">*</span>}
        </label>
      )}

      {options ? (
        <div className="custom-dropdown" ref={wrapperRef}>
          <div
            role="button"
            tabIndex={0}
            className={`custom-dropdown-trigger ${isOpen ? 'is-open' : ''}`}
            style={{ backgroundColor, border, color: color || '#000' }}
            onClick={() => setIsOpen((prev) => !prev)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
              }
              if (e.key === 'Escape') setIsOpen(false);
            }}
          >
            <span className={selectedOption ? '' : 'custom-dropdown-placeholder'}>
              {selectedOption ? selectedOption.label : placeholder || '...'}
            </span>
            <svg
              className="custom-dropdown-arrow"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
            >
              <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* عنصر hidden عشان الـ required/validation تشتغل عادي بالفورم إذا احتجتيها */}
          {required && (
            <input
              tabIndex={-1}
              value={value || ''}
              onChange={() => {}}
              required
              className="custom-dropdown-hidden-input"
            />
          )}

          <div className={`custom-dropdown-panel ${isOpen ? 'is-open' : ''}`}>
            {normalizedOptions.map((opt) => (
              <div
                key={opt.value}
                className={`custom-dropdown-option ${opt.value === value ? 'is-selected' : ''}`}
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <input
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          style={{
            backgroundColor: backgroundColor,
            border: border
          }}
          className="custom-input"
        />
      )}

      {error && (
        <span style={{ color: '#dc3545', fontSize: '0.85rem', marginTop: '6px', fontWeight: '500', fontFamily: 'lion' }}>
          {error}
        </span>
      )}
    </div>
  );
}

export default CustomInput;