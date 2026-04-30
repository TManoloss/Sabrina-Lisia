"use client";

interface HeaderProps {
    scrolled: boolean;
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
    goTo: (id: string) => void;
}

export default function Header({ scrolled, menuOpen, setMenuOpen, goTo }: HeaderProps) {
    return (
        <>
            <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
                <nav className="nav-left">
                    <a href="#projetos" onClick={(e) => { e.preventDefault(); goTo("projetos"); }}>projetos</a>
                    <a href="#sobre" onClick={(e) => { e.preventDefault(); goTo("sobre"); }}>sobre</a>
                    <a href="#contato" onClick={(e) => { e.preventDefault(); goTo("contato"); }}>contato</a>
                </nav>
                <nav className="nav-right">
                    <a href="https://www.instagram.com/sabsz.l/" target="_blank" rel="noopener noreferrer">instagram</a>
                    <a href="mailto:biniinha27@gmail.com">e-mail</a>
                </nav>
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span /><span /><span />
                </button>
            </header>

            {/* Mobile nav overlay */}
            <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
                <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Início</a>
                <a href="#projetos" onClick={(e) => { e.preventDefault(); goTo("projetos"); }}>Projetos</a>
                <a href="#sobre" onClick={(e) => { e.preventDefault(); goTo("sobre"); }}>Sobre</a>
                <a href="#contato" onClick={(e) => { e.preventDefault(); goTo("contato"); }}>Contato</a>
            </div>
        </>
    );
}
