import { Link } from 'react-router-dom'
import "../../assets/Error.css"

function Error() {
    return (
        <div className='kasa-404-block'>
            <b className='kasa-404'>404</b>
            <p className='kasa-404-oopsie'>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to={'/'} className='kasa-404-linkto'>Retourner à la page d'accueil</Link>    
        </div>
        );
    }
    
    export default Error