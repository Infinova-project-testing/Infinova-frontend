import React from 'react'
import EduventuresForStudentsNavbar from '../../components/EduventuresForStudentsNavbar'
import BookingFormForStudentsEduventures from '../../components/BookingFormForStudentsEduventures'
import EduventuresForStudentsHeroSection from '../../components/EduventuresForStudentsHeroSection'
import EduventuresCourses from './EduventuresCourses'

const EduventuresForStudents = () => {
  return (
    <div>
      <EduventuresForStudentsNavbar/>
      <EduventuresForStudentsHeroSection/>
      <BookingFormForStudentsEduventures/>
      <EduventuresCourses/>
    </div>
  )
}

export default EduventuresForStudents
