import React from 'react';

function PrimaryButton({ text, onClick, type = 'button' ,color="#ffffff" , backgroundColor="#12293c" ,border="none"}) {
  return (
    <button
      className='primary-btn'
      text={text}
      type={type}  
      onClick={onClick}
      style={{
       color:color
       , backgroundColor:backgroundColor
       , border:border
      }}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;