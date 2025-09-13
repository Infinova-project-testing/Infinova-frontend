import React from 'react'
import EduventuresForStudentsNavbar from '../../components/EduventuresForStudentsNavbar'
import BookingFormForStudentsEduventures from '../../components/BookingFormForStudentsEduventures'
import EduventuresForStudentsHeroSection from '../../components/EduventuresForStudentsHeroSection'
import EduventuresTrainers from '../../components/EduventuresForStudentsTrainers'
import EduventuresStudentsTestimonials from '../../components/EduventuresStudentsTestimonials'
import EduventuresCourses from './EduventuresCourses'


const EduventuresForStudents = () => {
  return (
    <div>
      <EduventuresForStudentsNavbar/>
      <EduventuresForStudentsHeroSection/>
      <BookingFormForStudentsEduventures/>
      <EduventuresCourses/>
      <EduventuresTrainers/>
      <EduventuresStudentsTestimonials/>
    </div>
  )
}

export default EduventuresForStudents
