import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import '../assets/Header.css'

function Header() {
    const { pathname } = useLocation();

    return (
        <header className='kasa-header'>
            <Link to="/" className='kasa-title-header'>
                K<img src='/images/kasa-logo.png' className='kasa-logo' alt='logo de Kasa' />sa
            </Link>
            <nav className='kasa-nav-header'>
                <Link to="/" className='kasa-links1-header' style={{ textDecorationLine: pathname === '/' ? 'underline' : 'none' }}>Accueil</Link>
                <Link to="/a-propos" className='kasa-links2-header' style={{ textDecorationLine: pathname === '/a-propos' ? 'underline' : 'none' }}>À propos</Link>
            </nav>
        </header>
    );
}

export default Header