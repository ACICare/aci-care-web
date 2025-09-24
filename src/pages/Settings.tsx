import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Settings.module.css';

export default function Settings() {
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();

	async function handleLogout() {
		try {
			await logout();
			navigate('/login'); // redireciona para a tela de login
		} catch (err) {
			console.error('Falha ao deslogar', err);
		}
	}

	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<h1>Settings</h1>
				<p>Bem-vindo, {currentUser?.displayName || currentUser?.email}</p>
				<button onClick={handleLogout} className={styles.button} style={{ marginTop: '20px' }}>
					Sair
				</button>
			</div>
		</div>
	);
}
