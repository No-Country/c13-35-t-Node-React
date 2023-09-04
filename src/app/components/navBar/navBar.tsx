import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavBarProps {} // Define a props interface, even if it's empty for now

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <div className="flex justify-around items-center h-16 bg-transparent bg-opacity-25 font-inriasans">
            <div>
                <Link href={"./"}>
                    <Image
                        src="/assets/logo2.png"
                        height={39}
                        width={98}
                        alt="GolBooking logo"
                    ></Image>
                </Link>
            </div>
            <div className="flex items-center gap-8">
                <div className="inline-flex items-start gap-12 text-black text-lg font-bold">
                    <Link href={"./"}>
                        <button className="uppercase hover:underline hover:text-color-button transition-colors duration-300 hover:underline-offset-8">
                            Inicio
                        </button>
                    </Link>
                    <Link href="/about-us">
                        <button className="uppercase hover:underline hover:text-color-button transition-colors duration-300 hover:underline-offset-8">
                            Nosotros
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="uppercase hover:underline hover:text-color-button transition-colors duration-300 hover:underline-offset-8">
                            Contacto
                        </button>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Link href="/log-in">
                        <button className="text-white text-xl bg-opacity-75 bg-color-button rounded px-8 py-1 border border-opacity-0 border-color-button hover:bg-color-button-hover  border:transparent uppercase">
                            Ingreso
                        </button>
                    </Link>
                    <Link href="/register">
                        <button className="text-color-button bg-white border border-opacity-75  rounded px-8 py-1 border-color-button hover:bg-color-button-hover hover:text-white transition-colors duration-300 uppercase text-lg">
                            Registro
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
