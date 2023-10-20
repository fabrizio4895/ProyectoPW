import Link from 'next/link'
import styles from './index.module.css'
import { TextField } from '@mui/material'

const Admin = () => {
    return (
        <>
            <div className={styles.div}>
                <h1 className={styles.h1}>Sistema de reserva de libros</h1>
                <TextField  className={styles.TextField1} type='text' id="outlined-basic" label="Usuario o correo" variant="outlined" color="secondary"></TextField>
                <TextField className={styles.TextField2} type='password' id="outlined-basic" label="Contraseña" variant="outlined" color="secondary"></TextField>
            </div>
            <div className={styles.div1}>
                <Link href="/olvideContraseña" className={styles.Link}>Olvidé mi contraseña</Link>
            </div>
            <div className={styles.div2}>
                <button className={styles.button}>Ingresar</button>
            </div>                        
        </>
    )
}
export default Admin