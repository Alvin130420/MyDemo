
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import AppNavigation from './route/AppNavigation'
import FAQSections from './components/FAQSections'
import About from './pages/About'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Institutions from './pages/Institutions'

function App() {
 return(
  <div>
    <Navbar/>
    <AppNavigation />
    <About />
    <Features />
    <Pricing />
    <Institutions />
    <FAQSections />
    <Footer/>
  </div>
 )
}

export default App
