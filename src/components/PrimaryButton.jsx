import React from 'react';

function PrimaryButton({ text, onClick, type = 'button' ,color="#ffffff" , backgroundColor="#346186" ,border="2px solid transparent"}) {
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