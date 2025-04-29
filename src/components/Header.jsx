import { Link } from 'react-router-dom'
import styles from './HeaderFooter.module.css'
// styles vem importado de outra pasta, agora deve ser usado style."class"
 
export function Header() {
  return (
    <>
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <h2 className={styles.brand}>Pearson Hardman</h2>
        <nav className={styles.navbar}>
          <Link to="/">Início</Link> {/* rotas com os componentes */}
          <Link to="/Serviços">Serviços</Link>
          <Link to="/Sobre">Sobre</Link>
          <Link to="/Time">Time</Link>
          <Link to="/Contato">Contato</Link>
        </nav>
      </div>
    </header>
    </>
  )
};