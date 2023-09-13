import React from "react";
import Image from "next/image";

function Confirmation(): JSX.Element {
    return (
        <div className="flex flex-row overflow-hidden">
            <div className="w-[600px] h-full bg-white my-auto">
                <h2 className="font-bold text-5xl text-center block">
                    ¡Tu reserva ha sido confirmada!
                </h2>
                <h4 className="text-3xl text-center block mt-10">Nos vemos en la cancha</h4>
            </div>
            <div className="flex-grow ">
                <Image
                    src="https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    width={845}
                    height={1024}
                    alt="Soccer ball hitting the goal net"
                    className="w-full h-full object-cover object-center"
                ></Image>
            </div>
        </div>
    );
}

export default Confirmation;
