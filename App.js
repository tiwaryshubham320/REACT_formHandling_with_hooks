import React, {useState} from "react";

const App = () => {
	
	const [val, setVal] = useState({
		fname:"",
		lname:"",
		email:"",
		phn:"",
	});
	
	const inputEvent = (event) => {	
		/* const value = event.target.value;
		const name = event.target.name; */
		const {value, name} = event.target;
		
		  setVal((preValue) => {
			if (name === "fname"){
				return{
					fname: value,
					lname: preValue.lname,
					email: preValue.email,
					phn: preValue.phn,
				};
			}
			else if (name === "lname"){
				return{
					fname: preValue.fname,
					lname: value,
					email: preValue.email,
					phn: preValue.phn,
				};
			}
			else if (name === "email"){
				return{
					fname: preValue.fname,
					lname: preValue.lname,
					email: value,
					phn: preValue.phn,
				};
			}
			else if (name === "phn"){
				return{
					fname: preValue.fname,
					lname: preValue.lname,
					email: preValue.email,
					phn: value,
				};
			}
		} 
	); 

	};
	
	const onSubmits = (event) => {
		event.preventDefault();	
	};

	return(
	<>
	<form onSubmit={onSubmits} style={{width:"100%"}}>
	<div>
		<h1>Hello {val.fname} {val.lname}</h1>
		<p style={{color:"black"}}>{val.email}</p>
		<p>{val.phn}</p>
		<input type="text" placeholder="Enter first name" name="fname"  onChange={inputEvent} value={val.fname} />
		<input type="text" placeholder="Enter last name" name="lname" onChange={inputEvent} value={val.lname} />
		<input type="email" placeholder="Enter email" name="email" onChange={inputEvent} value={val.email} />
		<input type="number" placeholder="Enter phone no" name="phn" onChange={inputEvent} value={val.phn} />
		<button type="submit">Submit me</button>
	</div>
	</form>
	</>
	);
};

export default App;