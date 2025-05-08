import React from 'react'
import Button from '../components/Button';

export default function Features() {

  const products = [{title: "Elite CBT",
                    text: "Our Computer-Based Testing platform revolutionizes assessment with secure, scalable, and insightful examination tools for educators and students.",
                    listProducts: ["Secure testing environment", "Real-time progress tracking", "Advanced analytics and insights"],
                    cardName: "Elite CBT Program",  },
                    {title: "Elite Class",
                      text: "Virtual classroom environment that combines video conferencing, interactive whiteboards, and collaborative tools for engaging remote learning.",
                      listProducts: ["HD video conferencing", "Interactive digital whiteboards", "Breakout rooms and classroom management"],
                      cardName: "Elite Class Platform",  },
                    {title: "Elite Library",
                      text: "Comprehensive digital library with thousands of e-books, journals, and multimedia resources accessible anytime, anywhere.",
                      listProducts: ["Vast collection of academic resources", "Advanced search and citation tools", "Offline reading capabilities"],
                      cardName: "Elite Library",  },
                    {title: "AI Learning Assistant",
                      text: "Personalized AI tutor that provides 24/7 support, answers questions, and helps students master difficult concepts at their own pace.",
                      listProducts: ["24/7 homework assistance", "Adaptive learning pathways", "Personalized explanations and feedback"],
                      cardName: "AI Learning Assistant",  }
                  ]
  return (
    <section className='features-wrapper min-h-screen bg-indigo-50 pb-16'>
      <div className=' container px-8 m-auto pt-8'>
        <div className="flex flex-col py-8">
          <h1 className="tracking-wide text-indigo-900 font-bold text-4xl text-center mt-5">Our Premium Products</h1>
          <p className=" text-gray-600 text-xl my-3 max-w-2xl mx-auto text-center">Transformative educational technology for modern learning environments.</p>
        </div>
        {products.map((product, index) => { 
          const isEven = index % 2 === 0;
          
          return(
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-9 md:mb-25'>
            <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
              <h1 className='font-bold text-indigo-800 text-2xl mt-2'>{product.title}</h1>
              <p className="text-gray-600 my-4">{product.text}</p>
              {product.listProducts.map((listProduct, i) => (
                <ul className="mb-1">
                  <li key={i} className="mb-1">{listProduct}</li>
              </ul>
              ))}
              <div className="max-w-[120px] mt-5"><Button type={"btn-primary"} text={"Learn More"}/></div>
            </div>
            <div className={`border-indigo-200  ${isEven ? "md:order-2" : "md:order-1"}`}>
              <div className="w-full max-w-xl h-[300px] text-2xl flex justify-center items-center md:mb-24">
                <img alt={product.cardName} src={`https://placehold.co/600x400/indigo/white?text=${product.cardName}`} class="hover:shadow-indigo-200/50 transition rounded-xl shadow-2xl" />   
              </div>
            </div>
          </div>
        )})}
      </div>
    </section>
  )
}
