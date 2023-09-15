import React from "react";
import Image, { StaticImageData } from "next/image";

interface ClientOpinionProps {
    name: string;
    profilePictureSrc: string;
    comment: string;
}

const ClientOpinion: React.FC<ClientOpinionProps> = (props) => {
    return (
        <div className="w-[330px] border-2 h-96 bg-white border-color-button p-7 text-color-text-black font-inriasans flex flex-col justify-end">
            <p className="text-left flex-grow leading-8">
                <q>{props.comment}</q>
            </p>
            <div className="rounded-full bg-black my-3 h-[67px] w-[67px] overflow-hidden">
                {props.profilePictureSrc && (
                    <Image
                        src={props.profilePictureSrc}
                        alt="This is an image of the client"
                        width={67}
                        height={67}
                        className="bg-contain bg-center"
                    ></Image>
                )}
            </div>
            <h3 className="text-left font-bold">{props.name}</h3>
        </div>
    );
};

export default ClientOpinion;
