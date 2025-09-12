import React from "react";


const EduventuresCourses = () => {
  const courses = [
    { title: "LaunchPad", desc: "Cyber security course" },
    { title: "Cusiosity", desc: "Cyber security course" },
    { title: "Excelerate", desc: "Cyber security course" },
  ];

  return (
    <div className="eduventuresCourses-container bg-white">
      {/* Heading */}
      <h2 className="eduventuresCourses-heading text-4xl font-bold text-center">
        Our <span className="text-blue-600">Programs</span>
      </h2>

      {/* Cards with Flexbox */}
      <div className="eduventuresCourses-cards flex flex-wrap justify-center">
        {courses.map((course,index) => (
          <div key={index} className="eduventuresCourses-cardWrapper">
            <div className="eduventuresCourses-card bg-blue-100 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col">
              <div className="eduventuresCourses-image">
                <img
                  src="/coursesDummy.png"
                  alt="course"
                  className="rounded-xl w-full h-auto"
                />
              </div>

              <div className="eduventuresCourses-cardContent flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-sm text-gray-700">{course.desc}</p>
                </div>

                {/* Brochure button only for first card */}
               
                  <button className="eduventuresCourses-btn flex items-center justify-between font-medium">
                    <span>Broucher</span>
                    <span className="eduventuresCourses-btnIcon flex items-center justify-center rounded-full">
                      ➜
                    </span>
                  </button>
              
              </div>
            </div>

            {/* Show more button below first card */}
            {index === 0 && (
              <div className="eduventuresCourses-showmore">
                <button className="eduventuresCourses-showmoreBtn border border-blue-500 text-black font-medium rounded-full shadow hover:bg-gray-100 transition">
                  show more <span className="eduventuresCourses-showmoreArrow">⌄</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EduventuresCourses;
