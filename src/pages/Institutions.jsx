import React from "react";
function Institutions(){
   return(
    <div className="bg-gray-50">
    <h1 className="text-2xl  font-bold text-indigo-900 text-center mb-3 pt-16">Trusted by Leading Institutions</h1>
    <p className="text-semi-bold text-gray-500 text-center">Join thousands of schools and universities already using Elite Edu Tech</p>
    <div className="flex justify-center p-10">
    <div className=" grid grid-cols-1 gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 pb-16">
        <div className="bg-gray-400 text-white font-semi-bold text-center p-4 w-30">University A</div>
        <div className="bg-gray-400 text-white text-center p-4 w-32">College B</div>
        <div className="bg-gray-400 text-white text-center p-4 w-32">School C</div>
        <div className="bg-gray-400 text-white text-center p-4 w-32">Academy D</div>
        <div className="bg-gray-400 text-white text-center p-4 w-32">Institute E</div>
        <div className="bg-gray-400 text-white text-center p-4 w-32">Learning F</div>
    </div>
    </div>
</div>
   )
}
export default Institutions;