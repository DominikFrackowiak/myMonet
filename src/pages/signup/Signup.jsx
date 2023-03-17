import { useEffect, useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import { useNavigate } from 'react-router-dom'

import styles from './Signup.module.css'

export default function Signup() {
	const [isCancelled, setIsCancelled] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [displayName, setDisplayName] = useState('')
	const { signup, isPending, error } = useSignup()

	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		signup(email, password, displayName)
	}

	// useEffect(() => {
	// 	navigate('/')
	// }, [])

	return (
		<form onSubmit={handleSubmit} className={styles['signup-form']}>
			<h2>Signup</h2>

			<label>
				<span>display name: </span>
				<input
					type='text'
					onChange={e => setDisplayName(e.target.value)}
					value={displayName}
				/>
			</label>

			<label>
				<span>email: </span>
				<input
					type='email'
					onChange={e => setEmail(e.target.value)}
					value={email}
				/>
			</label>

			<label>
				<span>password: </span>
				<input
					type='password'
					onChange={e => setPassword(e.target.value)}
					value={password}
				/>
			</label>
			{!isPending && <button className='btn'>Signup</button>}
			{error && <p>{error}</p>}
			{isPending && (
				<button className='btn' disabled>
					Loading
				</button>
			)}
		</form>
	)
}
