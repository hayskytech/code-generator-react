import React from 'react'
import { Large, Small } from '../components/ChangeCase'

export default function Router(p) {
	
	const list = Object.values(p.formData)
	return (
		<>
		<br />
		<h2>Router Pages</h2>
			<pre>
				{`<BrowserRouter>
	<Routes>
		<Route path="sub" element={<NavBar/>}>`}
				{list.map((item, index) => (
					<>{
						`
			<Route path="${Small(item.value)}" element={<${Large(item.value?item.value:'home')}/>}>`}
						{/* <p key={index}>{item.type ? item.type : 'text'} : {item.value}</p> */}
					</>
				))}
				{`
			{/* <Route path="*" element={<NotFoundPage />} />	 */}
		</Route>
	</Routes>
</BrowserRouter>`}
			</pre>
			<p>Create components for each page.</p>
		</>
	)
}
