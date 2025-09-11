import React from 'react'
import EduventuresForUniversitiesNavbar from '../../components/EduventuresForUniversitiesNavbar'
import EduventuresForUniversitiesHeroSection from './EduventuresForUniversitiesHeroSection'
import EduventuresUniversitiesContact from './EduventuresUniversitiesContact'
const EduventuresForUniversities = () => {
  return (
   <>
   <div className='w-[100vw] min-h-[100vh] bg-yellow-700'>
    <EduventuresForUniversitiesNavbar/>
    <EduventuresForUniversitiesHeroSection/>
    <EduventuresUniversitiesContact/>
   </div>
      

   </>
  )
}

export default EduventuresForUniversities
