import "./contaCabecalho.styles.scss"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

const ContaCabecalho = () => {
	return (
		<div className='cabecalhoContaContainer'>
			<a href='#' className='nomePerfil'>
				Nome do User
			</a>
			<FontAwesomeIcon icon={faCaretDown} />
			<img
				src='https://randomuser.me/api/portraits/women/66.jpg'
				alt='Nome do User'
				className='fotoDePerfil'
			/>
		</div>
	)
}

export default ContaCabecalho
