import datas from '../data/logements';
import Logement from '../components/profil/logement/Logement';
import ProfilBanner from '../components/profil/banner/ProfilBanner';
import MoreInfo from '../components/profil/moreInfo/MoreInfo';
import { useParams } from 'react-router-dom';

function ProfilPage() {
	const { id } = useParams();
	let index = 0;
	for (var i = 0; i < datas.length; i++) {
		if (datas[i].id === id) {
			index = i;
		}
	}

	window.addEventListener("load", ()=>{
		document.querySelector(".loading_content").classList.add("loading_content--hidden");
		document.querySelector(".loading").classList.add("loading--hidden");
	})

	return (
		<>
		<div className="loading_content ">
				<div className="loading "></div>
			</div>
			<div className="profil">
				<ProfilBanner index={index} />
				<Logement index={index} />
				<MoreInfo index={index} />
			</div>
		</>
	);
}

export default ProfilPage;
