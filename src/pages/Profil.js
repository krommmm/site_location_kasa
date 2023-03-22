import datas from '../data/logements';
import Logement from '../components/profil/logement/Logement';
import ProfilBanner from '../components/profil/banner/ProfilBanner';
import MoreInfo from '../components/profil/moreInfo/MoreInfo';
import { useParams } from 'react-router-dom';
import {useEffect} from "react";

function ProfilPage() {
	const { id } = useParams();
	let index = 0;
	for (var i = 0; i < datas.length; i++) {
		if (datas[i].id === id) {
			index = i;
		}
	}
	useEffect(()=>{
		const loading_content = document.querySelector(".loading_content0");
		const loading = document.querySelector(".loading0");

		window.addEventListener("load",()=>{
			loading_content.classList.add("loading_content");
			loading.classList.add("loading");
		})
	},[]);

	return (
		<>
		 <div className="loading_content0">
				<div className="loading0"></div>
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
