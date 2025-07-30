import React from "react";
import imgabout from "../image/about.png";
import bt from "../image/about/Bootstrap.png"
import css from "../image/about/CSS3.png"
import ex from "../image/about/Express.png"
import html from "../image/about/HTML5.png"
import js from "../image/about/JavaScript.png"
import jq from "../image/about/jQuery.png"
import md from "../image/about/MongoDB.png"
import node from "../image/about/Node.js.png"

import react from "../image/about/React.png"
import tc from "../image/about/Tailwind CSS.png"
import vc from "../image/about/Vercel.png"
import vs from "../image/about/vscode.png"
import pm from "../image/about/Postman.png"



export default function About() {
  return (
    <>
      <div className="grid lg:grid-cols-2 m-[10%] ">
        <div className=" flex flex-col  text-2xl ">
          <span className="text-4xl text-center">
            Know Who<span className="text-fuchsia-700"> I'M</span>
          </span>
          <div className="my-10 leading-10 ">
            <p className="">
              Hi Everyone, I am
              <span className="text-fuchsia-700"> Babu Labana</span> from 
               <span className="text-fuchsia-700">    District Mahisagar, Gujarat, India.
              </span>
            </p>
            <p>
              I am currently employed as a mern stack developer intern at
              CLICKAWAY IT SOLUTIONS.
            </p>
            <p>I have completed Bachelor in Computer Engineering.</p>
          </div>
          <div>
            <h1 className="py-5">Apart from coding, some other activities that I love to do!</h1>
            <ol className="pl-10 leading-8">
              <li className="flex gap-2">
                <svg
                  stroke="currentColor"
                  className="my-auto"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z"></path>
                </svg>
                <p>Playing Games</p>
              </li>
              <li className="flex gap-2">
                <svg
                  stroke="currentColor"
                  className="my-auto"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z"></path>
                </svg>
                <p>Writing Tech Blogs</p>
              </li>
              <li className="flex gap-2">
                <svg
                  stroke="currentColor"
                  className="my-auto"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z"></path>
                </svg>
                <p>Travelling</p>
              </li>
            </ol>
            <div className="flex  flex-col items-center mt-10 text-fuchsia-200 text-2xl">
              <p>"Strive to build things that make a difference !"</p>
              <p>Babu Labana</p>
            </div>
          </div>
        </div>
        <div className="m-[10%] ">
         
          <img src={imgabout} alt="" className="" />
        </div>
      </div>
      <div className="mx-[10%] ">
        <h1 className="my-10 text-center lg:text-4xl font-bold">
          Professional <span>Skillset </span>
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 w-full">
          <div className="flex justify-center  border-2 items-center h-36   ">
            <img src={react} alt="" className="h-20 w-20" />
            
          </div>
           <div className="flex justify-center  border-2 items-center h-36   ">
            <img src={node} alt="" className="h-20 w-20 "  />
          </div>
           <div className="flex justify-center  border-2 items-center h-36   ">
            <img src={ex} alt="" className="bg-white  p-1 rounded h-20 w-20" />
          </div>
           <div className="flex justify-center  border-2 items-center h-36   ">
            <img src={md} alt="" className=" h-20 w-20"  />
          </div>
           <div className="flex justify-center  border-2 items-center h-36   ">
            <img src={js} alt=""  className="h-20 w-20" />
          </div>
           <div className="flex justify-center  border-2 items-center h-36   ">
            <img src={jq} alt=""  className="h-20 w-20" />
          </div>
           <div className="flex justify-center  border-2 items-center h-36   ">
            <img src={bt} alt=""  className="h-20 w-20" />
          </div>
           <div className="flex justify-center  border-2 items-center h-36   ">
            <img src={tc} alt=""  className="h-20 w-20" />
          </div>
           <div className="flex justify-center  border-2 items-center h-36   ">
            <img src={html} alt=""  className="h-20 w-20" />
          </div>
           <div className="flex justify-center  border-2 items-center h-36   ">
            <img src={css} alt=""  className="h-20 w-20" />
          </div>
           
         
        </div>
      </div>
      <div id="Tools" className="mx-[10%]">
        <h1  className="my-10 text-center text-4xl font-bold">
          <span>Tools</span> I use
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 w-full mb-20 ">
          <div  className="flex justify-center  border-2 items-center h-36 ">
             <img src={vs} alt="" className="h-20 w-20"  />
            </div>
            <div  className="flex justify-center  border-2 items-center h-36 ">
              <img src={vc} alt="" className="bg-white p-1 rounded h-20 w-20" />
            </div>
            <div  className="flex justify-center  border-2 items-center h-36 ">
              <img src={pm} alt=""  className="h-20 w-20" />
            </div>
            
          </div>
        </div>
      
    </>
  );
}
