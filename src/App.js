import "./App.scss"
import Contatos from "./components/contatos/contatos.components"
import CorpoEmail from "./components/corpoEmail/corpoEmail.componente"
import ContaCabecalho from "./components/contaCabecalho/contaCabecalho.componente"
import CampoDePesquisa from "./components/campoDePesquisa/campoDePesquisa.componente"
import BarraLateral from "./components/barraLateral/barraLateral.componente"

const App = () => {
	return (
		<div className='mainPage__container'>
			<BarraLateral className='mainPage__sidebar ' />
			<div className='mainPage__mainContainer '>
				<div className='mainPage__topBar'>
					<CampoDePesquisa className='mainPage__searchField' />
					<ContaCabecalho className='mainPage__account' />
				</div>
				<div className='mainPage__bodyContainer'>
					<CorpoEmail className='mainPage__body' />
					<Contatos className='mainPage__contatos ' />
				</div>
			</div>
		</div>
	)
}

export default App
