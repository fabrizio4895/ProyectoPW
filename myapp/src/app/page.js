'use client'
import styles from './page.module.css'
import Link from 'next/link'
import * as React from 'react';
import { useEffect } from 'react';

export default function Home() {

  const listadoDeAlumnosRegistrados = [
    {
      Nombres:"",
      Apellidos:"",
      TipoDocumento:"",
      NroDocumento:"",
      CorreoElectrónico:"",
      Password:""
    }
  ]

  useEffect (() => {
    let alumnos = localStorage.getItem("alumnos")
    if(!alumnos)
    window.localStorage.setItem("alumnosRegistrados",JSON.stringify(listadoDeAlumnosRegistrados));
  },[])
  

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
