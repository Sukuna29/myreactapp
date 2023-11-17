import React, {useState} from 'react'

export default function BoxColor() {
    const [boxColor, setBoxColor] = useState('red');
    const changeColor = (newColor) => {
        setBoxColor(newColor);
      };

  return (
    <>
     <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: boxColor,
          margin: '20px',
        }}
      ></div>
      <div>
        <button onClick={() => changeColor('red')}>Red</button>
        <button onClick={() => changeColor('blue')}>Blue</button>
        <button onClick={() => changeColor('green')}>Green</button>
      </div>
    </div>

    </>
  )
}
