"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PiSoccerBallDuotone, PiSoccerBallFill } from "react-icons/pi";
import FieldCarousel from "../carousel/carousel";

interface FieldModalProps {}

const FieldModal: React.FC<FieldModalProps> = (props) => {
    const [iconStates, setIconStates] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);

    const handleIconClick = (index: number) => {
        const newIconStates = iconStates.map((_, i) => i <= index);
        setIconStates(newIconStates);
    };

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

    return (
        <div className=" bg-color-text-white text-color-text-black font-inriasans max-w-4xl  max-h-96 border-0 rounded-md grid grid-cols-2">
            <div className="">
                <FieldCarousel images={carousel} />
            </div>
            <div className="text-left align-middle p-10">
                <div className="mb-10 flex">
                    {iconStates.map((isIconFilled, index) => (
                        <span
                            key={index}
                            onClick={() => handleIconClick(index)}
                            className="text-2xl"
                        >
                            {isIconFilled ? (
                                <PiSoccerBallFill />
                            ) : (
                                <PiSoccerBallDuotone />
                            )}
                        </span>
                    ))}
                </div>
                <h3 className="text-3xl font-bold">Complejo</h3>
                <p className="text-lg my-5 opacity-80 flex-wrap">
                    Descripción completa .................................
                    ..........................................................................................................
                </p>
                <p className="mt-10">
                    <span className="text-4xl font-bold">$00.00</span>{" "}
                    <span className="text-base opacity-60">(por hora)</span>
                </p>
                <Link href={""} className="flex justify-center">
                    <button className="text-white font-inriasans text-base font-medium bg-opacity-75 bg-color-button rounded px-8 py-1 border border-opacity-0 border-color-button hover:bg-color-button-hover transition-colors duration-300 my-6 w-80">
                        RESERVAR
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FieldModal;
