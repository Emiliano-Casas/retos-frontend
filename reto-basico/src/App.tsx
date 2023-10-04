import { useState } from 'react';
// import './App.css'
import Nav from './components/Nav';
import Items from './components/Items';

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Nav></Nav>
			<Items></Items>
		</>
	)
}

export default App
