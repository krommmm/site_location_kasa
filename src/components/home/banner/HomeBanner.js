import homeBanner from '../../../images/IMG.png';

const HomeBanner = () => {
	return (
		<>
			<div className="homeBanner">
				<img src={homeBanner} alt="home_banner" />
                <div className="textBanner">
                    <p>Chez vous, partout et ailleurs</p>
                </div>
			</div>
		</>
	);
};

export default HomeBanner;
