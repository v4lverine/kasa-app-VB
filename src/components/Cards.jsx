import lodging from "../datas/lodging"
import "../assets/Card.css"

function Card() {
    return (
        <div>
            <ul className="kasa-card-list">
                {lodging.map(item => (
                <li className="kasa-card" key={item.id}><div className="background-gradient"></div>                    
                    <p className="kasa-card-title">{ item.title }
                    </p>  
                    <img className="kasa-card-img" src={item.cover} alt={item.title} />    
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Card