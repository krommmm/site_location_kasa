import Card from '../components/home/card/Card';
import HomeBanner from '../components/home/banner/HomeBanner';
const Home = () => {
	
	window.addEventListener("load", ()=>{
		document.querySelector(".loading_content").classList.add("loading_content--hidden");
		document.querySelector(".loading").classList.add("loading--hidden");
	})

	return (
		<>
			<div className="loading_content ">
				<div className="loading "></div>
			</div>

			<div className="home">
				<HomeBanner />
				<Card />
			</div>
		</>
	);
};

export default Home;
