import { Link } from "react-router-dom"
import "../assets/Card.css"

function Card(props) {
    return (
        <li className="kasa-card">
            <Link to={`/logement/${props.lodging.id}`}>
                <div className="background-gradient">
                </div>
                <h3 className="kasa-card-title">
                    {props.lodging.title}
                </h3>
                <img className="kasa-card-img" src={props.lodging.cover} alt={props.lodging.title} />
            </Link>
        </li>
    )
}

export default Card