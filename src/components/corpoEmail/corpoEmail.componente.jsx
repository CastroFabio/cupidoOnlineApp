import React, { useEffect, useRef, useState } from "react"
import "./corpoEmail.styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReply } from "@fortawesome/free-solid-svg-icons"

const emails = [
	{
		id: 1,
		remetente: "remetente #1",
		destinatario: "destinatário #1",
		assunto: "assunto",
		dataDeEnvio: "15 de Fevereiro de 2022",
		conteudoDoEmail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit placeat quo sequi temporibus consectetur ut officiis. Magnam facere vel quam modi dolor, illo totam eum corporis molestiae? Ad, corrupti.",
	},
	{
		id: 2,
		remetente: "remetente #2",
		destinatario: "destinatário #1",
		assunto: "assunto",
		dataDeEnvio: "15 de Fevereiro",
		conteudoDoEmail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit placeat quo sequi temporibus consectetur ut officiis. Magnam facere vel quam modi dolor, illo totam eum corporis molestiae? Ad, corrupti.",
	},
	{
		id: 3,
		remetente: "remetente #3",
		destinatario: "destinatário #1",
		assunto: "assunto",
		dataDeEnvio: "15 de Fevereiro",
		conteudoDoEmail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit placeat quo sequi temporibus consectetur ut officiis. Magnam facere vel quam modi dolor, illo totam eum corporis molestiae? Ad, corrupti.",
	},
	{
		id: 4,
		remetente: "remetente #4",
		destinatario: "destinatário #1",
		assunto: "assunto",
		dataDeEnvio: "15 de Fevereiro",
		conteudoDoEmail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit placeat quo sequi temporibus consectetur ut officiis. Magnam facere vel quam modi dolor, illo totam eum corporis molestiae? Ad, corrupti.",
	},
	{
		id: 5,
		remetente: "remetente #5",
		destinatario: "destinatário #1",
		assunto: "assunto",
		dataDeEnvio: "15 de Fevereiro",
		conteudoDoEmail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit placeat quo sequi temporibus consectetur ut officiis. Magnam facere vel quam modi dolor, illo totam eum corporis molestiae? Ad, corrupti.",
	},
	{
		id: 6,
		remetente: "remetente #6",
		destinatario: "destinatário #1",
		assunto: "assunto",
		dataDeEnvio: "15 de Fevereiro",
		conteudoDoEmail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit placeat quo sequi temporibus consectetur ut officiis. Magnam facere vel quam modi dolor, illo totam eum corporis molestiae? Ad, corrupti.",
	},
	{
		id: 7,
		remetente: "remetente #7",
		destinatario: "destinatário #1",
		assunto: "assunto",
		dataDeEnvio: "15 de Fevereiro",
		conteudoDoEmail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit placeat quo sequi temporibus consectetur ut officiis. Magnam facere vel quam modi dolor, illo totam eum corporis molestiae? Ad, corrupti.",
	},
	{
		id: 8,
		remetente: "remetente #8",
		destinatario: "destinatário #1",
		assunto: "assunto",
		dataDeEnvio: "15 de Fevereiro",
		conteudoDoEmail:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sit placeat quo sequi temporibus consectetur ut officiis. Magnam facere vel quam modi dolor, illo totam eum corporis molestiae? Ad, corrupti.",
	},
]

const CorpoEmail = () => {
	const { id, remetente, destinatario, assunto, dataDeEnvio, conteudoDoEmail } =
		emails[0]

	/* 	const [toggle, setToggle] = useState(true)

	const renderCount = useRef(0)

	useEffect(() => {
		setToggle(toggle)
	}) */

	return (
		<div className='corpoEmail__mainContainer'>
			<div className='corpoEmail__container'>
				<div key={id} className='corpoEmail__cabecalho'>
					<div className='corpoEmail__cabecalhoInfo'>
						<div className='corpoEmail__remetente'>{remetente}</div>
						<div className='corpoEmail__destinatario'>{destinatario}</div>
						<div className='corpoEmail__assunto'>{assunto}</div>
					</div>

					<div className='corpoEmail__dataDeEnvio'>{dataDeEnvio}</div>
					{/* <FontAwesomeIcon icon={faReply}></FontAwesomeIcon> */}
				</div>
				<div className='corpoEmail__conteudo'>{conteudoDoEmail}</div>
			</div>
			<form className='corpoEmail__caixaDeTextoContainer'>
				<textarea
					placeholder='Remember, be nice!'
					id='caixaDeTextoResposta'
					cols='120'
					rows='5'
					className='corpoEmail__caixaDeTexto'
				></textarea>
				<button className='corpoEmail__Botao' type='submit'>
					Atire sua Flecha
				</button>
			</form>
		</div>
	)
}
export default CorpoEmail
