import datas from '../../../data/logements';
import greyStar from "../../../images/grey_star.png";
import redStar from "../../../images/red_star.png";
import {useEffect} from "react";

const Logement = (props) => {
	var index = props.index;

    useEffect(()=>{
        var rating = document.querySelector(".rating");
        for(var i=0;i<5;i++){
            var imgStar = document.createElement("img");
            imgStar.className="star"
            if(datas[index].rating>=i+1){
                imgStar.setAttribute("src",redStar);
            }else{
                imgStar.setAttribute("src",greyStar);
            }
            rating.appendChild(imgStar);
        }
    },[index]);


	return (
		<>
			<div className="logement">
				<div className="logement_left">
					<p id="title">{datas[index].title}</p>
					<p id="location">{datas[index].location}</p>
					<div className="tags">
						{datas[index].tags.map((tag, index) => (
							<div key={index}>
								<p className="tag">{tag}</p>
							</div>
						))}
					</div>
				</div>
				<div className="logement_right">
					<div className="host">
						<p>{datas[index].host.name}</p>
						<img src={datas[index].host.picture} alt="imzerage"/>
					</div>
                    <div className="rating"></div>
				</div>
			</div>
		</>
	);
};
export default Logement;
