import React, { useContext } from 'react'
import { Large, Small } from '../components/ChangeCase'
import InputForm from './InputForm'
import { Container } from 'semantic-ui-react'
import { FormDataContext } from '../App'

export default function Router() {
  const { formData } = useContext(FormDataContext)
  const { setFormData } = useContext(FormDataContext)
  
  const list = Object.values(formData)
  return (
    <Container>
      <InputForm setFormData={setFormData} formData={formData} />
      <br />
      <h2>Router Pages</h2>
      <pre>
        {`<BrowserRouter>
	<Routes>
		<Route path="" element={<NavBar/>}>`}
        {list.map((item, index) => (
          <React.Fragment key={index}>{
            `
			<Route path="${Small(item.value)}" element={<${Large(item.value ? item.value : 'home')}/>}/>`}
            {/* <p key={index}>{item.type ? item.type : 'text'} : {item.value}</p> */}
          </React.Fragment>
        ))}
        {`
			{/* <Route path="*" element={<NotFoundPage />} />	 */}
		</Route>
	</Routes>
</BrowserRouter>`}
      </pre>
      <p>Create components for each page.</p>
    </Container>
  )
}
