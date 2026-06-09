import './WorkSection.css';
import RouterLink from '../../../../components/RouterLink/RouterLink';

const WorkSection = () => {
    return (
        <section className="work-section">
            <div className="info-projects">
                <h1>Meu trabalho</h1>
                <p>Here are some of my recent projects, those who have been a great challenge and have helped me grow as a developer.</p>
                <RouterLink to="../../../MyWork" className="btn-projects"><button className="btn-projects">Ver Mais</button></RouterLink>
            </div>
            <div className="divisor-p"></div>
            <h1 className="title-p">Meu trabalho</h1>
            <RouterLink to="../../../MyWork" className="btn-router"><button className="btn-more-projects">Ver mais</button></RouterLink>
            <div className="projects" id="projects">
                    <RouterLink to="../../../MyWork" className="project-single"></RouterLink>
                    <RouterLink to="../../../MyWork" className="project-single"></RouterLink>
                    <RouterLink to="../../../MyWork" className="project-single"></RouterLink>
                    <RouterLink to="../../../MyWork" className="project-single"></RouterLink>
                    <RouterLink to="../../../MyWork" className="project-single"></RouterLink>
                    <RouterLink to="../../../MyWork" className="project-single"></RouterLink>
                    <RouterLink to="../../../MyWork" className="project-single"></RouterLink>
                    <RouterLink to="../../../MyWork" className="project-single"></RouterLink>
            </div>
        </section>
    )
}

export default WorkSection;