import './Header.css';
import { Link } from 'react-router-dom';
import { useState} from 'react'; // Importando useState para navegação móvel

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false); // Estado para controlar a navegação móvel

    const toggleNav = () => { // Função para alternar a navegação móvel
        setIsNavActive(!isNavActive);
    };

    return (
        <header>
            <Link to="/" className="logo-link">
                <h1>João Santos</h1>
            </Link>
                <nav className="nav-desk">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <nav className="nav-mob">
                    <i className={isNavActive ? 'fa-solid fa-xmark icon' : 'fa-solid fa-bars icon'} id='menu-icon' onClick={toggleNav}></i>
                    <ul className={isNavActive ? 'active' : ''}>
                        <h1>Home</h1>
                        <li onClick={toggleNav}><a href="#">About</a></li>
                        <li onClick={toggleNav}><a href="#">Projects</a></li>
                        <li onClick={toggleNav}><a href="#">Contact</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;