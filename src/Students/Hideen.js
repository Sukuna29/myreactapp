import React, { useState } from 'react';

export default function Hideen() {
  
  const [isBoxVisible, setIsBoxVisible] = useState(true);

  
  const HideenVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <div>
      <button onClick={HideenVisibility}>
        {isBoxVisible ? 'Hide Box' : 'Show Box'}
      </button>
      {isBoxVisible && (
        <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: 'black',
            margin: '20px',
          }}
        ></div>
      )}
    </div>
  );
}