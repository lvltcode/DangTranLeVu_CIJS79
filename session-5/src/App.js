import './App.css';
import { useState } from 'react';
import Light from './Light';

function App() {
  const [currentLight, setLight] = useState("red");

  const changeLight = () => {
    if (currentLight === "red") {
      setLight("green")
    } else if (currentLight === "green") {
      setLight("yellow") 
    } else if (currentLight === "yellow") {
      setLight("red")
    }
  }
  return (
    <div className="flex flex-col flex-center items-center mt-4">
     <button onClick={changeLight}> Next</button>
      <div className="flex flex-center items-center">
        <Light color="red" LightOn={currentLight === "red" ? "red" : ""}/>
        <Light color="yellow" LightOn={currentLight === "yellow" ? "yellow" : ""}/>
        <Light color="green" LightOn={currentLight === "green" ? "green" : ""}/>
      </div>
    </div>
  );
}

export default App;
