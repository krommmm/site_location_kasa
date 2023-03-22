const Info = () => {
	window.addEventListener('load', () => {
		document
			.querySelector('.loading_content')
			.classList.add('loader--hidden');
	});

	return (
		<>
			<div className="loading_content loading_content--hidden">
				<div className="loading"></div>
			</div>
			<div className="info"></div>
		</>
	);
};

export default Info;
