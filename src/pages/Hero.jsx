import React from 'react'
import Button from '../components/Button'
function Hero() {
  return (
    <div className='bg-gradient-to-br from-indigo-600 to-red-500 w-full md:pt-0 pt-16'>
      <div className="flex px-4 md:flex-row gap-y-10 flex-col items-center pt-20 min-h-screen mx-auto  container">
        <div className="md:w-3/6 md:text-start text-center">
          <h1 className='lg:text-[55px] md:text-[47px] text-[35px] md:w-96/100  md:mx-0 mx-auto md:leading-12 lg:leading-16 text-white'>Revolutionize Your Learning Experience</h1>
          <p className='text-[20px] lg:w-5/6 md:mx-0 mx-auto md:mt-6 mt-3 text-white'>Elite Edu Tech transforms education with innovative technology solutions designed for today's students and educators.</p>
          <div className="flex sm:flex-row flex-col gap-4 mt-8 sm:w-[330px] md:mx-0 mx-auto">
            <div className="font-semibold w-full">
              <Button text="Get Started" type="btn-white"/>
            </div>
            <div className="font-semibold w-full">
              <Button text="Learn More" type="btn-outline"/>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:w-3/6 w-full">
          <div className="w-full max-w-[450px] h-[300px] text-2xl flex justify-center items-center">
            <img className='rounded-lg hover:scale-105 transition duration-1000 shadow-2xl ease-in-out' src="https://img.freepik.com/premium-photo/cartoon-illustration-little-african-girl-school-uniform-sitting-school-table_116079-770.jpg?ga=GA1.1.1527062468.1746680181&semt=ais_hybrid&w=740" alt="student learning animation" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
