
import { Link } from 'react-router-dom'
import FooterLink from '../components/FooterLink'

function Footer() {
  const products = [
    {to:"/elitecbt", link:"Elite CBT"},
    {to:"/eliteclass", link:"Elite Class"},
    {to:"/elitelibrary", link:"Elite Library"},
    {to:"/aiasistant", link:"AI Assistant"},
    {to:"/pricing", link:"Pricing"},
  ]
  const company = [
    {to:"/aboutus", link:"About Us"},
    {to:"/careers", link:"Careers"},
    {to:"/blog", link:"Blog"},
    {to:"/press", link:"Press"},
    {to:"/partners", link:"Partners"},
  ]
  const support = [
    {to:"/help", link:"Help Center"},
    {to:"/contactus", link:"Contact Us"},
    {to:"/privacy", link:"Privacy Policy"},
    {to:"/terms", link:"Terms of Services"},
    {to:"/status", link:"Status"},
  ]
  return (
    <div className='bg-gray-900 text-gray-400 px-5 pt-10'>
      <div className='grid grid-cols-10  gap-y-6 border-b-1 border-b-gray-800 pb-3 mx-auto container'>
        <div className="lg:col-span-4 sm:col-span-5 col-span-10  ">
          <Link to="/"><h1 className='text-2xl font-bold text-indigo-600 '>Elite Edu Tech</h1></Link>
          <p className='w-23/24 mt-3'>Transforming education through innovative technology solutions that empower teachers and inspire students.</p>
          <ul className='mt-6'>
            <li className='mt-3 hover:text-indigo-400 transition duration-200'><a href=""><i className="fa-brands fa-facebook text-[17px]"></i></a></li>
            <li className='mt-3 hover:text-indigo-400 transition duration-200'><a href=""><i className="fa-brands fa-twitter"></i></a></li>
            <li className='mt-3 hover:text-indigo-400 transition duration-200'><a href=""><i className="fa-brands fa-instagram fa-lg"></i></a></li>
            <li className='mt-3 hover:text-indigo-400 transition duration-200'><a href=""><i className="fa-brands fa-youtube fa-lg"></i></a></li>
          </ul>
        </div>
        <div className="lg:col-span-2 sm:col-span-4 col-span-10">
          <FooterLink title="Products" details={products}/>
        </div>
        <div className="lg:col-span-2 sm:col-span-5 col-span-10">
          <FooterLink title="Company" details={company}/>
        </div>
        <div className="lg:col-span-2 sm:col-span-5 col-span-10 ">
          <FooterLink title="Support" details={support}/>
        </div>
        
      </div>
      <div className="flex justify-center p-5">
          &copy; {new Date().getFullYear()} Elite Edu Tech. All rights reserved.
        </div>
    </div>
  )
}

export default Footer
