import React, { useState, useRef, useEffect } from 'react';
import SecondCounter from "./SecondCounter";


const Home = () => {

	
		const [counter, setCounter] = useState(0);
		const intervalRef = useRef(null); 
	  
		const start = () => {
		  if (intervalRef.current !== null) return; 
	  
		  intervalRef.current = setInterval(() => {
			setCounter(prev => prev + 1);
		  }, 1000);
		};
	  
		const pause = () => {
		  clearInterval(intervalRef.current);
		  intervalRef.current = null;
		};
	  
		const reset = () => {
		  pause(); 
		  setCounter(0);
		};
	  
		useEffect(() => {
		  start();
		  return () => pause(); 
		}, []);
	  

	const five= Math.floor(counter/10000);
	const four= Math.floor(counter/1000);
	const three= Math.floor(counter/100);
	const two= Math.floor(counter/10);
	const one= Math.floor(counter/1);



	return (
		<div className= "container-fluid vh-100">
			<SecondCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five}/>
			<div className="container d-flex justify-content-center align-items-center">
				<button type="button" className="btn btn-success me-2" onClick={start}>Start</button>
				<button type="button" className="btn btn-warning me-2" onClick={pause}>Pause</button>
				<button type="button" className="btn btn-info" onClick={reset}>Reset</button>
			</div>
		</div>
	);

}

export default Home