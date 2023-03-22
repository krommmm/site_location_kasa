import Card from '../components/home/card/Card';
import HomeBanner from "../components/home/banner/HomeBanner";
import {useEffect} from "react";
const Home = () => {

	useEffect(()=>{
		const loading_content = document.querySelector(".loading_content0");
		const loading = document.querySelector(".loading0");

		window.addEventListener("load",()=>{
			loading_content.classList.add("loading_content");
			loading.classList.add("loading");
		})
	},[]);


	return (
		<>
		 <div className="loading_content0">
				<div className="loading0"></div>
			</div>
			<div className="home">
				< HomeBanner />
				< Card />
			</div>
		</>
	);
};

export default Home;
