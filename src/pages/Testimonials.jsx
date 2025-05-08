import { useState } from "react";
import Carousel from "../components/Carousel";
import TestimonialsCard from "../components/TestimonialsCard";
import { Circle } from "lucide-react";

let testimonials = [
  {
    image: "./src/assets/white.svg",
    testimony:
      "1- The AI Learning Assistant has completely changed how I study. It's like having a personal tutor available 24/7. My grades have improved significantly since I started using Elite Edu Tech, and I feel much more confident in my abilities.",
    testifier: "Sarah Johnson",
    testifierInfo: "Undergraduate Student, Stanford University",
    isActive: true,
    rating: 5
  },
  {
    image: "./src/assets/white.svg",
    testimony: "Person 2 said...",
    testifier: "Person 2",
    testifierInfo: "Undergraduate Student, Stanford University",
    isActive: false,
    rating: 2
  },
  {
    image: "./src/assets/white.svg",
    testimony: "Person 3 said...",
    testifier: "Person 3",
    testifierInfo: "Undergraduate Student, Stanford University",
    isActive: false,
    rating: 4
  },
];



export default function Testimonials() {

    const [activeTestiomonial, setactiveTestiomonial] = useState(testimonials);

    function handleClick (idx) {
        setactiveTestiomonial(prevTestimonials => {
            return prevTestimonials.map(
                (testimonial, index) => { 
                    if (index === idx) {
                        return {...testimonial, isActive: true};
                    }
                    return {...testimonial, isActive: false};
                }
            )
        })
    }

    return (
      <div className=" flex justify-center w-full bg-indigo-50 ">
        <div className="py-20 mx-5 flex flex-col lg:max-w-[1024px] md:max-w-[737px] sm:max-w-[600px] justify-center items-center">
          <h3 className="text-3xl font-bold text-indigo-900 mb-4">
            What Our Users Say
          </h3>
          <p className="text-gray-600 mb-15 text-center text-xl">
            Hear from students and educators who have transformed their learning
            experience.
          </p>

          {/* Testimoials Section */}
          <div className="w-full  flex flex-col justify-center items-center">
            {activeTestiomonial.map((testimonial, index) => {
              return (
                <>
                  <TestimonialsCard
                    image={testimonial.image}
                    testimony={testimonial.testimony}
                    testifier={testimonial.testifier}
                    testifierInfo={testimonial.testifierInfo}
                    isActive={testimonial.isActive}
                    rating={testimonial.rating}
                  />
                </>
              );
            })}

            <p className="mt-6 text-center flex flex-row gap-2">
              {activeTestiomonial.map((testimonial, index) => {
                return (
                  <button key={index} onClick={() => handleClick(index)}>
                    <Circle
                      color={testimonial.isActive ? "#4f39f6" : "#c6d2ff"}
                      size="1em"
                      fill={testimonial.isActive ? "#4f39f6" : "#c6d2ff"}
                    />
                  </button>
                );
              })}
            </p>
          </div>

          {/* <TestimonialsCard image="./src/assets/white.svg" testimonial= "" testifier = "" testifierInfo = "" />
          <TestimonialsCard image="./src/assets/white.svg" testimonial= "" testifier = "" testifierInfo = "" />
          <TestimonialsCard image="./src/assets/white.svg" testimonial= "" testifier = "" testifierInfo = "" /> */}

          {/* <Carousel /> */}
        </div>
      </div>
    );
    
};
