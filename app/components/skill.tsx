import React from 'react'
import Image from 'next/image';

export const skill = () => {
  return (
    <main className='w-full h-full md:h-[400px] bg-white flex justify-center items-start mt-20'>
        <div className='w-[80%] flex flex-col justify-center items-center'>
            {/* top*/}
            <div className='flex flex-col justify-center items-center'>
                <div className='bg-gray-200 w-[100px] h-10 flex justify-center items-center text-xl rounded-xl text-gray-500 mt-2'>Skills</div>
                <p className='mt-3 text-center text-xs'>The skills,tools and technologies I am really good at: </p>
            </div>
             {/* bottom*/}
             <div className=' w-[80%] flex flex-wrap gap-4 mt-10'>
                 {/* box 1*/}
                 <div>
                  <Image src={"/ts.png"}
                    width={100}
                    height={100}
                    alt='typescript'
                     className='w-[70px] md:w-[90px]'></Image>
                 </div>
                  {/* box 2*/}
                  <div>
                  <Image src={"/css.png"}
                    width={100}
                    height={100}
                    alt='cascade'
                      className='w-[70px] md:w-[90px]'></Image>
                 </div>
                  {/* box 3*/}
                  <div>
                  <Image src={"/html5_23329.png"}
                    width={100}
                    height={100}
                    alt='html'
                    className='w-[70px] md:w-[90px]'></Image>
                 </div>
                  {/* box 4*/}
                  <div>
                  <Image src={"/next.png"}
                    width={100}
                    height={100}
                    alt='nextjs'
                    className='w-[70px] md:w-[90px]'></Image>
                 </div>
                  {/* box 5*/}
                  <div>
                  <Image src={"/wordp.png"}
                    width={100}
                    height={100}
                    alt='wordpress'
                    className='w-[70px] md:w-[90px]'></Image>
                 </div>
                   {/* box 6*/}
                 <div>
                  <Image src={"/images.png"}
                    width={100}
                    height={100}
                    alt='tailwind'
                    className='w-[70px] md:w-[90px]'></Image>
                 </div>
             </div>

        </div>
    </main>
  )
}
export default skill;