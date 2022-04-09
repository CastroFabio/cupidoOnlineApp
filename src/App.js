import "./App.scss"
import Contatos from "./components/contatos/contatos.components"
import CorpoEmail from "./components/corpoEmail/corpoEmail.componente"
import ContaCabecalho from "./components/contaCabecalho/contaCabecalho.componente"
import CampoDePesquisa from "./components/campoDePesquisa/campoDePesquisa.componente"
import BarraLateral from "./components/barraLateral/barraLateral.componente"
import RegistroConta from "./components/registroConta/registroConta.componente"
import SignIn from "./components/signIn/signIn.component"

const App = () => {
	return (
		<div>
			{/* <RegistroConta /> */}
			<SignIn />
			{/*<div className='mainPage__mainContainer'>
			 	<BarraLateral />
			<div>
				<div className='mainPage__cabecalhoContainer'>
					<CampoDePesquisa />
					<ContaCabecalho />
				</div>
				<div className='mainPage__corpoEmailContatosContainer'>
					<CorpoEmail />
					<Contatos />
				</div>
			</div>
		</div> */}
		</div>
	)
}

export default App
