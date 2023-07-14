import './App.css';
import React from 'react'
import Textform from './components/Textform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodeGen from './components/CodeGen';
import NavBar from './components/NavBar';
import ReactGen from './react/ReactGen';
import NotFoundPage from './components/NotFoundPage';
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="" element={<NavBar />}>
						<Route path='' element={<CodeGen />} />
						<Route path="reactgen" element={<ReactGen />} />
						<Route path="textutils" element={<Textform />} />
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
