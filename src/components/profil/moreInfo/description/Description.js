import { useState, useEffect } from 'react';
import arrow from '../../../../images/arrow.png';
import datas from '../../../../data/logements';

const Description = (props) => {
	const index = props.index;

	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		let arrowB = document.querySelector('.arrow');
		let text = document.querySelector('.description_text');

		text.style.transform = toggle ? 'translateY(-350px)' : 'translateY(0px)';
		arrowB.style.transform = toggle ? 'rotate(0deg)' : 'rotate(180deg)';
	}, [toggle]);

	return (
		<>
			<div className="description">
				<button
					className="btnMoreInfo"
					type="button"
					onClick={() => setToggle(!toggle)}
				>
					<div>Description</div>
					<img className="arrow" src={arrow} alt="arrow" />
				</button>
				<div className="description_text">
					<p>{datas[index].description}</p>
				</div>
			</div>
		</>
	);
};

export default Description;
