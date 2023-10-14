import { useState } from 'react';
// import './App.css'
import Nav from './components/Nav';
import Items from './components/Items';
import { Outlet } from 'react-router-dom';

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Nav></Nav>
			<Outlet></Outlet>
		</>
	)
}

export default App
