import Link from 'next/link'
import styles from './registro.module.css'
import { TextField } from '@mui/material'
import { useEffect, useState } from 'react';

const alumnoRegistro = () => {

    const alumnoRegistrado = {
        Nombres:"",
        Apellidos:"",
        TipoDocumento:"",
        NroDocumento:"",
        CorreoElectrónico:"",
        Password:""
    }

    
    const [alumno,setAlumno] = useState(alumnoRegistrado) //alumno comienza siendo alumnoRegistrado empty
    const [alumnos,setAlumnos] = useState([])//alumnos empieza siendo arreglo vacío

    useEffect(() => {
        let alumnosInicial = JSON.parse(localStorage.getItem("alumnosRegistrados")); //alumnosInicial contiene al localStorage que es el listado de alumnos nulo
        setAlumnos(alumnosInicial) //alumnos contiene al localStorage
    },[])

    const handleEnviar = () => {
        console.log({alumno}) //Ahora se muestra en console el alumno registrado en formulario
        setAlumnos([...alumnos,alumno]) //Se le agregará al arreglo alumnos el ultimo alumno creado
        console.log({alumnos})
    }

    
    useEffect(() => {
        localStorage.setItem("alumnosRegistrados",JSON.stringify(alumnos)) //Para setear el localStorage con el arreglo alumnos
    },[alumnos])

    return (
        <>
            <div className={styles.div}>
                <h1 className={styles.h1}>Sistema de reserva de libros</h1>
                <h2 className={styles.h2}>Registro de usuario</h2>
            </div>
            <main className={styles.main}>
                <section className={styles.section1}>
                    <h3 className={styles.h31}>Datos Personales</h3>
                    <TextField  onChange={event => setAlumno({...alumno, Nombres: event.target.value})} className={styles.TextField1} type='text' label="Nombres" variant="outlined" color="secondary"></TextField>
                    <TextField  onChange={event => setAlumno({...alumno, Apellidos: event.target.value})} className={styles.TextField2} type='text' label="Apellidos" variant="outlined" color="secondary"></TextField>
                    <TextField  onChange={event => setAlumno({...alumno, TipoDocumento: event.target.value})} className={styles.TextField3} type='text' label="Tipo de Documento" variant="outlined" color="secondary"></TextField>
                    <TextField  onChange={event => setAlumno({...alumno, NroDocumento: event.target.value})} className={styles.TextField4} type='text' label="Nro de Documento" variant="outlined" color="secondary"></TextField>
                </section>
                <section className={styles.section2}>
                    <h3 className={styles.h32}>Datos de la cuenta</h3>
                    <TextField  onChange={event => setAlumno({...alumno, CorreoElectrónico: event.target.value})} className={styles.TextField5} type='text' label="Correo Electrónico" variant="outlined" color="secondary"></TextField>
                    <TextField  onChange={event => setAlumno({...alumno, Password: event.target.value})} className={styles.TextField6} type='password' label="Password" variant="outlined" color="secondary"></TextField>
                    <TextField className={styles.TextField7} type='password' label="Ingrese Password Nuevamente" variant="outlined" color="secondary"></TextField>
                    <button onClick={handleEnviar} className={styles.button}>Registrar</button>
                </section>            
            </main>          
        </>
    )
}
export default alumnoRegistro