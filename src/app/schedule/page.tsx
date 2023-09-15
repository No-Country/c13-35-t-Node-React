"use client";
"use client";
// pages/Schedule.js// pages/Schedule.js
import { useState } from "react";
import Link from "next/link";

export default function Schedule() {
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    // Datos estáticos
    const date: string = "17 de agosto";
    const times: string[] = [
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
        "15:00 - 16:00",
        "16:00 - 17:00",
        "17:00 - 18:00",
        "18:00 - 19:00",
        "19:00 - 20:00",
        "20:00 - 21:00",
        "21:00 - 22:00",
    ];
    const unavailable: string[] = ["14:00 - 15:00", "20:00 - 21:00"];

    return (
        <div className="flex justify-center items-center min-h-screen relative">
            <div className="flex flex-col items-center py-5 px-10 bg-white w-2/5 rounded-lg">
                <h1 className="text-black text-4xl uppercase mb-4">
                    TURNOS DISPONIBLES
                </h1>
                <h2 className="text-black text-2xl mb-2">{date}</h2>
                <h3 className="text-black text-xl mb-4">Valor $500/hora</h3>

                <div className="grid grid-cols-3 gap-4 mb-4 w-full">
                    {times.map((time: string, index: number) => (
                        <button
                            key={index}
                            className={`relative border rounded-lg p-4 
                          ${
                              unavailable.includes(time)
                                  ? "bg-white text-color-button cursor-not-allowed"
                                  : "bg-color-button text-white hover:text-black hover:bg-gray-300"
                          }
                          ${
                              selectedTime === time
                                  ? "border-4 border-green-500"
                                  : "border-black"
                          }`}
                            disabled={unavailable.includes(time)}
                            onClick={() => setSelectedTime(time)}
                        >
                            {time}
                            {selectedTime === time && (
                                <div className=""></div>
                            )}
                        </button>
                    ))}
                </div>
                
                <div className="w-full mb-4">
                    <Link href="/search">
                        <button className="bg-white border-2 border-color-button text-color-button py-2 rounded-lg w-full">
                            VOLVER
                        </button>
                    </Link>
                </div>
                <div className="w-full mb-4">
                    <Link href="/pago">
                        <button className="bg-color-button text-color-text-white py-2 rounded-lg w-full hover:bg-color-button-hover ">
                            CONFIRMAR RESERVA
                        </button>
                    </Link>
                </div>
                
            </div>

            <div
                className="bg-cover bg-center w-full h-full absolute top-0 left-0"
                style={{
                    backgroundImage: "url(../../assets/horarios-fondo.jpg)",
                    zIndex: "-1",
                }}
            ></div>
        </div>
    );
}
