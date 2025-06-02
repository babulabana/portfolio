import React from "react";
import home  from "../image/home.jpeg"
import avatar from "../image/avatar.svg"
// import vishal from "../image/vishal1.png"
import vishal1 from "../image/imgvishal.jpg"

// import TypewriterComponent from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-14 lg:m-20 m-10 ">
        <div className=" flex flex-col text-5xl gap-5 font-semibold lg:mt-[20%] mt-[10%]">
          <div className="flex">
            <h1>Hi There!</h1><span className="" role="img" aria-labelledby="wave">👋🏻</span>
          </div>
          <h1>
            I'M <span className="text-fuchsia-700">Babu Labana</span>
          </h1>
          <div>
          <h1 className="text-4xl text-fuchsia-700">
            MERN Stack Developer
          </h1>
            {/* <TypewriterComponent options={
              {strings:["Full Stack Developer","MERN Stack Developer","Web Developer","Frontend Developer","Backtend Developer"],
                autoStart:true,loop:true,deleteSpeed:50
              }
            }></TypewriterComponent> */}
          </div>
        </div>
        <div className="">
          <img src={home} alt=""  className="w-full rounded-3xl"/>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 ">
        <div className=" grid col-span-2 text-2xl m-16   leading-14 ">
          <span className="text-5xl font-semibold text-center my-10">
            LET ME <span className="text-fuchsia-700">INTRODUCE </span>MYSELF
          </span>
          <h1>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</h1>
          <p>I am fluent in classics like  <span className="text-fuchsia-700"> C++ and Javascript  </span></p>
          <p>Whenever possible, I also apply my passion for developing products with  <span className="text-fuchsia-700">Node.js </span>and <span className="text-fuchsia-700"> Modern Javascript Library and Frameworks  like </span> <span className="text-fuchsia-700">React.js </span></p>
        </div>
        <div className="grid grid-cols-1  mx-16 lg:m-auto  hover:animate-pulse  ">
          <img src={vishal1} alt="" className="rounded-2xl bg-white " />
        </div>
      </div>

      <div className=" flex flex-col items-center gap-5">
        <h1 className="text-5xl font-semibold mt-20">FIND ME ON</h1>
        <p className="text-lg">Feel free to  <span className="text-fuchsia-700">connect</span> with me</p>
        
             <div className='flex justify-center space-x-6 gap-5'>
                  <div className="border-0 p-2 rounded-full text-fuchsia-700 bg-white">
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' >
                          <FontAwesomeIcon icon={faFacebook} size='lg' />
                    </a>
                  </div>
                 
                  <div className="border-0 p-2 rounded-full text-fuchsia-700 bg-white">
                    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                      <FontAwesomeIcon icon={faTwitter} size='lg' />
                    </a>
                  </div>
                  
                  <div className="border-0 p-2 rounded-full text-fuchsia-700 bg-white">
                    <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                      <FontAwesomeIcon icon={faInstagram} size='lg' />
                    </a>
                  </div>
                  
                  <div className="border-0 p-2 rounded-full text-fuchsia-700 bg-white">
                      <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} size='lg' />
                      </a>
                  </div>
                 
                </div>
        
      </div>

    </div>
  );
}
