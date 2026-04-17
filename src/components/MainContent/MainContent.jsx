import './MainContent.css';
import bg from '../../assets/bg-main.jpeg';

const MainContent = () => {
    return (
        <main className="main" style={{ backgroundImage: `url(${bg})` }}>
            <h1>Desenvolvedor full-stack</h1>

            <div className="btns">
                <button className="btn-my-job">Meu trabalho</button>
                <button className="btn-tech">Tecnologias</button>
            </div>

            <section className="intro-card">
                <h2>Olá, eu sou o Kaizen</h2>
                <p>Sou um desenvolvedor full-stack apaixonado por criar soluções inovadoras e eficientes. Com experiência em diversas tecnologias, estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para projetos impactantes.</p>
            </section>
        </main>
    )
}

export default MainContent;