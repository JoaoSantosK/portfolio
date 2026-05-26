import './ProjectCard.css';
// TODO: Considerar carrosel para mostrar as imagens dos projetos, ao invés de mostrar as duas imagens (desktop e mobile) fixas; Ajustar estilização do btn "Ver no GitHub"; Adicionar ícone do GitHub ao botão (para ter uma clareza melhor); Adicionar mais informações sobre o projeto (techs usadas, data de criação, etc); Adicionar animação de hover no card (ex: zoom in nas imagens, mudança de cor do fundo, etc) <- Talvez; Testar com imagens reais e visualizar dinamismo da página em si; Gerenciar conteúdo a ser colocado/indexado na página (finalizar o conteúdo, praticamente);

const ProjectCard = ({ title, description, desktopImg, mobileImg, link, siteLink }) => {
    return (
        <div className="project-card">
            <div className={`project-images ${!mobileImg ? "single-image" : ""}`}>
                <img
                    src={desktopImg}
                    alt={`${title} desktop view`}
                    className="desktop-img"
                />

                {mobileImg && (
                    <img
                        src={mobileImg}
                        alt={`${title} mobile view`}
                        className="mobile-img"
                    />
                )}
            </div>

            <div className="project-info">
                <h1>{title}</h1>
                {description}
                
                <div className="project-actions">
                    {siteLink && (
                        <a
                            href={siteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            Ver site
                        </a>
                    )}

                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        Ver GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;