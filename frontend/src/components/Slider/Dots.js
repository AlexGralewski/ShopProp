import React, { memo } from "react";

const Dot = ({ active }) => (
  <span style={{ color: `${active ? "white" : "rgba(180, 180, 180, 0.7)"}` }}>
    <i className="fas fa-circle"></i>
  </span>
);

const MemoDot = memo(Dot);

const Dots = ({ slides, activeSlide }) => (
  <div className="slider-dots">
    {slides.map((slide, index) => (
      <MemoDot key={index} active={activeSlide === index} />
    ))}
  </div>
);

export default Dots