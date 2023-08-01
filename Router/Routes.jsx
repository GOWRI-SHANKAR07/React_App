import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import State from '../Hooks/useState';
import Effect from '../Hooks/useEffect';
import Memo from '../Hooks/memo';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<ul className="App-header">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About Us</Link>
						</li>
						<li>
							<Link to="/contact">Contact Us</Link>
						</li>
						<li>
							<Link to="/state">State</Link>
						</li>
						<li>
							<Link to="/effect">Effect</Link>
						</li>
						<li>
							<Link to="/memo">Memo</Link>
						</li>
					</ul>
					<Routes>
						<Route exact path='/' element={< Home />}></Route>
						<Route exact path='/about' element={< About />}></Route>
						<Route exact path='/contact' element={< Contact />}></Route>
						<Route exact path='/state' element={<State />}></Route>
						<Route exact path='/effect' element={<Effect />} ></Route>
						<Route exact path='/memo' element={<Memo />} ></Route>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;








// import ListGroup from "./components/ListGroup";
// import MyClassComponent from "./components/class";

// function App() {

//   let list = ["Kolathur", "Adyar", "Maduravoyal", "Velachery"];

//   const handleSelectItem = (item) => {
//     console.log(item);
//   }



//   return (
//     <div>
//       <ListGroup items={list} heading='Areas' onSelectItem={handleSelectItem} /><br/>
//       <MyClassComponent />
//     </div>
//   );
// };

// export default App;