import React from "react";
import Link from "next/link";
import styles from "./navBar.module.css";

interface NavBarProps { }  // Define a props interface, even if it's empty for now

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <div className={styles.generalContainer}>
            <div className={styles.logoContainer}>
                <h1>LOGO</h1>
            </div>
            <div className={styles.botonContainer}>
                <div className={styles.botonContainerFijos}>
                    <Link href={"./"}>
                        <button className={styles.botonFijo}>Inicio</button>
                    </Link>
                    <Link href="/about-us">
                        <button className={styles.botonFijo}>Nosotros</button>
                    </Link>
                    <Link href="/contact">
                        <button className={styles.botonFijo}>Contacto</button>
                    </Link>
                </div>
                <div className={styles.botonContainerCambiables}>
                    <Link href="/log-in">
                        <button className={styles.botonCambianteA}>Ingreso</button>
                    </Link>
                    <Link href="/log-in">
                        <button className={styles.botonCambianteB}>Registro</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;