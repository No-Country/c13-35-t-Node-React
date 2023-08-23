"use client";
import React, {useState} from 'react';
import Image from 'next/image';
import ClientOpinion from '../components/clientOpinionContainer/clientOpinion';

function Landing(): JSX.Element {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const handleAccordionToggle = (index: number) => {
        setActiveAccordion(prevActive => (prevActive === index ? null : index));
    };

    const faqData = [
        {
            question: 'What is the first item?',
            answer: 'This is the first item\'s answer.'
        },
        {
            question: 'What is the second item?',
            answer: 'This is the second item\'s answer.'
        },
        {
            question: 'What is the third item?',
            answer: 'This is the third item\'s answer.'
        },
    ];
    
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
            <section className='bg-color-bg py-36 max-w-[1020px] m-auto'>
                <div className='flex justify-around'>
                    <div className='w-[450px]'>
                        <h3 className='text-xl m-5 font-bold text-left'>Feature that is amazing</h3>
                        <p className='text-xl text-clip m-5 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul className='list-disc m-5'>
                            <li className='text-xl m-2'>Benefit of Feature</li>
                            <li className='text-xl m-2'>Benefit of Feature</li>
                            <li className='text-xl m-2'>Benefit of Feature</li>
                        </ul>
                    </div>
                    <div className='w-[450px]'>
                        <Image src="/services.jpg" alt="This is an image of the service" width={480} height={330} className='bg-red-500'/>
                    </div>
                </div>
                <div className='flex justify-around my-36'>
                    <div className='w-[450px]'>
                        <Image src="/services.jpg" alt="This is an image of the service" width={480} height={330} className='bg-red-500'/>
                    </div>
                    <div className='w-[450px]'>
                        <h3 className='text-xl m-5 font-bold text-left'>Feature that is amazing</h3>
                        <p className='text-xl text-clip m-5 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul className='list-disc m-5'>
                            <li className='text-xl m-2'>Benefit of Feature</li>
                            <li className='text-xl m-2'>Benefit of Feature</li>
                            <li className='text-xl m-2'>Benefit of Feature</li>
                        </ul>
                    </div>
                    
                </div>
                <div className='flex justify-around '>
                    <div className='w-[450px]'>
                        <h3 className='text-xl m- font-bold text-left'>Feature that is amazing</h3>
                        <p className='text-xl text-clip my-5 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul className='list-disc my-5'>
                            <li className='text-xl m-2'>Benefit of Feature</li>
                            <li className='text-xl m-2'>Benefit of Feature</li>
                            <li className='text-xl m-2'>Benefit of Feature</li>
                        </ul>
                    </div>
                    <div className='w-[450px]'>
                        <Image src="/services.jpg" alt="This is an image of the service" width={480} height={330} className='bg-red-500'/>
                    </div>
                </div>
                
            </section>
            <section className='py-28 bg-color-bg border-color-text-black border-2'>
                <div className='max-w-[1020px] m-auto flex justify-between'>
                    <ClientOpinion name='Florence Abbott' profilePictureSrc='' comment='string appearance solution social whistle dollar sweet gold key military excellent spoken problem live easily characteristic important thirty chicken very steady but free race'/>
                    <ClientOpinion name='May Sanders' profilePictureSrc='' comment='bear dead idea planet mouth price possible this on told active someone alphabet pole straight aware adult stop tears definition born farther right bring' />
                    <ClientOpinion name='Lucas Kelly' profilePictureSrc='' comment='alike sometime tomorrow struck light this barn speak who corn sure zoo three some animal higher jet butter fewer across hay am came size' />
                </div>
            </section>
            <section className='py-28 bg-color-bg border-color-text-black border-2'>
                <div className='max-w-[1020px] m-auto flex justify-between'>
                    <h2 className='text-4xl font-bold'>FAQs</h2>
                    <div>
                    <div className="accordion" id="accordionExample">
                        {faqData.map((item, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id={`heading${index}`}>
                                    <button
                                        className={`accordion-button ${activeAccordion === index ? '' : 'collapsed'}`}
                                        type="button"
                                        onClick={() => handleAccordionToggle(index)}
                                    >
                                        {item.question}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse ${index}`}
                                    className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                                    aria-labelledby={`heading ${index}`}
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </section>
            <section className='bg-purple-600'>
                Search bar
            </section>
        </div>
    )
}


