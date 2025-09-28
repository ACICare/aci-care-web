import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Construction } from 'lucide-react';
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
				<div className={styles.header}>
					<h1 className={styles.title}>Configurações</h1>
					<p className={styles.subtitle}>Gerencie sua conta e preferências</p>
				</div>

				<div className={styles.content}>
					{/* Aviso de Desenvolvimento */}
					<div className={styles.developmentNotice}>
						<div className={styles.noticeIcon}>
							<Construction size={24} />
						</div>
						<div className={styles.noticeContent}>
							<h3>Página em Desenvolvimento</h3>
							<p>Esta página ainda está sendo desenvolvida. Novas funcionalidades serão implementadas futuramente.</p>
						</div>
					</div>

					{/* Informações do Usuário */}
					<div className={styles.userSection}>
						<div className={styles.userHeader}>
							<div className={styles.userIcon}>
								<User size={20} />
							</div>
							<h2>Informações da Conta</h2>
						</div>
						
						<div className={styles.userInfo}>
							<div className={styles.infoItem}>
								<label>Email:</label>
								<span className={styles.email}>{currentUser?.email}</span>
							</div>
							<div className={styles.infoItem}>
								<label>Status:</label>
								<span className={styles.status}>Ativo</span>
							</div>
						</div>
					</div>

					{/* Ações */}
					<div className={styles.actionsSection}>
						<button onClick={handleLogout} className={styles.logoutButton}>
							<LogOut size={18} />
							Sair da Conta
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
