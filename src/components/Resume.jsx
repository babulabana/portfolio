import React from 'react'
import resumepdf from "../image/resume/Labana_Babu.pdf"
import resumejpg from "../image/resume/Labana_Babu.jpg"
export default function Resume() {
  return (
    <>
      <div>
      
      </div>
    <div className="mx-auto w-fit mt-20 flex  flex-col gap-10 ">
      <a href={resumepdf} download="resume" className='border-2 px-5 rounded-full bg-red-500 hover:bg-green-500 '>
         Download CV
      </a>
      <p>Failed to load PDF file.</p>
     
  
      <a href={resumejpg} download="resume"  className='border-2 px-5 rounded-full bg-red-500 hover:bg-green-500 '>Download CV</a>
      <p>Failed to load jpg file.</p>
  
    </div>

  
    </>
  )
}
