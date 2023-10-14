import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import NotFound from './components/NotFound.tsx'
// import './index.css'
import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Items from './components/Items.tsx';
import Item from './components/Item.tsx';

const router = createBrowserRouter([{
	path: "/",
	element: <App />,
	errorElement: <NotFound />,
	children: [{
		index: true,
		element: <Items />,
	},{
		path: "/item/:itemID",
		element: <Item />
	}]
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>,
)
