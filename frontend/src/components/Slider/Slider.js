import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

const getWidth = () => window.innerWidth;

const Slider = () => {
  const slides = [
    {
      image:slider1,
      title:"New collection"}, 
    {
      image:slider2,
      title:"Sale"}, 
    {
      image:slider3,
      title:"Sale"}
  ];

  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0, //active slide index
    translate: getWidth(), //value of translation
    transition: 0.45, //transition time
    currentSlides: [lastSlide, firstSlide, secondSlide], //middle slide from the list is visible
  });

  const { activeSlide, translate, currentSlides, transition } = state;

  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    autoPlayRef.current = slideRight;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const slider = sliderRef.current;

    const play = () => {
      autoPlayRef.current();
    };

    const smooth = () => {
      transitionRef.current();
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = slider.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    let interval = setInterval(play, 10000);

    return () => {
      slider.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const smoothTransition = () => {
    let currentSlides = [];

    if (activeSlide === slides.length - 1) {
      currentSlides = [slides[slides.length - 2], lastSlide, firstSlide];
    } else if (activeSlide === 0) {
      currentSlides = [lastSlide, firstSlide, secondSlide];
    } else {
      currentSlides = slides.slice(activeSlide - 1, activeSlide + 2)
    }

    setState({
      ...state,
      currentSlides: currentSlides,
      transition: 0,
      translate: getWidth()
    });
  };

  const slideRight = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  const slideLeft = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });

  return (
    <div className="slider" ref={sliderRef}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * currentSlides.length}
      >
        {currentSlides.map((slide, index) => (
          <Slide width={getWidth()} key={slide + index} content={slide} />
        ))}
      </SliderContent>
      <button className="slider-btn" id="left" onClick={slideLeft}>
        <i className="fas fa-arrow-alt-circle-left fa-3x"></i>
      </button>
      <button className="slider-btn" id="right" onClick={slideRight}>
        <i className="fas fa-arrow-alt-circle-right fa-3x"></i>
      </button>
      <Dots slides={slides} activeSlide={activeSlide} />
    </div>
  );
};

export default Slider;
