import logo from "../../images/LOGO.png";
import {NavLink} from "react-router-dom";
const Header = ()=>{
 
    return (
        <>
        <div className="header">
            <div className="logo">
            <img src={logo} alt="logo"/>
            </div>
            <div className="liens_header">
                <NavLink to="/" className={({isActive})=>(isActive ? "activeLink" : undefined)}>Accueil</NavLink>
                <NavLink to="/A-propos-de-kasa" className={({isActive})=>(isActive ? "activeLink" : undefined)}>A propos</NavLink>
            </div>
        </div>
        </>
    );
}

export default Header;