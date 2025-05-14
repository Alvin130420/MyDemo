"use client"

import AOS from "aos";
import "aos/dist/aos.css"
import StarsRating from "./StarsRating";
import { useEffect } from "react";

export default function TestimonialsCard({ image, rating, isActive, testimony, testifier, testifierInfo }) {
    useEffect(() => {
        AOS.init({})
    }, [isActive])
   
    return (
      <div className={isActive ? " my-10 w-full" : " hidden "} data-aos="fade-left">
        <div className="flex shadow-xl p-7 md:flex-row  flex-col rounded-xl bg-white w-full justify-center items-center ">
          <img src={image} alt="" className="rounded-full my-2 size-25 md:ml-10" />
          <div className="md:flex md:flex-col md:ml-20 md:w-full ">
            <p className="w-full text-left">
              <StarsRating rating={rating} />
            </p>
            <p className="text-gray-500 my-5">"{testimony}"</p>

            <div className="w-full text-left">
              <h4 className="font-bold">{testifier}</h4>
              <p className="text-gray-500 mb-1">{testifierInfo}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
