import datas from '../../../data/logements';
import chevron_gauche from '../../../images/chevron_carousel_left.png';
import chevront_droit from '../../../images/chevron_carousel_right.png';
import { useState,useEffect } from 'react';

const ProfilBanner = (props) => {
	let index = props.index;
	const [compteur1,setCompteur1] = useState(1);

	useEffect(() => {
		var fleche_droite = document.querySelector('.chevron_droit');
		var fleche_gauche = document.querySelector('.chevron_gauche');

		var profilBanner = document.querySelector('.profilBanner');
		var slideWidth = profilBanner.getBoundingClientRect().width;
		var elements = document.querySelector('.elements');
		var compteur = 0;

		fleche_droite.addEventListener('click', turnRight);
		fleche_gauche.addEventListener('click', turnLeft);

		function turnRight() {
			compteur++;
			setCompteur1(compteur+1);

			if (compteur < datas[index].pictures.length) {
				var transfert = -slideWidth * compteur;
				elements.style.transform = `translateX(${transfert}px)`;
			} else {
				compteur = 0;
				setCompteur1(0+1);
				elements.style.transform = `translateX(${0}px)`;
			}
		}

		function turnLeft() {
			compteur--;
		

			if (compteur > -1) {
				setCompteur1(compteur+1);
				var transfert = -slideWidth * compteur;
				elements.style.transform = `translateX(${transfert}px)`;
			} else if (compteur <= -1) {
				compteur = datas[index].pictures.length - 1;
				setCompteur1(datas[index].pictures.length);
				transfert = -slideWidth * compteur;
				elements.style.transform = `translateX(${transfert}px)`;
			}
		}
	}, [index]);

	return (
		<>
			<div className="profilBanner">
				<div className="elements">
					{datas[index].pictures.map((picture, index) => (
						<div key={index}>
							<div className="element">
								<img
									className="element_img"
									src={picture}
									alt={`${index}_img_profil`}
								/>
							</div>
						</div>
					))}
				</div>
				<img
					className="chevron_gauche"
					src={chevron_gauche}
					alt="chevron_gauche"
				/>
				<img
					className="chevron_droit"
					src={chevront_droit}
					alt="chevron_droit"
				/>
				<div className="indexion">
					<p>{compteur1}/{datas[index].pictures.length}</p>
				</div>
			</div>
		</>
	);
};

export default ProfilBanner;
