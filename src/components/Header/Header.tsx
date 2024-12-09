import styles from "./Header.module.css"

interface HeaderProps {
  usuario: string;
}

const Header: React.FC<HeaderProps> = ({ usuario }) => {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>Tamires Cilios e Sobrancelhas</div>
        <div className={styles.usuario}>{usuario}</div>
    </header>
  )
}

export default Header