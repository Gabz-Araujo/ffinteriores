import React, { useState, useRef, useEffect } from "react";
import "../assets/img/hero_office.jpg";
import "../styles/index.css";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

function HeroSection({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    console.log(currentSlide);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    console.log(currentSlide);
  };

// useEffect(() => {
//   const nextSlide = () => {
//     setCurrentSlide(currentSlide => (currentSlide === length - 1 ? 0 : currentSlide + 1))
//   }

//   timeout.currentSlide = setTimeout(nextSlide, 3000)

//   return function () {
//     if(timeout.currentSlide) {
//       clearTimeout(timeout.currentSlide)
//     }
//   }
// }, [currentSlide, length])



  return (
    <>
      <div className="w-full h-screen bg-cover bg-no-repeat max-h-1100px overflow-hidden">
        <div className="w-full h-screen flex justify-center items-center overflow-hidden">
          {slides.map((slide, index) => {
            return (
              <div className="w-full h-screen" key={index}>
                {index === currentSlide && (
                  <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
                    <div>
                      <img
                        className="absolute w-full h-screen top-0 left-0 object-cover"
                        src={slide.image}
                        alt={slide.alt}
                      />
                      <div>
                        <h1>{slide.title}</h1>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="absolute bottom-10 right-10 cursor-pointer scale-150">
            <NavigateBefore onClick={prevSlide} />
            <NavigateNext onClick={nextSlide} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
