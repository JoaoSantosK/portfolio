import './Header.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import RouterLink from '../RouterLink/RouterLink';

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };
    
    //Sistema de scroll suave para seções da página
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (sectionId) => {
        setIsNavActive(false);

        const scroll = () => {
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        };

        if (location.pathname !== "/") {
            navigate("/");

            setTimeout(() => {
                scroll();
            }, 150);
        } else {
            scroll();
        }
    };

    return (
        <header>
            <Link to="/" className="logo-link">
                <h1>João Santos</h1>
            </Link>

            <nav className="nav-desk">
                <ul>
                    <li>
                        <button className="nav-btn" onClick={() => scrollToSection("about")}>
                            About
                        </button>
                    </li>

                    <li>
                        <button className="nav-btn" onClick={() => scrollToSection("projects")}>
                            Projects
                        </button>
                    </li>

                    <li>
                        <button className="nav-btn" onClick={() => scrollToSection("contact")}>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>

            <nav className="nav-mob">
                <i
                    className={isNavActive ? 'fa-solid fa-xmark icon' : 'fa-solid fa-bars icon'}
                    id="menu-icon"
                    onClick={toggleNav}
                ></i>

                <ul className={isNavActive ? 'active' : ''}>
                    <li>
                        <Link to="/" onClick={toggleNav}>Home</Link>
                    </li>

                    <li>
                        <button className="nav-btn" onClick={() => scrollToSection("about")}>
                            About
                        </button>
                    </li>

                    <li>
                        <button className="nav-btn" onClick={() => scrollToSection("projects")}>
                            Projects
                        </button>
                    </li>

                    <li>
                        <button className="nav-btn" onClick={() => scrollToSection("contact")}>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;