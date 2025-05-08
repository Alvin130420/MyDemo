
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
// import AppNavigation from "../src/route/AppNavigation"

import Pricing from './pages/Pricing'
import FAQSections from './components/FAQSections'
import Institutions from './pages/Institutions'

function App() {
 return(
  <div>
    <Navbar/>
    {/* <AppNavigation /> */}
    <Pricing />
    <Institutions />
    <FAQSections />
    <Footer/>
  </div>
 )
}

export default App
