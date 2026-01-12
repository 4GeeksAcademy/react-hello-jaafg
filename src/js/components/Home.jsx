import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Card from "./Card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Carousel />
			<Card />
		</>
	);
};

export default Home;