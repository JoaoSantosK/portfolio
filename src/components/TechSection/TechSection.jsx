import './TechSection.css';

const TechSection = () => {
    return (
        <section className="tech-section">
            <div className="techs-info">
                <h1>Tecnologias</h1>
                <p>Algumas das tecnologias que utilizo para desenvolver projetos da maneira mais eficiente possível, gerando resultados profissionais e condizentes com o requerido, entregando valor e qualidade em cada linha de código.
                </p>
            </div>
            <div className="divisor"></div>
            <div className="techs">
                    <div className="tech-single"><i class="fa-brands fa-linux"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-react"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-angular"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-java"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-js"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-node-js"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-python"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-html5"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-css3-alt"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-github"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-git-alt"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-sass"></i></div>
                    <div className="tech-single"><i class="fa-brands fa-less"></i></div>
            </div>
        </section>
    )
}

export default TechSection;