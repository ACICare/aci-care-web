import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Entre em Contato</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Informações de Contato</h3>
            <div className={styles.contactItem}>
              <span className={styles.label}>Email:</span>
              <span className={styles.value}>contato@neuro27.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.label}>Telefone:</span>
              <span className={styles.value}>+55 (11) 99999-9999</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.label}>Endereço:</span>
              <span className={styles.value}>São Paulo, SP - Brasil</span>
            </div>
          </div>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Nome</label>
              <input 
                type="text" 
                id="name" 
                className={styles.input}
                placeholder="Seu nome completo"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input 
                type="email" 
                id="email" 
                className={styles.input}
                placeholder="seu@email.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Mensagem</label>
              <textarea 
                id="message" 
                className={styles.textarea}
                placeholder="Sua mensagem aqui..."
                rows={5}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
