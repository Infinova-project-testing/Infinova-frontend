import React, { useState } from "react";
import '../global.css';


export default function EduventuresForUniversitiesNavbar() {
  const [openMenu, setOpenMenu] = useState(null);

  

  return (
    <div className="eduventuresForUniversityNavbar flex items-center  bg-white">
      {/* Left: Logo */}
      <div className="eduventuresForUniversityNavbarLeft flex items-center">
        <img
          src="/eduventures.png"
          alt="Infinova Eduventures"
          className="eduventuresForUniversityNavbarLogo"
        />
      </div>

      {/* Right: Links */}
      <div className="eduventuresForUniversityNavbarRight hidden md:flex items-center">
        {/* For Campus */}
       
         <h1 className="text-3xl  font-family: Montserrat font-bold w-2xl">
             For <span className="text-blue-600">Campus</span>
         </h1>
        
        {/* Our Programs */}
        <div className="search-container">
          <div className="search-input-wrapper ml-4  rounded-lg font-family: Montserrat font-bold ">
          <input type="text" placeholder="What do you want to learn ?"  className=" search-input"/>
          <h1></h1>
        </div>
        
        </div>
      </div>
      <div>
        <button className="text-white bg-blue-600 px-4 py-2 rounded-lg ml-4 font-family: Montserrat font-bold"/> 
      </div>

      {/* Mobile Menu Icon */}
      <div className="eduventuresForUniversityNavbarMobile md:hidden flex items-center">
        <button className="text-2xl">☰</button>
      </div>
    </div>
  );
}
