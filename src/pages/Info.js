const Info = () => {
	window.addEventListener("load", ()=>{
		document.querySelector(".loading_content").classList.add("loading_content--hidden");
		document.querySelector(".loading").classList.add("loading--hidden");
	})

	return (
		<>
			<div className="loading_content ">
				<div className="loading "></div>
			</div>
			<div className="info"></div>
		</>
	);
};

export default Info;
