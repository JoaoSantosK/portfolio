import './MainContent.css';
import RouterLink from '../../../../components/RouterLink/RouterLink';

const MainContent = ({ onOpenContact}) => {
    return (
        <main className="main" id="about">
            <h1>Desenvolvedor Full-Stack</h1>

            <div className="btns">
                <RouterLink to="/mywork" className="btn-my-job">
                    Meu trabalho
                </RouterLink>
                <button type="button" className="btn-tech" onClick={onOpenContact}>
                    Mande um E-mail
                </button>
            </div>

            <section className="intro-card">
                <h2>Olá, eu sou o Kaizen</h2>
                <p>Sou um desenvolvedor full-stack apaixonado por criar soluções inovadoras e eficientes. Com experiência em diversas tecnologias, estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para projetos impactantes.</p>
            </section>
        </main>
    )
}

export default MainContent;