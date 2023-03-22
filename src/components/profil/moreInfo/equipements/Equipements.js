import { useState, useEffect } from 'react';
import arrow from '../../../../images/arrow.png';
import datas from '../../../../data/logements';

const Equipements = (props) => {
	const index = props.index;

	const [toggle2, setToggle2] = useState(true);

	useEffect(() => {
		let arrow2 = document.querySelector('.arrow2');
		let text = document.querySelector('.equipements_text');

		text.style.transform = toggle2 ? 'translateY(-350px)' : 'translateY(0px)';
		arrow2.style.transform = toggle2 ? 'rotate(0deg)' : 'rotate(180deg)';
	}, [toggle2]);

	return (
		<>
			<div className="equipements">
				<button
					className="btnMoreInfo"
					type="button"
					onClick={() => setToggle2(!toggle2)}
				>
					<div>Equipements</div>
					<img className="arrow2" src={arrow} alt="arrow" /> 
				</button>
				<div className="equipements_text">
             {datas[index].equipments.map((equipement,index)=>(
                <div key={index}>
                    <p>{equipement}</p>
                </div>

             ))}
				</div>
			</div>
		</>
	);
};

export default Equipements;
