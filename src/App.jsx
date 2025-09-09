import { Route,Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import HomePage from "./pages/HomePage"
import DivisionsPage from "./pages/DivisionsPage"
import AboutUs from "./pages/AboutUs"
import Clients from "./pages/Clients"
import CeoPage from "./pages/CeoPage"
import Footer from "../components/Footer"
import CareersPage from "./pages/CareersPage"
import ContactUs from "./pages/ContactUs"
import Eduventures from "./pages/Eduventures"
import Consultants from "./pages/Consultants"
import Technology from "./pages/Technology"
import Mission from "./pages/Mission"
import Vision from "./pages/Vision"
import Blog from "./pages/Blog"
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about-us' element={<AboutUs/>}></Route>
      <Route path='/Careers' element={<CareersPage/>}></Route>
      <Route path='/contact-us' element={<ContactUs/>}></Route>
      <Route path='/eduventures' element={<Eduventures/>}></Route>
      <Route path='/Consultants' element={<Consultants/>}></Route>
      <Route path='/technology' element={<Technology/>}></Route>
      <Route path='/mission' element={<Mission/>}></Route>
      <Route path='/vision' element={<Vision/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
    </Routes>
      <Navbar/>
   
      <DivisionsPage/>
      <AboutUs/>
      <Clients/>
      <CeoPage/>
      <Footer/>
      
    </>
  )
}

export default App
