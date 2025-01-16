import React from 'react'
import Image from 'next/image';
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from 'next/link';

export const work = () => {
    return (
        <main className='w-full h-full md:h-full bg-white flex justify-center items-start mb-12 '>
            <div className=' w-full md:w-[80%] flex flex-col justify-center items-center'>
                {/* top*/}
                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-xl rounded-xl text-gray-500 mt-2'>WORK</div>
                    <p className='mt-3 text-center text-xs'>The skills,tools and technologies I am really good at: </p>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center bg-white mt-10 p-10 rounded-xl shadow-lg'>
                    {/*left */}
                    <div className=' w-[100%] md:w-[70%] flex justify-center items-center '>
                        <Link href={"/"}>
                        <Image src={"/kp.jpg"}
                            width={400}
                            height={400}
                            alt='kp.jpg'
                             className='w-[400px] rounded-xl'></Image></Link>
                    </div>
                    {/*right */}
                    <div className='w-[100%] md:w-[70%] space-y-4 mt-4 md:mt-0'>
                        <h1 className='text-2xl font-bold'>E-COMMERCE WEBSITE</h1>
                        <p>A fast responsive e-commerce site built with Nextjs,Tailwind CSS featuring Typescript</p>
                        <div className='flex gap-x-3 flex-wrap'>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Nextjs</div>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Tailwind</div>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Typescript</div>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>HTML</div>    
                        </div>
                       <Link href={"/"}> <FaExternalLinkAlt className='mt-4' /></Link>
                    </div>


                   
                    
                </div>

                 {/* box 2*/}

                 <div className='flex flex-col md:flex-row justify-center items-center bg-white mt-10 p-10 rounded-xl shadow-lg'>
                    {/*left */}
                    <div className=' w-[100%] md:w-[70%] flex justify-center items-center '>
                        <Link href={"/"}>
                        <Image src={"/reesume.jpg"}
                            width={400}
                            height={400}
                            alt='reesume.jpg'
                             className='w-[400px] rounded-xl'></Image></Link>
                    </div>
                    {/*right */}
                    <div className='w-[100%] md:w-[70%] space-y-4 mt-4 md:mt-0'>
                        <h1 className='text-2xl font-bold'>RESUME BUILDER</h1>
                        <p>A fast responsive  resume builder with Nextjs,Tailwind CSS featuring Typescript</p>
                        <div className='flex gap-x-3 flex-wrap'>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Nextjs</div>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Tailwind</div>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Typescript</div>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>HTML</div>    
                        </div>
                       <Link href={"/"}> <FaExternalLinkAlt className='mt-4' /></Link>
                    </div>


                   
                    
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center bg-white mt-10 p-10 rounded-xl shadow-lg'>
                    {/*left */}
                    <div className=' w-[100%] md:w-[70%] flex justify-center items-center '>
                        <Link href={"/"}>
                        <Image src={"/portfolio.png"}
                            width={400}
                            height={400}
                            alt='portfolio.png'
                             className='w-[400px] rounded-xl'></Image></Link>
                    </div>
                    {/*right */}
                    <div className='w-[100%] md:w-[70%] space-y-4 mt-4 md:mt-0'>
                        <h1 className='text-2xl font-bold'>PORTFOLIO</h1>
                        <p>A responsive portfolio built with Nextjs,Tailwind CSS featuring Typescript</p>
                        <div className='flex gap-x-3 flex-wrap'>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Nextjs</div>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Tailwind</div>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Typescript</div>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>HTML</div>    
                        </div>
                       <Link href={"/"}> <FaExternalLinkAlt className='mt-4' /></Link>
                    </div>


                   
                    
                </div>

                 {/* box 3*/}

                 <div className='flex flex-col md:flex-row justify-center items-center bg-white mt-10 p-10 rounded-xl shadow-lg'>
                    {/*left */}
                    <div className=' w-[100%] md:w-[70%] flex justify-center items-center '>
                        <Link href={"/"}>
                        <Image src={"/bootstrap2.jpg"}
                            width={400}
                            height={400}
                            alt='bootstrap2.jpg'
                             className='w-[400px] rounded-xl'></Image></Link>
                    </div>
                    {/*right */}
                    <div className='w-[100%] md:w-[70%] space-y-4 mt-4 md:mt-0'>
                        <h1 className='text-2xl font-bold'>BOOTSTRAP</h1>
                        <p>A portfolio by using bootstrap ,HTML</p>
                        <div className='flex gap-x-3 flex-wrap'>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Bootstrap</div>
                        {/* <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Tailwind</div>
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>Typescript</div> */}
                        <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm rounded-xl text-gray-500 mt-2'>HTML</div>    
                        </div>
                       <Link href={"/"}> <FaExternalLinkAlt className='mt-4' /></Link>
                    </div>


                   
                    
                </div>
            </div>
        </main>
    )
}
export default work;