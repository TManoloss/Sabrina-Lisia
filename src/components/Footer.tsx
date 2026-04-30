export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <h2 className="footer-logo">Sabrina Lisia</h2>
                <div className="footer-grid">
                    <div className="footer-col">
                        <span className="footer-label">Navegação</span>
                        <a href="#sobre">Sobre</a>
                        <a href="#projetos">Projetos</a>                    </div>
                    <div className="footer-col">
                        <span className="footer-label">Social</span>
                        <a href="https://www.instagram.com/sabsz.l/" target="_blank" rel="noopener noreferrer">Instagram</a>

                    </div>
                    <div className="footer-col">
                        <span className="footer-label">Contato</span>
                        <a href="mailto:biniinha27@gmail.com">biniinha27@gmail.com</a>
                        <a href="https://wa.me/5544998472027" target="_blank">WhatsApp</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} Sabrina Lisia — Todos os direitos reservados.</span>
                <span>Arquitetura & Interiores</span>
            </div>
        </footer>
    );
}
