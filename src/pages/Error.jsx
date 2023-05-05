import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../assets/Error.css"

function Error() {
    return (
        <>
            <Header />
            <div className='kasa-404-block'>
                <b className='kasa-404'>404</b>
                <p className='kasa-404-oopsie'>Oups ! La page que vous demandez n'existe pas.</p>
                <Link to={'/'} className='kasa-404-linkto'>Retourner à la page d'accueil</Link>
            </div>
            <div className="footer-404">
                <Footer />
            </div>
        </>
    );
}

export default Error