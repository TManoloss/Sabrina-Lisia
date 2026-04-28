export default function Contact() {
    return (
        <section className="newsletter" id="contato">
            <div className="newsletter-inner">
                <h2 className="newsletter-heading">
                    Tem um projeto em mente? Vamos conversar.
                </h2>
                <div className="newsletter-right">
                    <p className="newsletter-desc">
                        Estou pronta para ouvir seus desejos e transformar o seu interior em
                        realidade. Entre em contato para agendarmos uma conversa inicial
                        — sem compromisso.
                    </p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="seu melhor e-mail" />
                        <button type="submit">Enviar</button>
                    </form>
                    <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                    >
                        ou fale pelo WhatsApp →
                    </a>
                </div>
            </div>
        </section>
    );
}
