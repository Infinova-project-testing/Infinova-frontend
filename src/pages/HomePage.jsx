import React from 'react';


const HomePage = () => {
  const scrollToDivisions=()=>{
    const divisions=document.getElementById('divisionsPage');
    divisions?.scrollIntoView({behavior:"smooth"});
  }
  return (
    <div className="home-container">
      {/* Background Video */}
      <video
        src="/bgVideo.mp4"
        autoPlay
        muted
        loop
        className="background-video"
      />
      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Headings */}
      <h1 className="home-heading">"Education strategy</h1>
      <h1 className="home-heading">Innovation-</h1>
      <h1 className="home-heading home-heading-last">Under One Roof."</h1>

      {/* Button */}
      <button className="explore-btn" onClick={scrollToDivisions}>Explore Now</button>
    </div>
  );
};

export default HomePage;
