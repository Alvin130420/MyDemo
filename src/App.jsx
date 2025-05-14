
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import AppNavigation from "../src/route/AppNavigation"
import FAQSections from './components/FAQSections'
import Pricing from "./pages/Pricing"
import Institutions from './pages/Institutions'
import  Features  from '../src/pages/Features'
import About from '../src/pages/About'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function App() {
 return(
  <div>
    <Navbar/>
    <AppNavigation />
    <About/>
    <Pricing/>
    <Institutions/>
    <FAQSections />
    <Testimonials />
    <Contact />
    <Footer/>
  </div>
 )
}

export default App
