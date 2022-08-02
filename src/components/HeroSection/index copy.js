import React, { useState, useRef, useEffect } from "react";
import "../assets/img/hero_office.jpg";
import "../styles/index.css";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

function HeroSection({ slides }) {
  //Aqui usamos o useState para criar um estado que será o slide atual
  //O valor inicial é 0, ou seja, o slide atual é o primeiro.
  //Verificamos o length do array de slides para saber o número de slides.
  //O número de slides é o tamanho do array de slides.

  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  //useRef é uma função que retorna um objeto que contém um elemento DOM.
  const timeout = useRef(null);

  //Aqui criamos uma função para executar a troca de slides.
  //A função é chamada quando o usuário clica no ícone do próximo slide.
  //A função setCurrentSlide é chamada para alterar o valor do estado.
  //O valor do estado é alterado para o próximo slide.
  //O slide atual é incrementado.
  //Se o slide atual for igual ao número de slides, o slide atual é 0.

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    console.log(currentSlide);
  };

  //Aqui criamos uma função para executar a troca de slides.
  //No entanto a função é chamada quando o usuário clica no ícone do slide anterior.
  //A função setCurrentSlide é chamada para alterar o valor do estado.
  //O valor do estado é alterado para o slide anterior.
  //O slide atual é decrementado.
  //Se o slide atual for menor que 0, o slide atual é o último slide.

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    console.log(currentSlide);
  };

  //o useEffect é um hook que é chamado quando o componente é montado.

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((currentSlide) =>
        currentSlide === length - 1 ? 0 : currentSlide + 1
      );
    };

    timeout.currentSlide = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.currentSlide) {
        clearTimeout(timeout.currentSlide);
      }
    };
  }, [currentSlide, length]);

  return (
    <>
      <div className="w-full h-screen bg-cover bg-no-repeat max-h-1100px overflow-hidden">
        <div className="w-full h-screen flex justify-center items-center overflow-hidden">
          <div className="position absolute right-0 top-0 z-10">
          </div>
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
