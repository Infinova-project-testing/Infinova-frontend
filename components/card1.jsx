// src/components/MaangEngineerCard.jsx
import React from 'react';

const MaangEngineerCard = () => {
  return (
    <div className="flex flex-col w-[534px] h-[411px] p-[10px] bg-[#E4EFFF] rounded-[10px] shadow-lg">
      <div className="w-[107px] h-[31px] bg-white rounded-full flex items-center justify-center mb-4">
        <p className="text-black text-[15px] font-montserrat font-bold leading-normal">Upcoming</p>
      </div>

      <h2 className="text-black text-[24px] font-roboto font-semibold leading-normal mb-6">
        Become a Maang Engineer
      </h2>

      <div className="relative w-full h-[184px] bg-[#0056D2] rounded-[10px] flex items-center justify-center mb-6">
        <div className="absolute left-[33px] flex items-center">
          <div className="w-[119px] h-[119px] rounded-full overflow-hidden mr-4">
            <img 
              src="https://via.placeholder.com/119" // Placeholder image
              alt="Sayed Mustakim"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="text-white text-[20px] font-roboto font-semibold leading-normal">
              by Sayed Mustakim
            </p>
            <p className="text-white text-[14px] font-roboto font-normal leading-normal">
              CEO & Founder
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <button className="flex items-center justify-center w-[137px] h-[55px] bg-[#0056D2] rounded-[10px] mr-2">
          <p className="text-white text-[14px] font-montserrat font-semibold leading-normal mr-2">Register</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M13.1667 8.5H3.16667C2.98334 8.5 2.83334 8.35 2.83334 8.16667V7.83334C2.83334 7.65 2.98334 7.5 3.16667 7.5H13.1667C13.35 7.5 13.5 7.65 13.5 7.83334V8.16667C13.5 8.35 13.35 8.5 13.1667 8.5Z"
              fill="currentColor"
            />
            <path
              d="M9.16667 12.5C9.02778 12.5 8.89167 12.4417 8.79167 12.3333C8.59167 12.1333 8.59167 11.8333 8.79167 11.6333L11.9583 8.41667C12.0583 8.31667 12.1167 8.18334 12.1167 8.05C12.1167 7.91667 12.0583 7.78334 11.9583 7.68334L8.79167 4.51667C8.59167 4.31667 8.59167 4.01667 8.79167 3.81667C8.99167 3.61667 9.29167 3.61667 9.49167 3.81667L12.6583 6.98334C13.0417 7.36667 13.0417 7.98334 12.6583 8.36667L9.49167 11.5333C9.39167 11.6333 9.29167 11.6667 9.16667 11.6667V12.5Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <div className="flex items-center justify-center w-[208px] h-[55px] bg-white rounded-[10px]">
          <svg 
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black mr-2"
          >
            <path
              d="M17.75 4H16.5V3C16.5 2.45 16.05 2 15.5 2H14.5C13.95 2 13.5 2.45 13.5 3V4H10.5V3C10.5 2.45 10.05 2 9.5 2H8.5C7.95 2 7.5 2.45 7.5 3V4H6.25C4.45 4 3 5.45 3 7.25V18.75C3 20.55 4.45 22 6.25 22H17.75C19.55 22 21 20.55 21 18.75V7.25C21 5.45 19.55 4 17.75 4ZM19 18.75C19 19.44 18.44 20 17.75 20H6.25C5.56 20 5 19.44 5 18.75V11H19V18.75Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-black text-[20px] font-montserrat font-bold leading-normal">
            Friday, Sep 5
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaangEngineerCard;