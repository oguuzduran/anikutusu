import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import CreateScreen from './Screens/CreateScreen';
function App() {
	return (
		<Router>
			<Route path="/" exact component={HomeScreen}></Route>
			<Route path="/create" component={CreateScreen}></Route>
		</Router>
	);
}

export default App;
