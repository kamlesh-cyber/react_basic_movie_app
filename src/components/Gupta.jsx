import { useState } from 'react';
import '../App.css';
import { useEffect } from 'react';

const Gupta = ({val}) =>{
	const[counter,setCounter]=useState(0);
	const increValue=()=>{
		setCounter(counter+1);
	}
	const decreValue=()=>{
		setCounter(counter-1);
	}
	// useEffect(()=>{
	// 	alert("clicked")
	// },[counter])
	return (
    <div>
      <button onClick={increValue}>+</button>
      <h1>{counter}</h1>
      <button onClick={decreValue}>-</button>
    </div>
  );
}

export default Gupta;