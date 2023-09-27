import { useEffect, useState } from "react";
import { shortList, list, longList } from "../data";
import SlideElement from "./SlideElement";
import ButtonPrev from "./ButtonPrev";
import ButtonNext from "./ButtonNext";

const Carousel = () => {
  const [listArr, setListArr] = useState(list);
  const [ currentSlideNum, setCurrentSlideNum ] = useState(1);  



  return (
    <section className="section">
      {listArr.map((slide) => (
        <SlideElement key={slide.id} slide={slide} currentSlideNum={currentSlideNum} setCurrentSlideNum={setCurrentSlideNum} />
      ))}

      <ButtonPrev currentSlideNum={currentSlideNum} setCurrentSlideNum={setCurrentSlideNum} listArr={listArr} />
      <ButtonNext currentSlideNum={currentSlideNum} setCurrentSlideNum={setCurrentSlideNum} listArr={listArr} />
      
    </section>
  );
};

export default Carousel;
