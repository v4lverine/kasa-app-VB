import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "../assets/Stars.css"

function Stars({rating}){
    const starsIcon = [<FontAwesomeIcon icon={faStar}/>, 
                       <FontAwesomeIcon icon={faStar}/>, 
                       <FontAwesomeIcon icon={faStar}/>,
                       <FontAwesomeIcon icon={faStar}/>,
                       <FontAwesomeIcon icon={faStar}/>];

    return <div>
                {rating === "5" ? <span className="stars-icon" style={{color:"#ff6060"}}>{starsIcon}</span> 
                                : <span className="stars-icon" style={{color:"#e3e3e3"}}>{starsIcon}</span>}
            </div>
}

export default Stars