import React from "react";

function Confirmation(): JSX.Element {
    return (
        <div className="z-0 rounded-full h-[1202px] w-auto bg-color-form-bg flex justify-center m-auto mt-[-200px]">
            <div className="mt-96">
                <h1 className="font-inriasans text-color-text-black font-bold text-5xl text-center">
                    ¡Tu reserva ha sido confirmada!
                </h1>
                <h3 className="font-inriasans text-color-text-black text-2xl text-center mt-4">
                    Nos vemos en la cancha
                </h3>
            </div>
        </div>
    );
}

export default Confirmation;
