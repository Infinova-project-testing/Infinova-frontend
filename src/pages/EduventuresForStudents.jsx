import React from 'react'
import EduventuresForStudentsNavbar from '../../components/EduventuresForStudentsNavbar'
import BookingFormForStudentsEduventures from '../../components/BookingFormForStudentsEduventures'
import EduventuresForStudentsHeroSection from '../../components/EduventuresForStudentsHeroSection'
import EduventuresTrainers from '../../components/EduventuresForStudentsTrainers'
import EduventuresStudentsTestimonials from '../../components/EduventuresStudentsTestimonials'
import EduventuresForStudentsSoftSkills from '../../components/EduventuresForStudentsSoftSkills'
import EduventuresCourses from './EduventuresCourses'


const EduventuresForStudents = () => {
  return (
    <div>
      <EduventuresForStudentsNavbar/>
      <EduventuresForStudentsHeroSection/>
      <BookingFormForStudentsEduventures/>
      <EduventuresCourses/>
      <EduventuresForStudentsSoftSkills/>
      <EduventuresTrainers/>
      <EduventuresStudentsTestimonials/>
    </div>
  )
}

export default EduventuresForStudents
