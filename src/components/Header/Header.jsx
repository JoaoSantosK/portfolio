import './Header.css';
import { useState} from 'react';

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <header>
            <h1>João Santos</h1>
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
                        <li onClick={toggleNav}><a href="#">About</a></li>
                        <li onClick={toggleNav}><a href="#">Projects</a></li>
                        <li onClick={toggleNav}><a href="#">Contact</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;