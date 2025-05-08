
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import  Features  from '../src/pages/Features'
import About from '../src/pages/About'
import Pricing from '../src/pages/Pricing'
import Institutions from '../src/pages/Institutions' 
import FAQSections from '../src/components/FAQSections'

function App() {
 return(
  <div>
    <Navbar/>
    <AppNavigation />
    <About/>
    <Features/>
    <Pricing/>
    <Institutions/>
    <FAQSections />
    <Footer/>


  </div>
 )
}

export default App
