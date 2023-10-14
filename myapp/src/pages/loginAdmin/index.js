import styles from './index.module.css'

const Admin = () => {
    return (
        <>
            <h1 className={styles.h1}>Sistema de reserva de libros de Administrador</h1>
            <div className={styles.div}>
                <label className={styles.label}>Usuario o correo</label>
                <br/>
                <input type='text' className={styles.input}></input>
                <br/>
                <label className={styles.label1}>Contraseña</label>
                <br/>
                <input type='password' className={styles.input1} ></input>
                <button className={styles.button}>Ingresar</button>
            </div>
        </>    
    )

}
export default Admin