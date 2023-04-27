import { Link } from "react-router-dom"
import "../assets/Card.css"

function Card(props) {
    return (
        <li className="kasa-card">
            <div className="background-gradient">
            </div>
            <Link to={`/logement/${props.lodging.id}`} className="kasa-card-title">
                {props.lodging.title}
            </Link>
            <img className="kasa-card-img" src={props.lodging.cover} alt={props.lodging.title} />
        </li>
    )
}

export default Card