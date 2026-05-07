import './TalkToMe.css';

const TalkToMe = () => {
    return (
        <section className="talkTM">
            <div className="title-line">
                <div className="bar-h"></div>
                <h1>Talk to me</h1>
                <div className="bar-h"></div>
            </div>

            <div className="findMe">
                <div className="find-single">
                    <i className="fa-brands fa-linkedin"></i>
                    <p>LinkedIn</p>
                </div>
                <div className="find-single">
                    <i className="fa-brands fa-instagram"></i>
                    <p>Instagram</p>
                </div>
                <div className="find-single">
                    <i className="fa-brands fa-github"></i>
                    <p>GitHub</p>
                </div>
                <div className="find-single">
                    <i className="fa-brands fa-linkedin"></i>
                    <p>Dont know</p>
                </div>
            </div>
        </section>
    )
}

export default TalkToMe;