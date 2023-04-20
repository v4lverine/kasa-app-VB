import { useState } from "react";
import "../assets/Collapse.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

function Collapse(props){
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <div className="kasa-collapse">
            <button className="toggle-collapse" href="#" onClick={(event) => {
                event.preventDefault()
                setIsOpen(!isOpen)
            }}>{props.label} {isOpen ? <FontAwesomeIcon icon={faAngleUp} className="arrow-toggle"/> : <FontAwesomeIcon icon={faAngleDown} className="arrow-toggle"/>}
            </button>
            { isOpen && (<div className="toggle-collapse-content">
                {props.children}
            </div>) }
        </div>
    )
}

export default Collapse