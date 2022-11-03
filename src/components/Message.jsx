import React from 'react';
import {useState} from 'react';

const Message = () => {

  const [ isVisible, setIsVisible ] = useState(false)

  return (
    <div>

      <i onClick={() => setIsVisible(!isVisible)} className="fa-solid fa-envelope"></i>

      { isVisible && 
        <div className='content-message'>
          <div className='close' onClick={() => setIsVisible(!isVisible)}>X</div>
        </div>
      }
  
    </div>
  );
};

export default Message;