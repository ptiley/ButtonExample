import ReactDOM from 'react-dom/client';
import React from 'react';
import { useState } from 'react';
//import './index.css';
//import App from './App';



function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function App() {

    const [isRed, setIsRed] = useState(false);

    const handleClick = () => {
      setIsRed(!isRed);
    };
    return (  
    <>
      <button onClick={handleClick}>Color Change</button>
      {isRed ? (
        <p style={{ color: 'red' }}>This text is red</p>
      ) : (
        <p>This text is not red</p>
      )}

    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
