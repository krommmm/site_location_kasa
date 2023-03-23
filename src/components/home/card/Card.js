import datas from '../../../data/logements';
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";

const Component1 = () => {


	useEffect(()=>{

	
	for(var i=0;i<datas.length;i++){
		let number = (i+1)*0.2;
		document.querySelector(`.card_${i}`).style.animationDelay=`${number}s`;
	}
},[]);
	

	return (
		<>
			<div className="cards">
				{datas.map((element, index) => (
					<div className={`card card_${index}`}  key={index}>
						<NavLink to={`/Profil/${element.id}`}>
							<div className="card_bg"> </div>
							<img src={element.pictures[0]} alt={index} />
							<div className="title">
								<p>{element.title}</p>
							</div>
						</NavLink>
					</div>
				))}
			</div>
		</>
	);
};

export default Component1;
