import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
 import { BsGithub } from "react-icons/bs";
 import { IoLogoLinkedin } from "react-icons/io";
 import { FaFacebook } from "react-icons/fa6";

export const Footer = () => {
  return (
    <main className='w-full h-full md:h-[400px] bg-white flex justify-center items-start mt-20 pb-10'>
        <div className='w-[80%] flex flex-col justify-center items-center mt-20 pt-1'>
            {/* top*/}
            <div className='flex flex-col justify-center items-center'>
                <div className='bg-gray-200 w-[120px] h-10 flex justify-center items-center text-xl rounded-xl text-gray-500 mt-2'>Get in touch</div>
                <p className='mt-3 text-center text-xs'>What next? Feel free to reach out to me if you are looking for developer,have a query or simply want to connect. </p>
            </div>
              <div className='mt-4 space-y-4'>
                <h1 className='flex md:text-3xl justify-center items-center font-bold'> <CiMail className='mr-3 md:text-4xl'/> Areebashahid107@gmail.com <FaRegCopy className='ml-3 cursor-pointer' /></h1>
                <h2 className='flex md:text-3xl justify-center items-center'> < FaPhoneAlt className='mr-3 md:text-4xl' /> 0313-00000000 <FaRegCopy className='ml-3 cursor-pointer' /></h2>
              </div>
              <div>
                <p className='mt-2'>You may also find me in this platform</p>
                {/* social icon*/}
                <div className='flex justify-evenly mt-2'>
                < BsGithub className='text-2xl'/>
                <IoLogoLinkedin className='text-2xl text-blue-500' />
                <FaFacebook className='text-2xl text-blue-500' />
                </div>
              </div>
             

        </div>
    </main>
  )
}
export default Footer;
