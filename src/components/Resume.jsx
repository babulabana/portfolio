import React from 'react'
import resumepdf from "../image/resume/Labana_Babu.pdf"
import resumejpg from "../image/resume/Labana_Babu.jpg"
export default function Resume() {
  return (
    <>
     <div className='w-1/4 flex mx-auto mt-20'>
        <img src={resumejpg} alt="" />
      </div>
      
    <div className="flex  lg:gap-20 gap-10 justify-center text-center items-center mt-10">
      
     <div className='flex flex-col gap-5  '>
       <a href={resumepdf} download="resume" className='border-2 px-5 py-2 text-2xl rounded-full bg-red-500 hover:bg-green-500 '>
         Download CV
      </a>
      <p>Download PDF file.</p>
      </div>
  
     
      <div className='flex flex-col gap-5'>
      <a href={resumejpg} download="resume"  className='border-2 px-5 py-2 text-2xl rounded-full bg-red-500 hover:bg-green-500 '>Download CV</a>
      <p>Download jpg file.</p>
      </div>
    </div>

  
    </>
    
  )
}
