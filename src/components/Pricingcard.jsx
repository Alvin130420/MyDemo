import React from 'react';
import { Check } from "lucide-react";


const Pricingcard = ({ title, price, description, features, isPopular }) => {
  return (
    <div
    
      className={`relative flex flex-col justify-between rounded-2xl p-6  shadow-md ${
        isPopular ? 'bg-indigo-600 text-white border border-blue-600 mb-10   hover:shadow-[0_4px_10px_rgba(59,130,246,0.5)] transition-shadow transition-transform hover:scale-105 duration-300' : 'bg-white border border-gray-200 hover:shadow-[0_4px_10px_rgba(59,130,246,0.5)] transition-shadow duration-300'
      }`}
    >
      {isPopular && (
  <div className="bg-yellow-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-bl-xl absolute top-0 right-0 uppercase">
    Most Popular
  </div>
)}


      <div>
        <h1 className="text-xl font-bold mb-3 mt-3">{title}</h1>
        <p className={` mb-4  font-bold text-2xl  ${ isPopular ? 'text-white ' : 'text-indigo-600 '}`}>${price}</p>
        <p className={`mb-4 text-gray-600 ${isPopular ? 'text-white text-semibold' : 'text-gray-600 font-semibold'}`}>{description}</p>
        <ul className="mb-1">
          {features.map((feature, index) => (
            <li className="mb-3 flex items-start text-sm" key={index}>
                <Check className={`w-5 h-5 mr-2 mt-0.5 ${isPopular ? 'text-white' : 'text-indigo-600'}`} />
              {feature}</li>
          ))}
        </ul>
      </div>

      <button className= {`mt-1 rounded-full  ${isPopular ? 'bg-white text-indigo-700' : 'bg-indigo-600 text-white hover:bg-indigo-50 transition hover:text-indigo-700'} px-4 py-2 `}>
        Get Started
      </button>
      
    </div>
  );
};

export default Pricingcard;
