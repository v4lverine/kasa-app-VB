import "../assets/Slideshow.css"
import lodging from "../datas/lodging"


function Slideshow({images}) {
    return (
        <div className="block-slideshow">
            <div className="slideshow-slider">
                {images.map(image => (
                    <div className="slide" key={image}><img src={image} alt="Photos du logement" /></div>
                )) }
            </div>
        </div>);
}

export default Slideshow