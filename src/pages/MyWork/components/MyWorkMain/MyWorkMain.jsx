import './MyWorkMain.css';
import ProjectCard from '../ProjectCard/ProjectCard';

//Project images
import project01DI from '../../assets/projeto01/api-js.png'; // D
import project02DI from '../../assets/projeto02/cardapio-delivery-pj.png'; // D
import project03DI from '../../assets/projeto03/java-program-project.png'; // D
import project04DI from '../../assets/projeto04/agencia-marketing-project.png'; // D
import project04M from '../../assets/projeto04/agencia-marketing-projectM.png'; // M
import project05M from '../../assets/projeto05/veiculos-projeto01.png'; // M
//import project05M02 from '../../assets/projeto06/veiculos-projeto02.png'; // M
//import project05M02 from '../../assets/projeto07/veiculos-projeto03.png'; // M

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
                                <i className="tech-icon prisma-icon"></i>
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
                                Projeto de cardápio digital desenvolvido com JavaScript. Permite aos usuários navegar pelo cardápio, adicionar itens ao carrinho e realizar pedidos. O backend foi desenvolvido com Express.js.
                            </p>
                            <p>
                                Atualizações futuras: Aperfeiçoar front-end; Adição de funcionalidades como personalização de pedidos; Sistema de pagamento online; Sistema de avaliação e feedback dos clientes; Gerenciamento de estoque para os administradores;
                            </p>
                            <div className="project-techs">
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3-alt"></i>
                                <i className="fa-brands fa-js"></i>
                                <i className="fa-brands fa-openai"></i>
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
                    link="https://github.com/JoaoSantosK/Agencia-marketing"
                    siteLink="https://joaosantosk.github.io/Agencia-marketing/"
                />
                <ProjectCard
                    title="Site para venda de carros"
                    description={
                        <>
                            <p>
                                Desenvolvido como um projeto de estudo, este site para venda de carros foi criado através de conceitos de design e responsividade.
                            </p>
                            <p>
                                
                            </p>
                            <div className="project-techs">
                                <i class="fa-brands fa-html5"></i>
                                <i class="fa-brands fa-css3-alt"></i>
                            </div>
                        </>
                    }
                    desktopImg={project05M}
                    mobileImg={project05M}
                    link="https://github.com/JoaoSantosK/Loja-de-venda-veicular"
                    siteLink="https://joaosantosk.github.io/Loja-de-venda-veicular/"
                />
            </section>
        </>
    )
}

export default MyWorkMain;