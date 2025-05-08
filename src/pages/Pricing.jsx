import React from "react";
import Pricingcard from "../components/Pricingcard";
import  pricingPlans from "../components/Pricingplans";




function App() {
  return (
    
   <div className=" pt-10 pb-10  mx-auto bg-white ">
    <h1 className=" text-center text-2xl font-extrabold text-indigo-900">Simple, Transparent Pricing</h1>
    <p className="text-center font-semibold text-gray-500 not-italic">Choose the plan that works best for your educational needs.</p>
        
     <div className=" p-10 grid grid-cols-1 md:grid-cols-3 gap-8  max-w-4xl mx-auto  border-gray-100  ">
      {pricingPlans.map((plan, index) => (
        
        <Pricingcard key={index} {...plan} />

      ))}
    </div>
   
 <div className="text-center " ><a className=' text-sm text-indigo-600 font-bold' href='#'>View complete pricing details</a></div>

   </div>
  );
}

export default App;
