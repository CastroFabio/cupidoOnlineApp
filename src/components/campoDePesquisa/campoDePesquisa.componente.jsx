import "./campoDePesquisa.styles.scss"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const CampoDePesquisa = () => {
	return (
		<div>
			<form className='campoDePesquisaContainer' action='#'>
				<div className='campoDePesquisaBotaoContainer'>
					<button className='campoDePesquisaBotao' type='submit'>
						<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
					</button>
				</div>
				<input
					className='campoDePesquisa'
					type='text'
					placeholder='Search...'
					name='search'
				/>
			</form>
		</div>
	)
}

export default CampoDePesquisa
