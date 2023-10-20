import styles from './index.module.css'
import Link from 'next/link'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const paginaPrincipal = () => {
    return (
        <>
        <main className={styles.main}>
            <section className={styles.section}>
                <Link className={styles.Link1} href="/paginaPrincipalAlumno">Inicio</Link>
                <Link className={styles.Link2} href="/perfil">Perfil</Link>
                <Link className={styles.Link3} href="/bibliotecas">Bibliotecas</Link>
                <p className={styles.p}>Biblio v1.0.1-alpha</p>
            </section>
            <section className={styles.section1}>
                <h1 className={styles.h1}>Bienvenido, Juan!</h1>
                <hr className={styles.hr}/>
                <article className={styles.article1}>
                    <h2 className={styles.h2}>Ultimas reservas</h2>
                    <Box className={styles.box}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: 500,
                            height: 128,
                            },
                        }}
                        >
                        <Paper />
                        <Paper />
                    </Box>
                </article>
                <article className={styles.article2}>
                    <h2 className={styles.h2}>Los más pedidos</h2>
                    <Box className={styles.box}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: 500,
                            height: 128,
                            },
                        }}
                        >
                        <Paper />
                        <Paper />
                    </Box>
                </article>
            </section>
        </main>        
        </>
    )
}
export default paginaPrincipal