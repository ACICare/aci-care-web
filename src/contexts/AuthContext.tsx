// contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';
import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import type { User } from 'firebase/auth';

interface AuthContextType {
	currentUser: User | null;
	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string, name: string) => Promise<void>;
	logout: () => Promise<void>;
	updateUserProfile: (data: { displayName?: string; photoURL?: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error('useAuth must be used within AuthProvider');
	return ctx;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	async function register(email: string, password: string, name: string) {
		const cred = await createUserWithEmailAndPassword(auth, email, password);
		await updateProfile(cred.user, { displayName: name });
		setCurrentUser({ ...cred.user });
	}

	async function login(email: string, password: string) {
		await signInWithEmailAndPassword(auth, email, password);
	}

	async function logout() {
		await signOut(auth);
	}

	async function updateUserProfile(data: { displayName?: string; photoURL?: string }) {
		if (auth.currentUser) {
			await updateProfile(auth.currentUser, data);
			setCurrentUser({ ...(auth.currentUser as User) });
		}
	}

	const value: AuthContextType = {
		currentUser,
		login,
		register,
		logout,
		updateUserProfile,
	};

	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}