import React from 'react';
import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiFillFacebook } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoTiktok } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {
  return (
    <footer className='h-80 text-white p-5 w-full relative'>
      <div
        className='bg-cover bg-center w-full h-full absolute top-0 left-0'
        style={{
          backgroundImage: 'url(../../assets/footer-image.jpg)',
          opacity: '0.3',
          zIndex: '-1',
        }}
      ></div>

      <div className='container flex w-full'>
        <div className='mt-20'>
          <img src="../../assets/logo.jpg" alt="logo" className='h-28 ml-20'/>
        </div>
        <div className='flex gap-10 ml-40 mt-20'>
          <div>
            <p className='text-xl font-semibold'>SÍGUENOS</p>
            <div className='flex gap-6 text-3xl mt-4'>
              <Link href=""><FaYoutube /></Link>
              <Link href=""><FiInstagram /></Link>
              <Link href=""><AiFillFacebook /></Link>
              <Link href=""><BsTwitter /></Link>
              <Link href=""><BiLogoTiktok /></Link>
            </div>
          </div>
          <div className='flex flex-col ml-40'>
            <p className='text-xl font-semibold'>CONTÁCTANOS</p>
            <div className='flex gap-3 text-3xl flex-col'>
              <p className='flex gap-3 text-xl mt-4 items-center'><BsFillTelephoneFill /> <span>+541152799756 </span></p>
              <p className='flex gap-3 text-xl items-center'><AiOutlineMail /><span>servicio@golbooking.com</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
