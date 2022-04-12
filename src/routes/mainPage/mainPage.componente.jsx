import "./mainPage.styles.scss"

import React from "react"

import Contatos from "../../components/contatos/contatos.components"
import CorpoEmail from "../../components/corpoEmail/corpoEmail.componente"
import BarraLateral from "../../components/barraLateral/barraLateral.componente"
import Cabecalho from "../../components/cabecalho/cabecalho.componente"

function MainPage() {
	return (
		<div className='mainPage__barraLateralMainPage'>
			<BarraLateral />
			<div>
				<Cabecalho />
				<div className='mainPage__corpoEmailContatosContainer'>
					<CorpoEmail />
					<Contatos />
				</div>
			</div>
		</div>
	)
}

export default MainPage
