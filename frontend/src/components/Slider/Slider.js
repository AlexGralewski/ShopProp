import React, {useState} from "react"

const Slider = () => {
  let sliderImages = [1,2,3,4]
  const [x, setX] = useState(0)

  const slideRight = () => {
    x === (sliderImages.length - 1) ? setX(0) : setX(x+1)
  }
  const slideLeft = () => {
    x === 0 ? setX((sliderImages.length - 1)) : setX(x-1)

  }



  return (
    <div className="slider">
      {
        sliderImages.map((image,index) => 
            <div key={index} className="slide" style={{transform:`translateX(${-x*100}%)`}}>
              {image}
            </div>
        )
      }
      <button className="slider-btn" id="left" onClick={slideLeft}><i class="fas fa-arrow-alt-circle-left fa-3x"></i></button>
      <button className="slider-btn" id="right" onClick={slideRight}><i class="fas fa-arrow-alt-circle-right fa-3x"></i></button>
      <div className="slides-nav">
        X = {x}
        {sliderImages.map(index =>  <i key={index} className="fas fa-circle slide-dot" id={index} onClick={index => setX(2)}></i>
              )
            }

        
      </div>
    </div>
  )
}

export default Slider