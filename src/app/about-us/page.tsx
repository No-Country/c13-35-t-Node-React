import React from 'react';

// Definimos una interfaz para las props del componente
interface PageProps {
    // Aquí puedes agregar las propiedades que esperas recibir. Por ejemplo:
    // title?: string;  // Una propiedad opcional de título
    // content: string;  // Una propiedad requerida de contenido

    title?: string;
    content: string;
}

const Page: React.FC<PageProps> = ({ title, content }) => {
    return (
        <div>
            <h1>{title} hola soy el about us </h1>
            <p>{content}</p>
        </div>
    );
}
export default Page;