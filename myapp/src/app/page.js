import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Bienvenido a la biblioteca</h1>
      <h2>¿Quién es usted?</h2>
      <ul>
        <li className={styles.li}><Link href="/login">Alumno</Link></li>
        <li className={styles.li}><Link href="/loginAdmin">Administrador</Link></li>
      </ul>    
    </main>
  )
}
