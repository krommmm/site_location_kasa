import Card from '../components/home/card/Card';
import HomeBanner from '../components/home/banner/HomeBanner';
const Home = () => {
	
	window.addEventListener("load", ()=>{
		document.querySelector(".loading_content").classList.add("loader--hidden");
	})

	return (
		<>
			<div className="loading_content loading_content--hidden">
				<div className="load"></div>
			</div>

			<div className="home">
				<HomeBanner />
				<Card />
			</div>
		</>
	);
};

export default Home;
