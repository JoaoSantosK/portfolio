import './MyWorkMain.css';
import ProjectCard from '../ProjectCard/ProjectCard';

import project01DI from '../../../../assets/projects/api-js.png';
import project02DI from '../../../../assets/projects/cardapio-delivery-pj.png';
import project03DI from '../../../../assets/projects/java-program-project.png';

import project04DI from '../../../../assets/projects/agencia-marketing-project.png';
import project04M from '../../../../assets/projects/agencia-marketing-projectM.png';

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
                    title="Cardápio Digital"
                    description={
                        <>
                            <p>
                                Projeto de cardápio digital desenvolvido com JavaScript. Permite aos usuários navegar pelo cardápio, adicionar itens ao carrinho e realizar pedidos. O backend foi desenvolvido com Express.js e MongoDB, utilizando Prisma para gerenciar os dados.
                            </p>
                            <p>
                                Atualizações futuras: Aperfeiçoar front-end; Adição de funcionalidades como personalização de pedidos; Sistema de pagamento online; Sistema de avaliação e feedback dos clientes; Gerenciamento de estoque para os administradores;
                            </p>
                            <div className="project-techs">
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3-alt"></i>
                                <i className="fa-brands fa-js"></i>
                            </div>
                        </>
                    }   
                    desktopImg={project02DI}
                    mobileImg={null}
                    link="https://github.com/JoaoSantosK/cardapio-delivery"
                />
                <ProjectCard
                    title="Programa de prioridade"
                    description={
                        <>
                            <p>
                                Projeto desenvolvido com Java para gerenciamento de prioridades. Sistema tem como objetivo organizar e priorizar famílias com base em critérios pré-definidos.
                            </p>
                            <p>
                                Atualizações futuras: Implementar funcionalidades adicionais, como geração de relatórios e gráficos para análise de dados; Adicionar autenticação e controle de acesso para diferentes níveis de usuários; Melhorar a interface do usuário para facilitar a navegação e a usabilidade do sistema;
                            </p>
                            <div className="project-techs">
                                <i class="fa-brands fa-java"></i>
                                <i class="fa-brands fa-openai"></i>
                            </div>
                        </>
                    }
                    desktopImg={project03DI}
                    mobileImg={null}
                    link="https://github.com/JoaoSantosK/programa-prioridade"
                />
                <ProjectCard
                    title="Agência de Marketing Digital"
                    description={
                        <>
                            <p>
                                Projeto de agência de marketing digital desenvolvido com React. O projeto inclui uma landing page responsiva, destacando os serviços oferecidos pela agência, como SEO, gestão de redes sociais e criação de conteúdo. O design é moderno e atraente, visando captar a atenção dos visitantes e convertê-los em clientes.
                            </p>
                            <p>
                                Atualizações futuras: Adicionar mais seções à landing page, como depoimentos de clientes e um portfólio de trabalhos anteriores; Implementar um formulário de contato funcional para facilitar a comunicação com os visitantes; Otimizar o desempenho do site para garantir uma experiência de usuário fluida e rápida;
                            </p>
                            <div className="project-techs">
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3-alt"></i>
                            </div>
                        </>
                    }
                    desktopImg={project04DI}
                    mobileImg={project04M}
                    link="https://example.com/project-link"
                />
            </section>
        </>
    )
}

export default MyWorkMain;