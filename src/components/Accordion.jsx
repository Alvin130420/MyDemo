import { ChevronRight } from "lucide-react";
import { useState } from "react";


export default function Accordion({title , answer, accordionOpen = false}) {
    const [accordionState, setAccordionState] = useState(accordionOpen);
    
    function toggleAccordion () {
        setAccordionState(!accordionState);
    }
  
    return (
      <div
        className="transition-all duration-700 ease-in-out px-2 py-3"
        onClick={toggleAccordion}
      >
        <button className="flex w-full justify-between transition-all items-center duration-700 ease-in-out ">
          <p className="text-lg font-semibold text-left">{title}</p>
          <div className={accordionState ? "rotate-90" : null}>
            <ChevronRight size={"1.25em"} strokeWidth={2.5} color="blue" />
          </div>
        </button>

        {accordionState && (
          <div className="mt-3">
            <p className="text-left text-gray-500">{answer}</p>
          </div>
        )}
      </div>
    );
}
