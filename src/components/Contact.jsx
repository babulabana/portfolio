

// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// const ContactDetails = () => {
//   return (
//     <div className="p-6 bg-gray-100 rounded-xl shadow-md w-full  ">
//       <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
//       <ul className="space-y-3">
//         <li className="flex items-center gap-3">
//           <FaEnvelope className="text-blue-500" />
//           <a href="mailto:labanababu8175@gmail.com" className="text-gray-700 hover:underline">labanababu8175@gmail.com</a>
//         </li>
//         <li className="flex items-center gap-3">
//           <FaPhone className="text-green-500" />
//           <span className="text-gray-700">+91 8160289836</span>
//         </li>
//         <li className="flex items-center gap-3">
//           <FaMapMarkerAlt className="text-red-500" />
//           <span className="text-gray-700">City, Country</span>
//         </li>
//         <li className="flex items-center gap-3">
//           <FaGlobe className="text-blue-500" />
//           <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">yourwebsite.com</a>
//         </li>
//         <li className="flex items-center gap-3">
//           <FaLinkedin className="text-blue-700" />
//           <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">linkedin.com/in/yourprofile</a>
//         </li>
//         <li className="flex items-center gap-3">
//           <FaGithub className="text-gray-800" />
//           <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">github.com/yourusername</a>
//         </li>
//         <li className="flex items-center gap-3">
//           <FaTwitter className="text-blue-400" />
//           <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">twitter.com/yourhandle</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default ContactDetails;
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="p-6 mt-28  rounded-xl shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-5xl font-bold mb-10 text-white text-center">Contact Me</h2>
      <ul className="space-y-4 text-lg">
        <li className=" shadow-lg shadow-fuchsia-600 flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <FaEnvelope className="text-blue-500 hover:text-3xl text-2xl" />
          <a href="mailto:labanababu8175@gmail.com" className="text-gray-700 hover:text-blue-500 hover:underline transition-colors duration-200">labanababu8175@gmail.com</a>
        </li>
        <li className=" shadow-lg shadow-fuchsia-600  flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <FaPhone className="text-green-500  hover:text-3xl text-2xl" />
          <a href="tel:918160289836" rel="noopener noreferrer" className="ct-contact-content  text-gray-700 hover:text-blue-500 hover:underline transition-colors duration-200">+918160289836</a>

          {/* <a href="tel:918160289836" class="ct-contact-content ">+918160289836</a> */}
          {/* <span className="text-gray-700">+91 8160289836</span> */}
        </li>
        <li className=" shadow-lg shadow-fuchsia-600 flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <FaMapMarkerAlt className="text-red-500  hover:text-3xl text-2xl" />
          <a href="https://maps.app.goo.gl/swZzPu6yRVcTLhXZA" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 hover:underline transition-colors duration-200">B1T1 Part 3 Shivalay Apartment , vejalpur , Ahmedabad</a>

          
        </li>
        <li className=" shadow-lg shadow-fuchsia-600 flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <FaGlobe className="text-blue-500 hover:text-3xl text-2xl" />
          <a href="https://vishal-academy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 hover:underline transition-colors duration-200">vishal-academy.vercel.app/</a>
        </li>
        <li className=" shadow-lg shadow-fuchsia-600 flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <FaLinkedin className="text-blue-700  hover:text-3xl text-2xl" />
          <a href="https://www.linkedin.com/in/babu-labana-44a98724a/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 hover:underline transition-colors duration-200  ">linkedin.com/babulabana</a>
        </li>
        <li className=" shadow-lg shadow-fuchsia-600 flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <FaGithub className="text-gray-800 hover:text-3xl text-2xl" />
          <a href="https://github.com/babulabana?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 hover:underline transition-colors duration-200">github.com/babulabana</a>
        </li>
        <li className=" shadow-lg shadow-fuchsia-600 flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          <FaTwitter className="text-blue-400 hover:text-3xl text-2xl" />
          <a href="https://x.com/BabuLabana8175" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 hover:underline transition-colors duration-200">x.com/BabuLabana8175</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;