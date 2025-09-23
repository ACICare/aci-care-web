import { type FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styles from './Register.module.css';

export default function Login() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setError('');
		setLoading(true);
		try {
			await login(email, password);
			navigate('/settings');
		} catch (err) {
			setError('Falha ao entrar. Verifique suas credenciais.');
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<h1 className={styles.title}>Login</h1>
				<form onSubmit={handleSubmit} className={styles.form}>
					<input
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={styles.input}
						required
					/>
					<input
						type="password"
						placeholder="Senha"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className={styles.input}
						required
					/>
					{error && <p className={styles.error}>{error}</p>}
					<button disabled={loading} className={styles.button}>Entrar</button>
				</form>
				<p className={styles.helper}>
					Não tem conta? <Link className={styles.link} to="/register">Cadastre-se</Link>
				</p>
			</div>
		</div>
	);
}
