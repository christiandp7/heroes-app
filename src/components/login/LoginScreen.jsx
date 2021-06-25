import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext)
	const handleLogin = () => {
		const lastPath = localStorage.getItem('lastPath') || '/'
		dispatch({
			type: types.login,
			payload: { name: 'Christian Diaz' },
		})
		history.replace(lastPath)
		console.log('login!!!')
	}

	return (
		<div className="container mt-5">
			<h1>Login</h1>
			<hr />
			<button type="button" className="btn btn-primary" onClick={handleLogin}>
				Login
			</button>
		</div>
	)
}

export default LoginScreen
