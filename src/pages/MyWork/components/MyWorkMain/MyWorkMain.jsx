import './MyWorkMain.css';
import ProjectCard from '../ProjectCard/ProjectCard';

const MyWorkMain = () => {
    return(
        <>
            <h1 className="mywork-title">Meu trabalho</h1>
            <section className="mywork-MP">
                <ProjectCard
                    title="Project Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    desktopImg="https://placehold.co/500x300"
                    mobileImg="https://placehold.co/200x300"
                    link="https://example.com/project-link"
                />
                <ProjectCard
                    title="Project Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    desktopImg="https://placehold.co/500x300"
                    mobileImg="https://placehold.co/200x300"
                    link="https://example.com/project-link"
                />
                <ProjectCard
                    title="Project Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    desktopImg="https://placehold.co/500x300"
                    mobileImg="https://placehold.co/200x300"
                    link="https://example.com/project-link"
                />
            </section>
        </>
    )
}

export default MyWorkMain;