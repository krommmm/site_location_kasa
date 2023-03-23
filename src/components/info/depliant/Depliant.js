import arrow from "../../../images/arrow.png";
import { useState, useEffect } from 'react';

const Depliant = ()=>{

    const [toggle, setToggle] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    const [toggle3, setToggle3] = useState(true);
    const [toggle4, setToggle4] = useState(true);


    useEffect(() => {
		let arrowB = document.querySelector('.arrow');
		let text = document.querySelector('.depliant_text');

        text.style.display = toggle ? "none" : "flex";
        setTimeout(()=>{
		text.style.transform = toggle ? 'translateY(-100px)' : 'translateY(0px)';
		arrowB.style.transform = toggle ? 'rotate(0deg)' : 'rotate(180deg)';
      
    },1);
	}, [toggle]);

    useEffect(() => {
		let arrowB = document.querySelector('.arrow2');
		let text = document.querySelector('.depliant_text2');
        text.style.display = toggle2 ? "none" : "flex";
        setTimeout(()=>{
		text.style.transform = toggle2 ? 'translateY(-100px)' : 'translateY(0px)';
		arrowB.style.transform = toggle2 ? 'rotate(0deg)' : 'rotate(180deg)';
    },1);

	}, [toggle2]);

    useEffect(() => {
		let arrowB = document.querySelector('.arrow3');
		let text = document.querySelector('.depliant_text3');
        text.style.display = toggle3 ? "none" : "flex";
        setTimeout(()=>{
		text.style.transform = toggle3 ? 'translateY(-100px)' : 'translateY(0px)';
		arrowB.style.transform = toggle3 ? 'rotate(0deg)' : 'rotate(180deg)';
    },1);
	}, [toggle3]);

    useEffect(() => {
		let arrowB = document.querySelector('.arrow4');
		let text = document.querySelector('.depliant_text4');
        
        text.style.display = toggle4 ? "none" : "flex";
        setTimeout(()=>{
            text.style.transform = toggle4 ? 'translateY(-350px)' : 'translateY(0px)';
            arrowB.style.transform = toggle4 ? 'rotate(0deg)' : 'rotate(180deg)';
        },1);
       
	
	}, [toggle4]);


    
    return (
        <>
        <div className="depliant">
            <div className="depliant1">
                <button className="btn_depliant" onClick={() => setToggle(!toggle)}><div className="btn_txt">Fiabilité</div><img className="arrow" src={arrow} alt="arrow"/></button>
                <div className="depliant_text">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </div>
            </div>

            <div className="depliant1">
                <button className="btn_depliant" onClick={() => setToggle2(!toggle2)}><div className="btn_txt">Respect</div><img className="arrow2" src={arrow} alt="arrow"/></button>
                <div className="depliant_text2">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
            </div>

            <div className="depliant1">
                <button className="btn_depliant" onClick={() => setToggle3(!toggle3)}><div className="btn_txt">Service</div><img className="arrow3" src={arrow} alt="arrow"/></button>
                <div className="depliant_text3">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
            </div>

            <div className="depliant1">
                <button className="btn_depliant" onClick={() => setToggle4(!toggle4)}><div className="btn_txt">Responsabilité</div><img className="arrow4" src={arrow} alt="arrow"/></button>
                <div className="depliant_text4">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Depliant;