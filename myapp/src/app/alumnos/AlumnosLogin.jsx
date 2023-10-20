import Link from 'next/link'
import styles from './index.module.css'
import { TextField } from '@mui/material'
import { useState } from 'react'

const Alumno = (alumnos) => {

    const[alumnoLogeado,setAlumnoLogeado] = useState([])

    const handleEnviar = () => {
        for (let i = 0; i < alumnos.length; i++) {
            if(TextField1==alumnos[i].CorreoElectrónico && TextField2==alumnos[i].Password){
                
                setAlumnoLogeado(1)

            }           
        }
        
    }

    return (
        <>
            <div className={styles.div}>
                <h1 className={styles.h1}>Sistema de reserva de libros</h1>
                <TextField  className={styles.TextField1} type='text' label="Usuario o correo" variant="outlined" color="secondary"></TextField>
                <TextField className={styles.TextField2} type='password' label="Contraseña" variant="outlined" color="secondary"></TextField>
            </div>
            <div className={styles.div1}>
                <Link href="/olvideContraseña" className={styles.Link}>Olvidé mi contraseña</Link>
            </div>
            <div className={styles.div2}>
                <Link href="/registro" className={styles.Link2}>Registro usuario</Link>
                <button className={styles.button} onClick={handleEnviar}><Link href="/paginaPrincipalAlumno">Ingresar</Link></button>
            </div>
                        
        </>
    )

}

export default Alumno