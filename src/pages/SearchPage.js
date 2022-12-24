import React from 'react'
import './SearchPage.css';
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import {Link} from "react-router-dom";
import Search from "./Search";
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {

	const [{term},dispatch] = useStateValue();

	//const { data } = useGoogleSearch(term); //Live API Call
	const data = Response;

	console.log(data);
	return (
		<div className="searchpage">
			<div className="searchpage_header">
				<Link to="/">
					<img 
						className="searchpage_logo"
						src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
						alt="google logo" 
					/>
				</Link>
				<div className="searchpage_headerbody">
					<Search hideButton />
					<div className="searchpage_options">
						<div className="options_left">
							<div className="searchpage_option">
								<SearchIcon />
								<Link to="/all">All</Link>
							</div>
							<div className="searchpage_option">
								<DescriptionIcon />
								<Link to="/news">News</Link>
							</div>
							<div className="searchpage_option">
								<ImageIcon />
								<Link to="/image">Images</Link>
							</div>
							<div className="searchpage_option">
								<LocalOfferIcon />
								<Link to="/shopping">shopping</Link>
							</div>
							<div className="searchpage_option">
								<RoomIcon />
								<Link to="/maps">Maps</Link>
							</div>
							<div className="searchpage_option">
								<MoreVertIcon />
								<Link to="/more">More</Link>
							</div>
						</div>
						<div className="options_right">
							<div className="searchpage_option">
								<Link to="/settings">Settings</Link>
							</div>
							<div className="searchpage_option">
								<Link to="/tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="searchpage_results">

			</div>
		</div>
	)
}

export default SearchPage