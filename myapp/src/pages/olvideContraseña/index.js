import styles from './index.module.css'

const contraOlvidada = () => {
    return (
        <>
            <h1 className={styles.h1}>Recuperación de contraseña</h1>
            <label className={styles.label}>Correo de Recuperación</label>
            <br/>
            <input type='text' className={styles.input}></input>
        </> 
    ) 
}
export default contraOlvidada