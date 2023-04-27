import './App.css';
import React, { useState } from 'react'
import Textform from './components/Textform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodeGen from './components/CodeGen';
import NavBar from './components/NavBar';
import DynamicList from './components/DynamicList';
function App() {
	let [state, setState] = useState("HTML Form");
	function handleState(value) {
		setState(value);
	}
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<NavBar change={handleState} />}>
						<Route index element={<CodeGen page={state} />} />
						<Route path="dynamic_list" element={<DynamicList />} />
						<Route path="textutils" element={<Textform />} />
						{/* <Route path="*" element={<NoPage />} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
