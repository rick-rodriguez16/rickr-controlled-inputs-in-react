import React, { useState } from "react";

const Home = () => {
	const [input, setInput] = useState("");

	function handleInput() {
		if (input === "") {
			alert("Input cannot be empty!")
		}
	}
	
	return (
		<>
			<h1>Value you are inputting is: {input}</h1>
			<input
				type="text"
				onChange={(event) => setInput(event.target.value)}
				value={input}
			/>
			<button onClick={handleInput}
				// onClick={() => {
				// 	if(input === "") alert ("Input cannot be empty!")
				// }}
			>Validate</button>
		</>
	);
};

export default Home;
