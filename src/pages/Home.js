import './Home.css';
import { Link } from "react-router-dom";

function Home(){
	return(
	<div className="home">
		<div className="home_header">
			<div className="left">
				<Link to="/about">About</Link>
				<Link to="/store">Store</Link>
			</div>
			<div className="right">
				<Link to="/gmail">Gmail</Link>
				<Link to="/images">Images</Link>
			</div>
		</div>
		<div className="home_body">
			{ /*content*/}
		</div>
	</div>
	);
}

export default Home;