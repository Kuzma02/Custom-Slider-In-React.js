import React from 'react'

const ButtonPrev = ({ currentSlideNum, setCurrentSlideNum, listArr }) => {

  const handlePrevBtn = () => {
    if(currentSlideNum === 1){
      setCurrentSlideNum(listArr.length);
      return;
    }
    setCurrentSlideNum( currentSlideNum - 1 );
  }

  return (
    <button className="prev" onClick={handlePrevBtn}>
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
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
  )
}

export default ButtonPrev