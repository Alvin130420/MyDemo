
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import AppNavigation from "../src/route/AppNavigation"
import FAQSections from "../src/components/FAQSections"
import Pricing from '../src/pages/Pricing'
import Institutions from '../src/pages/Institutions' 
function App() {
 return(
  <div>
    <Navbar/>
    <AppNavigation />
    <Pricing/>
    <Institutions/>
    <FAQSections />
    <Footer/>


  </div>
 )
}

export default App
