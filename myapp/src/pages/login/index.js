import Link from 'next/link'
import styles from './index.module.css'

const alumno = () => {
    return (
        <>
            <div className={styles.div}>
                <h1 className={styles.h1}>Sistema de reserva de libros</h1>
                <label className={styles.label}>Usuario o correo</label>
                <br/>
                <input type='text' className={styles.input}></input>
                <br/>
                <label className={styles.label1}>Contraseña</label>
                <br/>
                <input type='password' className={styles.input1} ></input>
            </div>
            <div className={styles.div1}><Link href="/olvideContraseña">Olvidé mi contraseña</Link></div>
            <div className={styles.div2}>
                <span className={styles.span}><Link href="/registro">Registro usuario</Link></span>
                <button className={styles.button}>Ingresar</button>
            </div>
                        
        </>
    )
}
export default alumno