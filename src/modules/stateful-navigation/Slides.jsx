import React, { useState } from 'react';
import { SLIDES_DATA as slides } from './constants';

function Slides() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex === slides.length - 1;

    const handleNext = () => {
        if (!isLastSlide) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (!isFirstSlide) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
    };

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className="small underlined"
                    onClick={handleRestart}
                    disabled={isFirstSlide}
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    className="small"
                    onClick={handlePrev}
                    disabled={isFirstSlide}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    className="small"
                    onClick={handleNext}
                    disabled={isLastSlide}
                >
                    Next
                </button>
            </div>

            <div id="slide">
                <h1 data-testid="title">{slides[currentIndex].title}</h1>
                <p data-testid="text">{slides[currentIndex].text}</p>
            </div>
        </div>
    );
}

export default Slides;