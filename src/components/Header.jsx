import { Link } from 'react-router-dom'
import '../assets/Header.css'

function Header() {
    return (
        <div className='kasa-header'>
            <h1 className='kasa-title-header'>Kasa</h1>
            <img src='./images/kasa-logo.png' className='kasa-logo'/>    
            <nav className='kasa-nav-header'>
                <Link to="/" className='kasa-links1-header'>Accueil</Link>
                <Link to="/about" className='kasa-links2-header'>À propos</Link>
            </nav>
        </div>
        );
    }
    
    export default Header