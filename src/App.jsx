
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import AppNavigation from "../src/route/AppNavigation"
import FAQSections from './components/FAQSections'
import Pricing from "./pages/Pricing"
import Institutions from './pages/Institutions'
import About from '../src/pages/About'
// import Testimonials from './pages/Testimonials'
import Testimonial from './pages/Testimonial'
import Contact from './pages/Contact'
import Getintouch from './pages/Getintouch'
// import Pricing from '../src/pages/Pricing'
// import Institutions from '../src/pages/Institutions' 
// import FAQSections from '../src/components/FAQSections'

function App() {
 return(
  <div>
    <Navbar/>
    <AppNavigation />
    <About/>
    <Pricing/>
    <Institutions/>
    <FAQSections />
    {/* <Testimonials /> */}
    <Testimonial />
    <Contact />
    <Getintouch />
    <Footer/>
  </div>
 )
}

export default App
