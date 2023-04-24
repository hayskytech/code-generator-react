import './App.css';

import Textform from './components/Textform';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import CodeGen from './components/CodeGen';
import NavBar from './components/NavBar';
function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<NavBar />}>
						<Route index element={<CodeGen />} />
						{/* <Route path="blogs" element={<Blogs />} /> */}
						<Route path="textutils" element={<Textform />} />
						{/* <Route path="*" element={<NoPage />} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
