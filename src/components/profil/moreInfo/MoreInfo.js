import Description from './description/Description';
import Equipements from './equipements/Equipements';

const MoreInfo = (props) => {
	var index = props.index;
	return (
		<>
			<div className="moreInfo">
				<Description index={index} />
				<Equipements index={index} />
			</div>
		</>
	);
};

export default MoreInfo;
