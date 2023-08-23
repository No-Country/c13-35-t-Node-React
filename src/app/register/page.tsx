import React from "react";
import styles from "./register.module.css"
import Image from "next/image";

interface RegisterProps { }

const Register: React.FC<RegisterProps> = (props) => {
  return (
    <div className={styles.contenedorPrincipal}>
      <div className={styles.contenedorIzquierda}>
        <div className={styles.contenedorTitle}>
          <h2 className={styles.title}>REGISTRATE</h2>
        </div>
        <div className={styles.contenedorPelotitas}>
          <div
            className={
              styles.contenedorPelotitas2
            } /* "flex justify-around items-center " */
          >
            <div className={styles.textInformation}>
              <span className={styles.textNumeration1}>1</span>
              <span className={styles.informationModal}>Información</span>
            </div>

            <div className={styles.pelotitaBlanca}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div className={styles.pelotitaBlanca}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div className={styles.pelotitaBlanca}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div className={styles.pelotitaBlanca}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div className={styles.pelotitaBlanca}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div className={styles.pelotitaBlanca}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#F3F5F7" />
              </svg>
            </div>

            <div className={styles.pelotitaVerde}>
              <div className={styles.textInformation}>
                <span className={styles.textNumeration2}>2</span>
                <span className={styles.informationModal}>Perfil</span>
              </div>
            </div>
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <label htmlFor="nombreYapellido" className={styles.label}>
              Nombre y Apellido *
            </label>
            <input id="nombreYapellido" type="text" className={styles.input} />

            <Image
              src={
                "./4092564-about-mobile-ui-profile-ui-user-website_114033.svg"
              }
              alt="iconoUsuario"
              className={styles.iconUser}
              width={20}
              height={20}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">
              Email *
            </label>
            <input id="email" type="email" className={styles.input} />

            <Image
              src={"./arroba_icon-icons.com_64607.svg"}
              alt="iconoCorreo"
              className={styles.iconUser}
              width={20}
              height={20}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="teléfono">
              Teléfono *
            </label>
            <input id="telefono" type="number" className={styles.input} />

            <Image
              src={"./phone_handset_icon_125195.svg"}
              alt="iconoCorreo"
              className={styles.iconUser}
              width={20}
              height={20}
            />
          </div>
        </form>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <div className={styles.botonContenido}>
              <div>Siguiente</div> &gt;
            </div>
          </button>
        </div>
        <div className={styles.containerDeAbajo}>
          <div className={styles.linea}></div>
          <div>
            <Image
              src={"./emojione-monotone_soccer-ball.svg"}
              width={20}
              height={20}
              className={styles.pelota}
            />
          </div>
          <div className={styles.linea}></div>
        </div>


      <div className={styles.buttonContainer2}>
        <button className={styles.btnGoogle}>
          <div className={styles.botonContenido2}>
            <Image
              src={"./flat-color-icons_google.svg"}
              width={30}
              height={30}
              className={styles.google}
            />
            <div>Continuar con Google</div>
          </div>
          </button>
          <div className={styles.contenedorParrafo}>
            <p className={styles.parrafoFinal}> ¿Ya tienes una cuenta?
              <span className={styles.spanFinal}>
               Inicia sesión
              </span>
            </p>
          </div>

      </div>

      <div className={styles.contenedorDerecha}></div>
      </div>
      </div>
  );
};

export default Register;


