import './MainContent.css';

const MainContent = () => {
    return (
        <main className="main">
            <h1>Desenvolvedor Full-Stack</h1>

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