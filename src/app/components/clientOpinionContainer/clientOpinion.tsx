import React from "react";
import Image from "next/image";

interface ClientOpinionProps {
    name: string;
    profilePictureSrc: string;
    comment: string;
 } 

const ClientOpinion: React.FC<ClientOpinionProps> = (props) => {
    return(
        <div className="w-[330px] border-2 h-96 border-color-button p-7 text-color-text-black font-inriasans align-bottom">
            <p className="text-justify "><q>{props.comment}</q></p>
            <div>
                <Image src={props.profilePictureSrc} alt="This is an image of the client" width={67} height={67} className='rounded-full bg-black my-5'></Image>
            </div>
            <h3 className="text-left my-5">{props.name}</h3>
        </div>
    )
}

export default ClientOpinion;