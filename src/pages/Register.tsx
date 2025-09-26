import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./Register.module.css";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register(email, password, name);
      navigate("/settings");
    } catch (err) {
      setError("Falha ao cadastrar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.imageCardRegister}></div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.formCard}>
            <h1 className={styles.title}>Cadastro</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                required
              />
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
              <button disabled={loading} className={styles.button}>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </form>
            <p className={styles.helper}>
              Já tem conta? <Link className={styles.link} to="/login">Entrar</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
