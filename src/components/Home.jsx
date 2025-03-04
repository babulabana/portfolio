import React from "react";
import home  from "../image/home.png"
import avatar from "../image/avatar.svg"
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 m-20">
        <div className=" flex flex-col text-4xl gap-5 font-semibold mx-auto mt-[20%]">
          <div className="flex">
            <h1>Hi There!</h1><span class="wave" role="img" aria-labelledby="wave">👋🏻</span>
          </div>
          <h1>
            I'M <span className="text-fuchsia-700">Vishal Labana</span>
          </h1>
         
        </div>
        <div className="m-[20%]">
          <img src={home} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className=" grid col-span-2 mx-16">
          <h1>
            LET ME <span className="text-fuchsia-700">INTRODUCE </span>MYSELF
          </h1>
          <h1>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</h1>
          <p>I am fluent in classics like  <span className="text-fuchsia-700"> C++, Javascript and Go.</span></p>
          <p>My field of Interest's are building new  <span className="text-fuchsia-700"> Web Technologies and Products</span> and also in areas related to  <span className="text-fuchsia-700"> Blockchain.</span></p>
          <p>Whenever possible, I also apply my passion for developing products with  <span className="text-fuchsia-700">Node.js </span>and <span className="text-fuchsia-700"> Modern Javascript Library and Frameworks  like </span> <span className="text-fuchsia-700">React.js and Next.js</span></p>
        </div>
        <div className="grid grid-cols-1 m-auto">
          <img src={avatar} alt="" />
        </div>
      </div>

      <div className=" flex flex-col items-center gap-5">
        <h1 className="text-4xl font-semibold mt-20">FIND ME ON</h1>
        <p>Feel free to  <span className="text-fuchsia-700">connect</span> with me</p>
        <div>
          
        </div>
      </div>

    </div>
  );
}
