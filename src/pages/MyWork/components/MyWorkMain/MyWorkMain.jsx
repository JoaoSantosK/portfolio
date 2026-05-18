import './MyWorkMain.css';
import ProjectCard from '../ProjectCard/ProjectCard';

import project01DI from '../../../../assets/api-js.png';

const MyWorkMain = () => {
    return(
        <>
            <h1 className="mywork-title">Meu trabalho</h1>
            <section className="mywork-MP">
                <ProjectCard
                    title="API de Login"
                    description={
                        <>
                            <p>
                                API de login desenvolvida com JavaScript e MongoDB. Recebe método Post, Put, Delete e Get. Desenvolvido para fins de estudo e prática. Utilizando Prisma para gerenciar dados e autenticação via JWT. O projeto inclui funcionalidades como criação de usuário, login, atualização de informações e exclusão de conta.
                            </p>
                            <p>Atualizações futuras: Desenvolver front-end para melhor visualização do projeto; Adicionar mais funcionalidades (ex: recuperação de senha, autenticação via redes sociais, etc);</p>
                            <div className="project-techs">
                                <i className="fa-brands fa-js"></i>
                                <i className="fa-brands fa-mdb"></i>
                            </div>
                        </>
                    }
                    desktopImg={project01DI}
                    mobileImg={null}
                    link="https://github.com/JoaoSantosK/api-login"
                />
                <ProjectCard
                    title="Project Title"
                    description={
                        <>
                            <p>Outro projeto pessoal desenvolvido com React e Node.js</p>
                        </>
                    }
                    desktopImg={"https://placehold.co/500x300"}
                    mobileImg={"https://placehold.co/200x300"}
                    link="https://example.com/project-link"
                />
                <ProjectCard
                    title="Project Title"
                    description={
                        <>
                            <p>Terceiro projeto pessoal desenvolvido com React e Node.js</p>
                        </>
                    }
                    desktopImg={"https://placehold.co/500x300"}
                    mobileImg={"https://placehold.co/200x300"}
                    link="https://example.com/project-link"
                />
            </section>
        </>
    )
}

export default MyWorkMain;