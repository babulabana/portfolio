import React from "react";
import home  from "../image/home.jpeg"
import avatar from "../image/avatar.svg"
import vishal from "../image/vishal1.png"
import vishal1 from "../image/imgvishal.jpg"

// import TypewriterComponent from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 m-20">
        <div className=" flex flex-col text-4xl gap-5 font-semibold mt-[20%]">
          <div className="flex">
            <h1>Hi There!</h1><span className="" role="img" aria-labelledby="wave">👋🏻</span>
          </div>
          <h1>
            I'M <span className="text-fuchsia-700">Babu Labana</span>
          </h1>
          <div>
          <h1 className="text-4xl text-fuchsia-700">MERN Stack Developer</h1>
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
      <div className="grid grid-cols-3">
        <div className=" grid col-span-2 text-2xl mx-16  my-auto leading-14 ">
          <span className="text-5xl font-semibold text-center my-10">
            LET ME <span className="text-fuchsia-700">INTRODUCE </span>MYSELF
          </span>
          <h1>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</h1>
          <p>I am fluent in classics like  <span className="text-fuchsia-700"> C++ and Javascript  </span></p>
          {/* <p>My field of Interest's are building new  <span className="text-fuchsia-700"> Web Technologies and Products</span> and also in areas related to  <span className="text-fuchsia-700"> Blockchain.</span></p> */}
          <p>Whenever possible, I also apply my passion for developing products with  <span className="text-fuchsia-700">Node.js </span>and <span className="text-fuchsia-700"> Modern Javascript Library and Frameworks  like </span> <span className="text-fuchsia-700">React.js </span></p>
        </div>
        <div className="grid grid-cols-1 m-auto  hover:animate-pulse  ">
          <img src={vishal1} alt="" className="rounded-2xl bg-white " />
        </div>
      </div>

      <div className=" flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold mt-20">FIND ME ON</h1>
        <p>Feel free to  <span className="text-fuchsia-700">connect</span> with me</p>
        
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

// import React from "react";
// import home from "../image/home.jpeg";
// import vishal from "../image/vishal1.png";
// import TypewriterComponent from "typewriter-effect";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// export default function Home() {
//   return (
//     <div className="px-4 sm:px-8 md:px-16 lg:px-20">
//       <div className="grid grid-cols-1 md:grid-cols-2 m-10 md:m-20">
//         <div className="flex flex-col text-3xl sm:text-4xl gap-5 font-semibold mt-10 md:mt-[20%]">
//           <div className="flex">
//             <h1>Hi There!</h1>
//             <span className="ml-2" role="img" aria-labelledby="wave">
//               👋🏻
//             </span>
//           </div>
//           <h1>
//             I'M <span className="text-fuchsia-700">Vishal Labana</span>
//           </h1>
//           <div>
//             <TypewriterComponent
//               options={{
//                 strings: [
//                   "Full Stack Developer",
//                   "MERN Stack Developer",
//                   "Web Developer",
//                   "Frontend Developer",
//                   "Backend Developer",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 deleteSpeed: 50,
//               }}
//             />
//           </div>
//         </div>
//         <div className="mt-10 md:mt-0">
//           <img src={home} alt="" className="w-full rounded-3xl" />
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3">
//         <div className="md:col-span-2 mx-6 md:mx-16">
//           <h1>
//             LET ME <span className="text-fuchsia-700">INTRODUCE </span>MYSELF
//           </h1>
//           <h1>
//             I fell in love with programming and I have at least learnt something, I
//             think… 🤷‍♂️
//           </h1>
//           <p>
//             I am fluent in classics like <span className="text-fuchsia-700">C++, Javascript, and Go.</span>
//           </p>
//           <p>
//             My field of interest is building new
//             <span className="text-fuchsia-700"> Web Technologies and Products</span>
//             and also in areas related to <span className="text-fuchsia-700">Blockchain.</span>
//           </p>
//           <p>
//             Whenever possible, I also apply my passion for developing products with
//             <span className="text-fuchsia-700"> Node.js </span> and
//             <span className="text-fuchsia-700"> Modern Javascript Libraries and Frameworks like </span>
//             <span className="text-fuchsia-700">React.js and Next.js</span>
//           </p>
//         </div>
//         <div className="flex justify-center mt-10 md:mt-0">
//           <img src={vishal} alt="" className="rounded-full bg-white w-32 md:w-48" />
//         </div>
//       </div>
//       <div className="flex flex-col items-center gap-5 mt-16">
//         <h1 className="text-3xl sm:text-4xl font-semibold">FIND ME ON</h1>
//         <p>
//           Feel free to <span className="text-fuchsia-700">connect</span> with me
//         </p>
//         <div className="flex justify-center space-x-6">
//           {[faFacebook, faTwitter, faInstagram, faLinkedin].map((icon, index) => (
//             <div
//               key={index}
//               className="border-0 p-2 rounded-full text-fuchsia-700 bg-white"
//             >
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <FontAwesomeIcon icon={icon} size="lg" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
    
//   );
// }
