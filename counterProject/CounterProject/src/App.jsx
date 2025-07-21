import { useState, useEffect } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)    //anything can be passed in parameters
  //here setcounter fxn controls the counter variable

  // let counter = 10;

  const addValue = () => {
    // console.log("value added" )
    counter += 1;
    setCounter(counter);
  }

  const decreaseValue = () => {
    if (counter > 0){
    setCounter(counter -1);}
  }

  return (
    <>
      <p>This is the first react project where the counter variable will be upadted in the UI at <strong>multiple places</strong> </p>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={decreaseValue}>Decrease Value</button>

      <footer>Footer value : {counter}</footer>

    </>
  )
}


export default App
