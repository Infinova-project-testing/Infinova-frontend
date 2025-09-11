import React, { useState } from "react";


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
       
         <h1 className="text-3xl font-medium">
             For <span className="text-blue-600">Campus</span>
         </h1>
        
        {/* Our Programs */}
        <div
          className="eduventuresForUniversityNavbarDropdown relative"
          onMouseEnter={() => setOpenMenu("programs")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <button className="eduventuresForUniversityNavbarLink flex items-center space-x-1">
            <span>Our Programs</span>
            <span>▼</span>
          </button>
          {openMenu === "programs" && (
            <div className="eduventuresForUniversityNavbarDropdownBox absolute top-full left-0 bg-white shadow-md"></div>
          )}
        </div>

        {/* Our Partners */}
        <div
          className="eduventuresForUniversityNavbarDropdown relative"
          onMouseEnter={() => setOpenMenu("partners")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <button className="eduventuresForUniversityNavbarLink flex items-center space-x-1">
            <span>Our Partners</span>
            <span>▼</span>
          </button>
          {openMenu === "partners" && (
            <div className="eduventuresForUniversityNavbarDropdownBox absolute top-full left-0 bg-white shadow-md"></div>
          )}
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="eduventuresForUniversityNavbarMobile md:hidden flex items-center">
        <button className="text-2xl">☰</button>
      </div>
    </div>
  );
}
