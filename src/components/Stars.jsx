import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "../assets/Stars.css"

function Stars({rating}){
    const numberOfStars = [1, 2, 3, 4, 5];

    return <div>
                {numberOfStars.map((stars) =>
                rating >= stars ? <FontAwesomeIcon key={stars.toString()} icon={faStar} style={{color:"#ff6060"}} className="stars-icon"/> 
                : <FontAwesomeIcon key={stars.toString()} icon={faStar} style={{color:"#e3e3e3"}} className="stars-icon"/>)}
            </div>
}

export default Stars