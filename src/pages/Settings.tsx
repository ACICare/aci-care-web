import { useAuth } from '../contexts/AuthContext';

export default function Settings() {
	const { currentUser } = useAuth();
	return (
		<div style={{ maxWidth: 600, margin: '40px auto', padding: 16 }}>
			<h1>Settings</h1>
			<p>Bem-vindo, {currentUser?.displayName || currentUser?.email}</p>
		</div>
	);
}

