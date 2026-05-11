import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-contato'>
            <p>© 2026 Kaizen. Todos os direitos reservados.</p>
            <div className="contato">
                <a href="https://github.com/JoaoSantosK?tab=overview&from=2026-05-01&to=2026-05-11" target='_blank'><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-santos-2409h/" target='_blank'><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/kaizensl.dev/" target='_blank'><i className="fab fa-instagram"></i></a>
            </div>
        </footer>
    )
}

export default Footer;