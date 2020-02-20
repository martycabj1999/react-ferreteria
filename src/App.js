import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import UpperNavbar from './components/navbar/UpperNavbar';
import LowerNavbar from './components/navbar/LowerNavbar';
import Slider from './components/Slider';

function App() {
	return (
		<div>
			<header>
				<UpperNavbar />
				<LowerNavbar />
			</header>
			<body>
				<Slider />
			</body>
			<Footer />
		</div>
	)
}
export default App;