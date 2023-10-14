import styles from './index.module.css'

const registro = () => {
    return (
        <>
            <h1 className={styles.h1}>Sistema de reserva de libros</h1>
            <h2 className={styles.h2}>Registro de usuario</h2>
            <main className={styles.main}>
                <section className={styles.section}>
                    <h4 className={styles.h4}>Datos personales</h4>
                    <label className={styles.label}>Nombres</label>
                    <br/>
                    <input type="text" className={styles.input}></input>
                    <br/>
                    <label className={styles.label1}>Apellidos</label>
                    <br/>
                    <input type="text" className={styles.input}></input>
                    <br/>
                    <label className={styles.label2}>Tipo de documento</label>
                    <br/>
                    <input type="text" className={styles.input}></input>
                    <br/>
                    <label className={styles.label3}>Nro de documento</label>
                    <br/>
                    <input type="text" className={styles.input}></input>
                    
                </section>
                <section className={styles.section1}>
                    <h4>Datos de la cuenta</h4>
                    <label className={styles.label4}>Correo electronico</label>
                    <br/>
                    <input type="text" className={styles.input}></input>
                    <br/>
                    <label className={styles.label5}>Password</label>
                    <br/>
                    <input type="password" className={styles.input}></input>
                    <br/>
                    <label className={styles.label6}>Ingrese password nuevamente</label>
                    <br/>
                    <input type="password" className={styles.input}></input>
                    <button className={styles.button}>Registrar</button>
                </section>
            </main>
            

        </>
    )
}
export default registro