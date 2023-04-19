import { useState } from "react";
import "../assets/Collapse.css"

function Collapse(props){
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <div className="kasa-collapse">
            <button className="toggle-collapse" href="#" onClick={(event) => {
                event.preventDefault()
                setIsOpen(!isOpen)
            }}>{props.label}
            </button>
            { isOpen && (<div className="toggle-collapse-content">
                {props.children}
            </div>) }
        </div>
    )
}

export default Collapse