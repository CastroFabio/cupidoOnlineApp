import "./contatos.styles.scss"

import React from "react"

const pessoas = [
	{
		id: 1,
		name: "pessoa #1",
		assunto: "assunto do email",
		dataUltimaMessagemEnviada: "13 de Maio",
		fotoPerfilUrl: "https://randomuser.me/api/portraits/women/66.jpg",
	},
	{
		id: 2,
		name: "pessoa #2",
		assunto: "assunto do email",
		dataUltimaMessagemEnviada: "13 de Maio",
		fotoPerfilUrl: "https://randomuser.me/api/portraits/women/66.jpg",
	},
	{
		id: 3,
		name: "pessoa #3",
		assunto: "assunto do email",
		dataUltimaMessagemEnviada: "13 de Maio",
		fotoPerfilUrl: "https://randomuser.me/api/portraits/women/66.jpg",
	},
	{
		id: 4,
		name: "pessoa #4",
		assunto: "assunto do email",
		dataUltimaMessagemEnviada: "13 de Maio",
		fotoPerfilUrl: "https://randomuser.me/api/portraits/women/66.jpg",
	},
	{
		id: 5,
		name: "pessoa #5",
		assunto: "assunto do email",
		dataUltimaMessagemEnviada: "13 de Maio",
		fotoPerfilUrl: "https://randomuser.me/api/portraits/women/66.jpg",
	},
	/* 	{
		id: 6,
		name: "pessoa #6",
		assunto: "assunto do email",
		dataUltimaMessagemEnviada: "13 de Maio",
		fotoPerfilUrl: "https://randomuser.me/api/portraits/women/66.jpg",
	},
	{
		id: 7,
		name: "pessoa #7",
		assunto: "assunto do email",
		dataUltimaMessagemEnviada: "13 de Maio",
		fotoPerfilUrl: "https://randomuser.me/api/portraits/women/66.jpg",
	},
	{
		id: 8,
		name: "pessoa #8",
		assunto: "assunto do email",
		dataUltimaMessagemEnviada: "13 de Maio",
		fotoPerfilUrl: "https://randomuser.me/api/portraits/women/66.jpg",
	}, */
]

const Contatos = () => {
	return (
		<div className='contatos__mainContainer'>
			{pessoas.map(
				({ id, name, assunto, dataUltimaMessagemEnviada, fotoPerfilUrl }) => (
					<div key={id} className='contatos__container'>
						<div className='contatos__containerFotoPerfil'>
							<img
								src={fotoPerfilUrl}
								alt={name}
								className='contatos__fotoDePerfil'
							/>
						</div>
						<div className='contatos__infoContainer'>
							<h3 className='contatos__nomeContato'>
								{name.charAt(0).toUpperCase() + name.slice(1)}
							</h3>
							<p className='contatos__assunto'>{assunto}</p>
						</div>
						<div className='contatos__dataContainer'>
							<p className='contatos__dataUltimaMensagem'>
								{dataUltimaMessagemEnviada}
							</p>
						</div>
					</div>
				)
			)}
		</div>
	)
}

export default Contatos
