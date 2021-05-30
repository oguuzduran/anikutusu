import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import CreateScreen from './Screens/CreateScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import UpdateScreen from './Screens/UpdateScreen';

import { Container } from 'react-bootstrap';

function App() {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/" exact component={HomeScreen}></Route>
					<Route path="/create" component={CreateScreen}></Route>
					<Route path="/update/:id" component={UpdateScreen}></Route>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
