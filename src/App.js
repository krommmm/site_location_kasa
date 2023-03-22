import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Info from "./pages/Info";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import './styles/index.css';
import {Routes,Route} from "react-router-dom";


function App() {


	return (
		<>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Profil/:id" element={<Profil />} />
			<Route path="/A-propos-de-kasa" element={<Info />} />
		</Routes>
		<Footer />
			
		</>
	);
}

export default App;
