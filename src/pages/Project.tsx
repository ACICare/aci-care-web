import { motion } from "framer-motion";
import styles from './Project.module.css';

const Project = () => {
  return (
    <motion.section
      id="project"
      className={styles.projectSection}
      style={{ minHeight: "100vh" }}
    >
      <div className={styles.container}>
        {/* Seção vazia de 100vh para o projeto */}
      </div>
    </motion.section>
  );
};

export default Project;

