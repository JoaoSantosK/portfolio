import './WorkSection.css';

const WorkSection = () => {
    return (
        <section className="work-section">
            <div className="info-projects">
                <h1>Meu trabalho</h1>
                <p>Here are some of my recent projects, those who have been a great challenge and have helped me grow as a developer.</p>
                <button>Ver Mais</button>
            </div>
            <div className="divisor-p"></div>
            <h1 className="title-p">Meu trabalho</h1>
            <button className="btn-more-projects">Ver Mais</button>
            <div className="projects">
                <div className="project-single"></div>
                <div className="project-single"></div>
                <div className="project-single"></div>
                <div className="project-single"></div>
                <div className="project-single"></div>
                <div className="project-single"></div>
                <div className="project-single"></div>
                <div className="project-single"></div>
            </div>
        </section>
    )
}

export default WorkSection;