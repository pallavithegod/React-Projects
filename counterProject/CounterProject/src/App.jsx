import { useState, useEffect } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)    //anything can be passed in parameters
  //here setcounter fxn controls the counter variable

  // let counter = 10;

  const addValue = () => {
    // console.log("value added" )
    counter += 1;
    //setCounter returns a callback fxn, thus to make upadate multiple times in single useState, try to fetch then modify the previous state
    setCounter((prevCounter) => prevCounter + 1);   //prevCounter = last updated state of the counter fetched from setCounter itself
    setCounter((prevCounter) => prevCounter + 1);  
    setCounter((prevCounter) => prevCounter + 1);   //+3 in one single click
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
