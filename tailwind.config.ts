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
                banner: "url('https://images.pexels.com/photos/1378425/pexels-photo-1378425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                usercomments:
                    "url(https://images.unsplash.com/photo-1565308674684-1d8c0b4433d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)",
                search: "url('https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            },
            colors: {
                "color-bg": "#FFFFFF",
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
