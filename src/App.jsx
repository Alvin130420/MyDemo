
import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
// import AppNavigation from './route/AppNavigation'
import FAQSections from './components/FAQSections'
import About from './pages/About'
import Features from './pages/Features'
// import AppNavigation from "../src/route/AppNavigation"
// import FAQSections from './components/FAQSections'
function App() {
 return(
  <div>
    <Navbar/>
    {/* <AppNavigation /> */}
    <About />
    <Features />
    <FAQSections />
    <Footer/>


  </div>
 )
}

export default App
