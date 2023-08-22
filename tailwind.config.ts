import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                banner: "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MjE3MTU3Ni13aWtpbWVkaWEtaW1hZ2Uta293Z3dtNGYuanBn.jpg')",
            },
            colors: {
                "color-bg": "#09595A",
                "color-button": "#576702",
                "color-button-hover": "#3F4A05",
                "color-text-black": "#191414",
                "color-text-white": "#FFFFFF",
                "color-form-bg": "rgba(87, 103, 2, 0.35)",
            },
            fontFamily: {
                inriasans: ["Inria Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
    safelist: [
        "color-bg",
        "color-button",
        "color-button-hover",
        "color-text-black",
        "color-text-white",
        "color-form-bg",
    ],
};
export default config;
