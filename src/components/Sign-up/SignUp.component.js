import React from 'react'

const SignUp = ({ onRouteChange }) => {
	return (
		<div>
			<article className='br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center'>
				<main className='pa4 black-80'>
					<form className='measure'>
						<fieldset id='signup' className='ba b--transparent ph0 mh0'>
							<legend className='f4 fw6 ph0 mh0'>Sign Up</legend>
							<div className='mt3'>
								<label className='db fw6 lh-copy f6' html-for='name'>
									Name
								</label>
								<input
									className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='text'
									name='name'
									id='name'
								/>
							</div>
							<div className='mt3'>
								<label className='db fw6 lh-copy f6' html-for='email-address'>
									Email
								</label>
								<input
									className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='email'
									name='email-address'
									id='email-adress'
								/>
							</div>
							<div className='mv3'>
								<label className='db fw6 lh-copy f6' html-for='password'>
									Password
								</label>
								<input
									className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='password'
									name='password'
									id='password'
								/>
							</div>
						</fieldset>
						<div>
							<input
								onClick={() => onRouteChange('signin')}
								className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
								type='submit'
								value='Confirm Sign Up'
							/>
						</div>
					</form>
				</main>
			</article>
		</div>
	)
}

export default SignUp
