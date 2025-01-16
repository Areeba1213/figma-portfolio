import React from 'react'
import Image from 'next/image';
import { Dot, Github, Instagram, Linkedin, MapPinCheckInside } from 'lucide-react';
import Link from 'next/link';
export const Hero = () => {
  return (
    <main className='w-full h-full md:h-[400px] flex justify-center items-center bg-white'>
        <div className='flex w-full md:w-[80%] h-full flex-col md:flex-row justify-between items-start pt-6'>
            {/*left */}
            <div className='w-full md:[40%] flex justify-center items-center'>
          <Image src={"/hero.jpg"}
            width={100}
             height={100}
              alt='hero'
              className='w-[300px] h-[300px]'>

            </Image>
            </div>
            {/*right */}
            <div className='w-full p-5 md:w-[60%] space-y-5'>
            <h1 className='text-3xl'>Hy I am Areeba Shahid </h1>
             <p>a passionate web developer currently in the learning phase. I thrive on creating meaningful user experiences and constantly seek opportunities to grow and improve. With a strong determination to learn and an eye for detail I am dedicated to mastering modern web technologies and building projects that make a difference"</p>
              <div>
                <p className='flex'><MapPinCheckInside />Karachi, Pakistan</p>
                <p className='flex'><Dot className='text-green-500'/>Available for new Project</p>
              </div>
              <div className='flex space-x-3'>
               <Link href={"https://github.com/Areeba1213"}> <Github className='text-gray-800'/></Link>
               <Link href={"https://www.linkedin.com/in/areeba-shahid-0834b5329/"}><Linkedin className='text-blue-500'/></Link>
               <Link href={"https://github.com/Areeba1213"}><Instagram className='text-pink-500'/></Link>
              </div>
            </div>

        </div>
    </main>
  )
}
export default Hero;
