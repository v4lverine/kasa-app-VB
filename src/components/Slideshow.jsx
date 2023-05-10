import "../assets/Slideshow.css"
import lodging from "../datas/lodging"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


function Slideshow({ images }) {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section className="block-slideshow">
            <div className="slideshow-slider">
                {images.map((image, index) => (
                    <div key={index}> {index === current && (<img className="slide" src={image} alt={lodging.title} />)}
                    </div>
                ))}
                {length > 1 ?
                    <div>
                        <FontAwesomeIcon icon={faChevronLeft} className="left-arrow" onClick={prevSlide} />
                        <FontAwesomeIcon icon={faChevronRight} className="right-arrow" onClick={nextSlide} />
                        <span className="number-pics">{current + 1}/{length}</span>
                    </div>
                    : " "
                }
            </div>
        </section>
    );
}

export default Slideshow