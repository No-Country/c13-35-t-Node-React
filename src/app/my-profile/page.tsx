import React from 'react';

// Definimos una interfaz para las props del componente
interface PageProps {
    // Aquí puedes agregar las propiedades que esperas recibir. Por ejemplo:
    // title?: string;  // Una propiedad opcional de título
    // content: string;  // Una propiedad requerida de contenido

    title?: string;
    content: string;
}

const Page: React.FC<PageProps> = (props) => {
    return (
        <div>
            <h1>{props.title} hola</h1>
            <p>{props.content}</p>

        </div>
    );
}

export default Page;