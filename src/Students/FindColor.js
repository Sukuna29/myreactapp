import React, {useState} from 'react'

export default function FindColor() {
    
  const [inputColor, setInputColor] = useState('');
  const [boxColor, setBoxColor] = useState(''); 
  const handleInputChange = (event) => {
    setInputColor(event.target.value);
  };

  const updateBoxColor = () => {
    setBoxColor(inputColor);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a color"
        value={inputColor}
        onChange={handleInputChange}
      />
      <button onClick={updateBoxColor}>Change Color</button>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: boxColor,
          margin: '20px',
        }}
      ></div>
    </div>
  );
}
