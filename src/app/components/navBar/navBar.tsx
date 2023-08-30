import React from "react";
import Link from "next/link";

interface NavBarProps { }  // Define a props interface, even if it's empty for now

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <div className="flex justify-around items-center h-16">
            <div>
                <h1>LOGO</h1>
            </div>
            <div className="flex items-center gap-8">
                <div className="inline-flex items-start gap-12">
                    <Link href={"./"}>
                        <button className="text-black font-medium text-base font-inria">Inicio</button>
                    </Link>
                    <Link href="/about-us">
                        <button className="text-black font-medium text-base font-inria">Nosotros</button>
                    </Link>
                    <Link href="/contact">
                        <button className="text-black font-medium text-base font-inria">Contacto</button>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Link href="/log-in">
                        <button className="text-white font-inria text-base font-medium bg-opacity-75 bg-[#576702] rounded px-8 py-1 border border-opacity-0 border-[#576702] hover:bg-[#3f4a05] transition-colors duration-300 border:transparent" >Ingreso</button>
                    </Link>
                    <Link href="/register">
                        <button className="text-[#576702] bg-transparent border border-opacity-75 border-[#576702] font-inria text-base font-medium rounded px-8 py-1 hover:bg-[#576702] hover:text-white transition-colors duration-300">Registro</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;