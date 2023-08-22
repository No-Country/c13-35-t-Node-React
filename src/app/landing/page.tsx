import React from 'react';
import NavBar from "../components/navBar/navBar";

export default function Landing(): JSX.Element {
    return (
        <div className='w-full h-full m-auto text-color-text-black font-inriasans'>
            <section className='bg-banner py-[150px] bg-no-repeat bg-cover bg-center'>
                <div className='max-w-[1020px] m-auto' >
                    <h1 className='text-5xl text-center'>Lorem ipsum dolor, sit amet consectetur.</h1>
                    <p className='text-xl m-auto text-center max-w-2xl justify-center my-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur delenit.</p>
                    <div className='border-2 rounded-lg m-auto py-3 bg-[#CDCDCD] justify-around flex'>
                        <input type="text" placeholder='Ciudad' className='rounded-lg p-2 text-base h-12 w-[450px]' />
                        <input type="date" placeholder='Fecha' className=' rounded-lg p-2 text-base h-12 w-80' />
                        <input type="button" value="Buscar" className='bg-color-button hover:bg-color-button-hover color w-40 h-12 rounded-lg text-color-text-white font-bold text-base transition-all ease-in-out cursor-pointer' />
                    </div>
                </div>
            </section>
            <section className='bg-color-button'>
                Services
            </section>
            <section className='bg-red-800'>
                Clients
            </section>
            <section className='bg-blue-500'>
                Preguntas Frecuentes
            </section>
            <section className='bg-purple-600'>
                Search bar
            </section>
        </div>
    )
}
