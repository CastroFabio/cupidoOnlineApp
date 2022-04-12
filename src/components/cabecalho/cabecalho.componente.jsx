import React from "react"

import "./cabecalho.styles.scss"

import ContaCabecalho from "../contaCabecalho/contaCabecalho.componente"
import CampoDePesquisa from "../campoDePesquisa/campoDePesquisa.componente"

const Cabecalho = () => {
	return (
		<div className='cabecalho__cabecalhoContainer'>
			<CampoDePesquisa />
			<ContaCabecalho />
		</div>
	)
}

export default Cabecalho
