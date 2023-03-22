import datas from '../../../data/logements';
import { NavLink } from 'react-router-dom';

const Component1 = () => {
	return (
		<>
			<div className="cards">
				{datas.map((element, index) => (
					<div className="card" key={index}>
						<NavLink to={`/Profil/${element.id}`}>
							<div className="card_bg">	</div>
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
