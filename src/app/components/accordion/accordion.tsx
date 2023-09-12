"use client";
import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

interface accordionProps {
    title: string;
    content: string;
}
const Accordion: React.FC<accordionProps> = (props) => {
    {
        const [isShowing, setIsShowing] = useState(false);

        const toggle = () => {
            setIsShowing(!isShowing);
        };

        return (
            <div className="my-10">
                <button
                    onClick={toggle}
                    type="button"
                    className="border-b-2 border-color-text-black w-full flex justify-between items-center"
                >
                    <p className="text-left text-xl font-bold my-5">
                        {props.title}
                    </p>
                    <div className="text-color-button-hover text-3xl flex items-center">
                        <span className="mr-2">
                            {isShowing ? <FaAngleUp /> : <FaAngleDown />}
                        </span>
                    </div>
                </button>

                <div
                    className="text-base text-left my-5"
                    style={{
                        display: isShowing ? "block" : "none",
                    }}
                    dangerouslySetInnerHTML={{
                        __html: props.content,
                    }}
                />
            </div>
        );
    }
};

export default Accordion;
