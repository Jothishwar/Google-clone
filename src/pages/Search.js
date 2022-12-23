import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';

function Search() {

	const [input,setInput] = useState("");

	const search = e => {
		e.preventDefault();
		console.log('input >>', input);
	}

	return (
		<form className="search">
			<div className="search_input">
				<SearchIcon className="search_inputIcon" />
				<input value={input} onChange={e=>setInput(e.target.value)}/>
				<MicIcon />
			</div>
			<div className="search_buttons">
				<Button type="submit" onClick={search} variant="outlined">Google Search</Button>
				<Button variant="outlined">I'm Feeling Lucky </Button>
			</div>
		</form>
	)
}

export default Search;