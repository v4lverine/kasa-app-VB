import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <h1>Patatipatata</h1>    
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </div>
        );
    }
    
    export default Header