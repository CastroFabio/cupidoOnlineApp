import React from "react"
import "./signIn.styles.scss"

const SignIn = () => {
	return (
		<div className='signupFrm'>
			<div className='wrapper'>
				<form action='' className='form'>
					<h1 className='title'>Login</h1>

					<div className='inputContainer'>
						<input type='text' className='input' placeholder='a' />
						<label for='' className='label'>
							Email
						</label>
					</div>

					<div className='inputContainer'>
						<input type='text' className='input' placeholder='a' />
						<label for='' className='label'>
							Senha
						</label>
					</div>

					<input type='submit' className='submitBtn' value='Entre' />
				</form>
			</div>
		</div>
	)
}

export default SignIn
