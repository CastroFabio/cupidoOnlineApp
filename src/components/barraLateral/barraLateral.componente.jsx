import "./barraLateral.styles.scss"
import React from "react"
import Logo from "../../assets/cupid_logo_icon.png"

const BarraLateral = () => {
	return (
		<div className='barraLateralContainer'>
			<img className='logoBarraLateral' src={Logo} alt='Logo da marca' />
			<ul className='navBarraLateral'>
				<li>
					<a href='#home'>Caixa Principal</a>
				</li>
				<li>
					<a href='#news'>Estrela</a>
				</li>
				<li>
					<a href='#contact'>Importante</a>
				</li>
				<li>
					<a href='#about'>Enviados</a>
				</li>
				<li>
					<a href='#about'>Lixeira</a>
				</li>
			</ul>

			<ul className='navBarraLateral'>
				<li>
					<a href='#home'>Amigos</a>
				</li>
			</ul>
		</div>
	)
}

export default BarraLateral
