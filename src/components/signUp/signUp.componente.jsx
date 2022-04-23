import React, { useState } from "react"

import UserPool from "../../utils/userPool.utils"

import "./signUp.styles.scss"

const SignUp = () => {
	const [email, setEmail] = useState("")
	const [senha, setSenha] = useState("")
	const [nome, setNome] = useState("")
	const [message, setMessage] = useState(null)

	const submitHandler = (event) => {
		event.preventDefault()
		if (email.trim() === "" || nome.trim() === "" || senha.trim() === "") {
			setMessage("Todos devem ser preenchidos")
			return
		}
		UserPool.signUp(email, senha, [], null, (err, data) => {
			if (err) {
				console.error(err)
			}
			console.log(data)
		})
	}

	return (
		<div className='signupFrm'>
			<div className='wrapper'>
				<form className='form' onSubmit={submitHandler}>
					<h1 className='title'>Crie sua conta</h1>

					<div className='inputContainer'>
						<input
							value={email}
							type='email'
							className='input'
							placeholder='a'
							onChange={(event) => {
								setEmail(event.target.value)
							}}
						/>
						<label htmlFor='' className='label'>
							Email
						</label>
					</div>

					<div className='inputContainer'>
						<input
							value={nome}
							type='text'
							className='input'
							placeholder='a'
							onChange={(event) => {
								setNome(event.target.value)
							}}
						/>
						<label htmlFor='' className='label'>
							Usuário
						</label>
					</div>

					<div className='inputContainer'>
						<input
							value={senha}
							type='password'
							className='input'
							placeholder='a'
							onChange={(event) => {
								setSenha(event.target.value)
							}}
						/>
						<label htmlFor='' className='label'>
							Senha
						</label>
					</div>

					<div className='inputContainer'>
						<input type='password' className='input' placeholder='a' />
						<label htmlFor='' className='label'>
							Confirmar Senha
						</label>
					</div>
					<button type='submit' className='submitBtn'>
						Registrar
					</button>
				</form>
				{message && <p className='message'>{message}</p>}
			</div>
		</div>
	)
}

export default SignUp
