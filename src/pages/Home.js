import Card from '../components/home/card/Card';
import HomeBanner from '../components/home/banner/HomeBanner';

const Home = () => {
	return (
		<>
			<div className="home">
				<HomeBanner />
				<Card />
			</div>
		</>
	);
};

export default Home;
