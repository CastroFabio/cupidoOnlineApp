import "./App.scss"

import { Route, Routes } from "react-router-dom"

import SignUp from "./components/signUp/signUp.componente"
import SignIn from "./components/signIn/signIn.component"
import MainPage from "./routes/mainPage/mainPage.componente"

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/signup' element={<SignUp />} />
			<Route path='/signin' element={<SignIn />} />
		</Routes>
	)
}

export default App
