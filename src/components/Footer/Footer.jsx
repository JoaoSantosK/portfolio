import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-contato'>
            <p>© 2026 Kaizen. Todos os direitos reservados.</p>
            <div className="contato">
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </footer>
    )
}

export default Footer;