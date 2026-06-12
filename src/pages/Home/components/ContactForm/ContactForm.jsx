import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = ({ onClose }) => {
    const formRef = useRef();

    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const sendEmail = (event) => {
        event.preventDefault();

        setIsSending(true);
        setStatusMessage("");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(() => {
                setStatusMessage("Mensagem enviada com sucesso!");
                formRef.current.reset();
            })
            .catch((error) => {
                console.error("Erro ao enviar mensagem:", error);
                setStatusMessage("Erro ao enviar. Tente novamente.");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div className="contact-overlay">
            <section className="contact-modal" aria-label="Formulário de contato">
                <button
                    type="button"
                    className="contact-close"
                    onClick={onClose}
                    aria-label="Fechar formulário"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <h2>Entre em contato</h2>

                <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="from_name">Nome</label>
                        <input
                            id="from_name"
                            name="from_name"
                            type="text"
                            placeholder="Seu nome"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="from_phone">Telefone</label>
                        <input
                            id="from_phone"
                            name="from_phone"
                            type="tel"
                            placeholder="(00) 00000-0000"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="from_email">E-mail</label>
                        <input
                            id="from_email"
                            name="from_email"
                            type="email"
                            placeholder="seuemail@email.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Digite sua mensagem..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="contact-submit"
                        disabled={isSending}
                    >
                        {isSending ? "Enviando..." : "Enviar mensagem"}
                    </button>

                    {statusMessage && (
                        <p className="contact-status">{statusMessage}</p>
                    )}
                </form>
            </section>
        </div>
    );
};

export default ContactForm;