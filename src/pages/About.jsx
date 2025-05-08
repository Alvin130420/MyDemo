import React from 'react'
import { Lightbulb, ClipboardList, BookOpen, Users} from 'lucide-react';

export default function About() {

  const cardData = [{icon: <Lightbulb  size={40}/>, title: "Intelligent Learning", text: "AI-powered learning paths that adapt to each student's progress and learning style"},
                    {icon: <BookOpen  size={40}/>, title: "Digital Library", text: "Access thousands of digital resources, textbooks, and research materials instantly."},
                    {icon: <Users size={40}/>, title: "Collaborative Learning", text: "Connect with peers and educators in real-time for group projects and discussions."},
                    {icon: <ClipboardList  size={40}/>, title: "Assessment Tools ", text: "Create, take, and analyze tests with our advanced, secure examination platform."},]

  return (
    <div className='about-wrapper h-screen border'>
      <div className='about-text flex flex-col my-8'>
        <h1 className="tracking-wide text-indigo-900 font-bold text-4xl text-center mt-5">Built for Student Success</h1>
        <p className=" text-gray-600 text-2xl my-3 max-w-2xl mx-auto text-center">Our comprehensive suite of educational tools empowers students and teachers alike.</p>
      </div>
      <div className="about-cards grid grid-cols-4 gap-3">
        {cardData.map((data) => (
          <div className='group about-card w-70 rounded-xl shadow-lg border-gray-200 p-8 m-2 transition-all duration-300 hover:shadow-xl hover:border-indigo-600'>
          <div className='rounded-full bg-indigo-100 w-15 h-15 flex justify-center items-center mb-6 transition-colors duration-300 group-hover:bg-indigo-600'>
            <i className='text-indigo-600 transition-colors duration-300 group-hover:text-white'>
              {data.icon}
            </i></div>
           <h2 className='font-bold text-xl mb-3 text-gray-800 transition-colors duration-300 group-hover:text-indigo-600'>{data.title}</h2>
           <p className="text-gray-600">{data.text}</p>
        </div>
        ))}
      </div>
      
    </div>
  )
}
