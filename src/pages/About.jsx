import React from 'react'
import { Lightbulb, ClipboardList, BookOpen, Users} from 'lucide-react';

export default function About() {

  const cardData = [{icon:"📊", title: "Academic Management", text: "Comprehensive tools for curriculum planning, grading, and academic reporting"},
                    {icon:"💰", title: "Financial Management", text: "Simplify fee collection, track expenses, and generate financial reports"},
                    {icon:"👩‍👩‍👦‍👦", title: "Student Information", text: "Centralized student profiles with academic history and performance analytics"},
                    {icon:"👨‍💼", title: "Staff Management ", text: "Tools for HR, payroll, and performance evaluation of teaching and non-teaching staff"},
                    {icon:"📱", title: "Student Portal ", text: "Give students access to assignments, grades, and learning resources"},
                    {icon:"👆", title: "Biometric Attendance ", text: "Modern attendance tracking for students and staff using fingerprint technology"},
                    {icon:"📲", title: "Parent Communication ", text: "Keep parents informed with automated SMS, email notifications, and a parent portal"},
                    {icon:"📈", title: "Analytics Dashboard ", text: "Visual reports and insights to guide strategic decision-making"},
                  ]

  return (
    <section className='about-wrapper min-h-screen pb-10'>
      <div className='about-text flex flex-col my-8'>
        <h1 className="tracking-wide text-indigo-900 font-bold text-4xl text-center mt-8">Powerful Features for Modern Schools</h1>
        <p className=" text-gray-600 text-xl my-3 max-w-2xl mx-auto text-center">Everything you need to run your school efficiently in one integrated platform</p>
      </div>
      <div className="about-cards grid grid-cols-1 md:grid-cols-4 gap-3">
        {cardData.map((data, index) => (
          <div key={index} className='group about-card md:w-70 rounded-xl shadow-lg border-1 border-gray-100 p-8 m-2 transition-all duration-300 hover:shadow-xl hover:border-indigo-600'>
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
      
    </section>
  )
}
