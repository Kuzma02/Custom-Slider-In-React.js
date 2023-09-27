import React from 'react'

const ButtonNext = ({ currentSlideNum, setCurrentSlideNum, listArr }) => {
  
  const handleNextBtn = () => {
    if(currentSlideNum === listArr.length){
      setCurrentSlideNum(1);
      return;
    }
    setCurrentSlideNum( currentSlideNum + 1 );
  }
  
  return (
    <button className="next" onClick={handleNextBtn}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
  )
}

export default ButtonNext