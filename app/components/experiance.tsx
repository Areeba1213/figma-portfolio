import React from 'react'
import Image from 'next/image';

export const Experiance = () => {
    return (
        <main className='w-full h-full md:h-[400px] bg-white flex justify-center items-start mt-20'>
            <div className='w-[80%] flex flex-col justify-center items-center'>
                {/* top*/}
                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-gray-200 w-[120px] h-10 flex justify-center items-center text-xl rounded-xl text-gray-500 mt-2'>Experience</div>
                    <p className='mt-3 text-center text-xs md:text-lg'>Here is a quick summary of my experiance
                    </p>
                    {/* bottom*/}
                    <div className='bg-white w-full md:w-[80%] flex flex-wrap justify-center items-center gap-4 mt-5 p-5 rounded-xl shadow-lg'>
                        {/* top*/}
                        <div className=' flex flex-coljustify-between w-full'>
                            <h2 className='text-xl font-bold text to-black'>Frontend Development and Learning Projects</h2>
                            <p>2023-parent</p>
                        </div>
                        {/* bottom*/}
                        <div className='w-full md:w-[70%] '>
                            <ul>
                                <li className='list-disc md:ml-20'>Designed and developed a static e-commerce website, KidsCloth, using Next.js, focused on children's clothing. Ensured responsive design and user-friendly functionality.</li>
                                <li className='list-disc md:ml-20'>Created a sign-up page with GitHub OAuth integration using Auth.js, incorporating modern styling for a polished look.</li>
                                <li className='list-disc md:ml-20'>Converted a 16-page Figma design into a functional Next.js application during a hackathon, ensuring responsiveness and attention to detail.</li>
                                 <li className='list-disc ml-20'>Completed a 3-month web development course</li>
                                <li className='list-disc ml-20'>Built a dynamic blog website using Sanity.io, implementing content management and scalable architecture.</li>
                                <li className='list-disc ml-20'>Completed various personal and academic projects during web development and TypeScript courses, including responsive layouts, basic applications, and interactive components.</li> 
                            </ul>

                        </div>
                            {/*  top
                        //      <div className=' flex-col flex justify-between w-full'>
                        //     {/* <h2 className='text-xl font-bold text to-black'>Frontend Development and Learning Projects</h2>
                        //     <p>2023-parent</p> */}
                        {/* </div>  */}
                         {/* bottom*/}
                        {/* // <div className='w-full md:w-[70%] '>
                        //     <ul> */}
                                {/* <li className='list-disc ml-20'>Designed and developed a static e-commerce website, KidsCloth, using Next.js, focused on children's clothing. Ensured responsive design and user-friendly functionality.</li>
                        //         <li className='list-disc ml-20'>Created a sign-up page with GitHub OAuth integration using Auth.js, incorporating modern styling for a polished look.</li>
                        //         <li className='list-disc ml-20'>Converted a 16-page Figma design into a functional Next.js application during a hackathon, ensuring responsiveness and attention to detail.</li> 
                        //         <li className='list-disc md:ml-20'>Completed a 3-month web development course</li>
                        //         <li className='list-disc md:ml-20'>Built a dynamic blog website using Sanity.io, implementing content management and scalable architecture.</li>
                        //         <li className='list-disc md:ml-20'>Completed various personal and academic projects during web development and TypeScript courses, including responsive layouts, basic applications, and interactive components.</li>
                        //     </ul>

                        // </div>  */}
                    </div>
                </div>

            </div>


        </main>
    )
}
export default Experiance;
