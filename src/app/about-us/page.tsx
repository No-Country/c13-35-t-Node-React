import React from 'react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

function AboutPage() {
  return (
    <>
      <section
        className="flex justify-center items-center bg-cover bg-center h-80 w-full font-inriasans"
        style={{ backgroundImage: 'url(../../assets/cancha1.jpg)' }}
      >
        <h3 className="text-5xl font-semibold" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }}>
          ACERCA DE
        </h3>
      </section>
      <section className="text-center bg-white text-black px-20 h-80 font-inriasans">
        <div className="mx-auto w-1/3">
          <div className="flex justify-between py-4">
            <Link href="#ourproduct">
              <h2>NUESTRO PRODUCTO</h2>
            </Link>{' '}
            <Link href="#aboutus">
              <h2>NOSOTROS</h2>
            </Link>
          </div>
        </div>

        <div className="h-0.5 w-90 bg-gradient-to-r from-transparent via-black to-transparent mx-auto"></div>

        <div className="mt-8 mb-10 flex flex-col gap-5">
          <h4 className="mt-10">NUESTRO PRODUCTO</h4>
          <h2 className="text-5xl">Reserva en línea</h2>
          <p className="text-gray-500 text-lg">Reserva de Canchas de Fútbol en Línea: ¡Tu Solución para Disfrutar del Deporte!</p>
        </div>
      </section>
      <section id="ourproduct" className="bg-white text-black h-screen font-inriasans">
        <div className="flex">
          <div className="w-1/2">
            <img src="../../assets/cancha2.jpg" alt="cancha2" className="object-cover bg-center h-screen" />
          </div>
          <div className="pl-10 pr-28 flex flex-col gap-20 w-1/2 justify-center text-lg">
            <div>
              <h4 className="font-semibold">CANCHAS PREMIUM</h4>
              <p className="text-gray-500 text-justify">
                Reserva nuestras canchas premium y disfruta de una experiencia de juego excepcional. Nuestras canchas están equipadas con césped de alta calidad y son ideales para partidos emocionantes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">SERVICIO DE RESERVA RÁPIDA</h4>
              <p className="text-gray-500 text-justify">
                Con nuestro servicio de reserva rápida, puedes reservar una cancha en cuestión de segundos. Simplemente elige tu ubicación, fecha y hora, ¡y estarás listo para jugar!
              </p>
            </div>
            <div>
              <h4 className="font-semibold">PROGRAMA DE MEMBRESÍA</h4>
              <p className="text-gray-500 text-justify">
                Únete a nuestro programa de membresía y obtén acceso exclusivo a descuentos, eventos especiales y horarios de reserva preferenciales. ¡Es la forma perfecta de aprovechar al máximo tu pasión por el fútbol!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-black pt-10 pb-20 font-inriasans" id="aboutus">
        <div className=" mb-10 flex flex-col gap-5 text-center">
          <h4 className="mt-10">NOSOTROS</h4>
          <h2 className="text-5xl">Nuestro Equipo</h2>
          <p className="text-gray-500 text-lg w-3/4 mx-auto">
            Golbooking es un producto creado por un equipo de desarrolladores apasionados por el fútbol. Estamos comprometidos a hacer que sea más fácil para las personas reservar canchas de fútbol online.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">            
            <div className="flex w-2/3">
              <div className="w-1/2 flex justify-center">                                
                <img src="../../assets/eynar.jpg" alt="eynar"  className="h-80 w-80 rounded-full border border-blue-800"/>
              </div>
              <div className="flex flex-col justify-center w-1/2">
                <div className="flex justify-between">
                  <div>
                    <h6>BACKEND DEV</h6>
                    <h5 className="font-bold">EYNAR ÁLVAREZ</h5>
                  </div>
                  <div className="flex gap-3 items-center text-xl">
                  <Link href="https://www.linkedin.com/in/eynaralvarez/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
                  <Link href="https://github.com/Eynar92" target='_blank' rel="noreferrer"><BsGithub /></Link>

                  </div>

                </div>           
                <p className="text-justify mt-2">Desarrollador Fullstack con afinidad al frontend, siempre dispuesto a encarar nuevos retos.</p>
              </div>
            </div>
            <div className="flex w-2/3">
              
              <div className="flex flex-col justify-center text-right w-1/2">
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center text-xl">
                      <Link href="https://www.linkedin.com/in/marcos-aravena/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
                      <Link href="https://github.com/msaravena" target='_blank' rel="noreferrer"><BsGithub /></Link>

                    </div>
                    <div>
                      <h6>FRONTEND DEV</h6>
                      <h5 className="font-bold">MARCOS ARAVENA</h5>
                    </div>

                </div>               
                <p className="text-justify mt-2">Soy un profesional del desarrollo web con experiencia en HTML, CSS y React. Además, me siento cómodo trabajando con Tailwind CSS para crear interfaces atractivas y funcionales.</p>
              </div>
              <div className="w-1/2 flex justify-center">
                <img src="../../assets/marcos.jpg" alt="marcos"  className="h-80 w-80 rounded-full border border-blue-800"/>
              </div>
            </div>
            <div className="flex w-2/3">
              <div className="w-1/2 flex justify-center">
                <img src="../../assets/sergio.jpg" alt="sergio"  className="h-80 w-80 rounded-full border border-blue-800"/>
              </div>
              <div className="flex flex-col justify-center w-1/2">
                <div className="flex justify-between">
                    <div>
                        <h6>FRONTEND DEV</h6>
                        <h5 className="font-bold">SERGIO BELEÑO</h5>
                    </div>
                    <div className="flex gap-3 items-center text-xl">
                        <Link href="https://www.linkedin.com/in/sergio-bele%C3%B1o/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
                        <Link href="https://github.com/SABHGG" target='_blank' rel="noreferrer"><BsGithub /></Link>
                    </div>             
                </div>
                
                <p className="text-justify mt-2">Estudiante de ingeniería de sistemas / Programador junior enfocado en desarrollo frontend/ Html - Css - JavaScript - C# /React.js</p>
              </div>
            </div>
            <div className="flex w-2/3">
              
              <div className="flex flex-col justify-center text-right w-1/2">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3 text-xl">
                      <Link href="https://www.linkedin.com/in/giulianaborgo/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
                      <Link href="https://github.com/GiulianaBorgo" target='_blank' rel="noreferrer"><BsGithub /></Link>
                    </div>
                    <div>
                      <h6>FRONTEND DEV</h6>
                      <h5 className="font-bold">GIULIANA BORGO</h5>
                    </div>
                </div>                
                
                <p className="text-justify mt-2">Desarrolladora Full Stack (React.js, Javascript, Java, HTML, CSS, SQL).</p>
              </div>
              <div className="w-1/2 flex justify-center">
                <img src="../../assets/giuliana.jpg" alt="giuliana"  className="h-80 w-80 rounded-full border border-blue-800"/>
              </div>
            </div>
            <div className="flex w-2/3">
              <div className="w-1/2 flex justify-center">
                <img src="../../assets/fernanda.jpg" alt="fernanda"  className="h-80 w-80 rounded-full border border-blue-800"/>
              </div>
              <div className="flex flex-col justify-center w-1/2">
                <div className="flex justify-between">
                    <div>
                        <h6>FRONTEND DEV</h6>
                        <h5 className="font-bold">FERNANDA CALZOLARI</h5>
                    </div>                    
                    <div className="flex items-center gap-3 text-xl">
                        <Link href="https://www.linkedin.com/in/mariafernandacalzolari/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
                        <Link href="https://github.com/fercalzo" target='_blank' rel="noreferrer"><BsGithub /></Link>
                    </div>

                </div>
                
                <p className="text-justify mt-2">Soy desarrolladora frontend, con conocimientos de react js, tailwind css, bootstrap.</p>
              </div>
            </div>
            <div className="flex w-2/3">              
              <div className="flex flex-col justify-center text-right w-1/2">
                <div className="flex justify-between">
                <div className="flex text-xl gap-3 items-center">
                  <Link href="https://www.linkedin.com/in/marcos-aravena/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
                  <Link href="https://github.com/msaravena" target='_blank' rel="noreferrer"><BsGithub /></Link>
                </div>
                <div>
                  <h6>FRONTEND DEV</h6>
                  <h5 className="font-bold">IAIR KAPLUN</h5>
                </div>

                </div>
                
                <p className="text-justify mt-2">Lorem ipsum dolor sit amet  consectetur adipisicing elit consectetur adipisicing eli. Eligendi ducimus perferendis assumenda eos numquam porro culpa nisi odio</p>
              </div>
              <div className="w-1/2 flex justify-center">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="iair"  className="h-80 w-80 rounded-full border border-blue-800"/>
              </div>
            </div>
            <div className="flex w-2/3">
              <div className="w-1/2 flex justify-center">
                <img src="../../assets/david.jpg" alt="david"  className="h-80 w-80 rounded-full border border-blue-800"/>
              </div>
              <div className="flex flex-col justify-center w-1/2">
                <div className="flex justify-between">
                    <div>
                      <h6>BACKEND DEV</h6>
                      <h5 className="font-bold">DAVID PÉREZ</h5>
                    </div>                
                    <div className="flex gap-3 items-center text-xl">
                      <Link href="https://www.linkedin.com/in/david-perez-cruz/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
                      <Link href="https://github.com/davidperez95" target='_blank' rel="noreferrer"><BsGithub /></Link>
                    </div>

                </div>
                
                <p className="text-justify mt-2">FullStack Developer, creador, curioso, eterno aprendiz y apasionado por la tecnología. Mi stack es NodeJs, Django, React y MySQL.</p>
              </div>
            </div>
            <div className="flex w-2/3">
              
              <div className="flex flex-col justify-center text-right w-1/2">
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center text-xl">
                      <Link href="https://www.linkedin.com/in/cintiaredondas/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
                      <Link href="https://github.com/ceredondas" target='_blank' rel="noreferrer"><BsGithub /></Link>
                    </div>
                    <div>
                      <h6>UX/UI & TESTER</h6>
                      <h5 className="font-bold">CINTIA REDONDAS</h5>
                    </div>                
                </div>
                
                <p className="text-justify mt-2">Desarrolladora full stack. Experiencia en diseño de wireframes y maquetación de sitios web y aplicaciones móviles. QA tester. Testing de caja negra manual y automatizado de funcionalidades y bases de datos.</p>
              </div>
              <div className="w-1/2 flex justify-center">
                <img src="../../assets/cintia.jpg" alt="cintia"  className="h-80 w-80 rounded-full border border-blue-800"/>
              </div>
            </div>
            <div className="flex w-2/3">
              <div className="w-1/2 flex justify-center">
                <img src="../../assets/tatiana.jpg" alt="tatiana"  className="h-80 w-80 rounded-full border border-blue-800"/>
              </div>
              <div className="flex flex-col justify-center w-1/2">
                <div className="flex justify-between">
                    <div>
                      <h6>FRONTEND DEV</h6>
                      <h5 className="font-bold">TATIANA SÁNCHEZ</h5>
                    </div>                
                    <div className="flex gap-3 items-center text-xl">
                      <Link href="https://www.linkedin.com/in/tatiana-sanchez-sanin/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
                      <Link href="https://github.com/TatianaSanchez01" target='_blank' rel="noreferrer"><BsGithub /></Link>
                    </div>
                </div>              
                <p className="text-justify mt-2">Desarrolladora frontend y Project Manager/Scrum Master, apoyo en el diseño UI/UX. Comprometida con la excelencia en cada proyecto.</p>
              </div>
            </div>
            <div className="flex w-2/3">
              
              <div className="flex flex-col justify-center text-right w-1/2">
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center text-xl">
                      <Link href="https://www.linkedin.com/in/franco-tejada-427ab2250/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
                      <Link href="https://github.com/FrancoNos" target='_blank' rel="noreferrer"><BsGithub /></Link>
                    </div>
                    <div>
                      <h6>FRONTEND DEV</h6>
                      <h5 className="font-bold">FRANCO TEJEDA</h5>
                    </div>              
                </div>                
                <p className="text-justify mt-2">Me dedico principalmente a la programación frontend, aunque siempre estoy dispuesto a ayudar a todos en diferentes áreas.</p>
              </div>
              <div className="w-1/2 flex justify-center">
                <img src="../../assets/franco.jpg" alt="franco"  className="h-80 w-80 rounded-full border border-blue-800"/>
              </div>
            </div>
          </div>

        </section>
    </>
  );
}

export default AboutPage;