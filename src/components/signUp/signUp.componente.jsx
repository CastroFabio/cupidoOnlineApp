import React from "react"
import "./signUp.styles.scss"

const SignUp = () => {
	return (
		<div className='signupFrm'>
			<div className='wrapper'>
				<form action='' className='form'>
					<h1 className='title'>Crie sua conta</h1>

					<div className='inputContainer'>
						<input type='text' className='input' placeholder='a' />
						<label for='' className='label'>
							Email
						</label>
					</div>

					<div className='inputContainer'>
						<input type='text' className='input' placeholder='a' />
						<label for='' className='label'>
							Usuário
						</label>
					</div>

					<div className='inputContainer'>
						<input type='text' className='input' placeholder='a' />
						<label for='' className='label'>
							Senha
						</label>
					</div>

					<div className='inputContainer'>
						<input type='text' className='input' placeholder='a' />
						<label for='' className='label'>
							Confirmar Senha
						</label>
					</div>

					<input type='submit' className='submitBtn' value='Registrar' />
				</form>
			</div>
		</div>
	)
}

export default SignUp
