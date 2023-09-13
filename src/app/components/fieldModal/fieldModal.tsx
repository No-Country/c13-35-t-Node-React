"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PiSoccerBallDuotone, PiSoccerBallFill } from "react-icons/pi";
import FieldCarousel from "../carousel/carousel";
import { GrFormClose } from "react-icons/gr";
interface FieldModalProps {
    onClose: () => void; // Add a prop to handle modal closure
}

const FieldModal: React.FC<FieldModalProps> = ({ onClose }) => {
    const carousel = [
        {
            id: 1,
            imageUrl: "/assets/services/service1.jpg",
        },
        {
            id: 2,
            imageUrl: "/assets/services/service2.jpg",
        },
        {
            id: 3,
            imageUrl: "/assets/services/service3.jpg",
        },
    ];
    // Array of data for soccer icons
    const soccerIcons = Array(5).fill(null);

    return (
        <div className="relative bg-color-text-white text-color-text-black font-inriasans max-w-4xl max-h-96 border-0 rounded-md">
            <GrFormClose
                className="text-3xl cursor-pointer absolute top-2 right-2"
                onClick={onClose}
            />
            <div className="grid grid-cols-2">
                <div className="">
                    <FieldCarousel images={carousel} />
                </div>
                <div className="text-left align-middle p-10">
                    <div className="mb-10 flex">
                        {soccerIcons.map((_, index) => (
                            <PiSoccerBallDuotone
                                key={index}
                                className="text-2xl"
                            />
                        ))}
                    </div>
                    <h3 className="text-3xl font-bold">
                        {/* Insertar titulo de la cancha */}
                    </h3>
                    <p className="text-lg my-5 opacity-80 flex-wrap">
                        {/* Insertar descripcion */}
                    </p>
                    <p className="mt-10">
                        <span className="text-4xl font-bold">
                            {/* Insertar costo */}
                        </span>{" "}
                        <span className="text-base opacity-60">(por hora)</span>
                    </p>
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={onClose}
                            className="text-white font-inriasans text-base font-medium bg-opacity-75 bg-color-button rounded px-8 py-1 border border-opacity-0 border-color-button hover:bg-color-button-hover transition-colors duration-300 w-80"
                        >
                            RESERVAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FieldModal;
