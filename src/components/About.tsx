interface AboutProps {
    goTo: (id: string) => void;
}

export default function About({ goTo }: AboutProps) {
    return (
        <section className="about-brand" id="sobre">
            <div className="about-brand-label reveal">{"{ sobre }"}</div>
            <div className="about-brand-grid">
                <h2 className="about-brand-title reveal">
                    Sabrina Lisia — Arquitetura e interiores para quem busca espaços autênticos, cheios de cor, personalidade e vida.
                </h2>
                <div className="about-brand-right reveal reveal-d1">
                    <p>
                        Sou arquiteta com foco em design de interiores e visualização arquitetônica, mas, acima de tudo, sou apaixonada por criar espaços que tenham alma. Minha trajetória é movida pela vontade de entender como o lugar onde vivemos transforma o nosso humor e as nossas rotinas. Não tenho medo de ousar: adoro brincar com cores, listras e mobiliários inusitados para criar projetos autênticos que fujam do óbvio.
                    </p>
                    <p>
                        Com experiência em projetos residenciais e comerciais, uno o rigor técnico das ferramentas de modelagem a uma estética vibrante e cheia de personalidade. Acredito que a arquitetura deve ser uma ferramenta de acolhimento e expressão — um processo onde cada detalhe é planejado para que você se reconheça em cada metro quadrado.
                    </p>

                    <div className="about-tools reveal reveal-d2">
                        <span className="tools-label">Ferramentas:</span>
                        <div className="tools-inline">
                            <span className="tool-tag">SketchUp</span>
                            <span className="tool-tag">Layout</span>
                            <span className="tool-tag">V-Ray</span>
                            <span className="tool-tag">AutoCAD</span>
                        </div>
                    </div>

                    <a
                        href="#projetos"
                        className="about-brand-link"
                        onClick={(e) => { e.preventDefault(); goTo("projetos"); }}
                    >
                        ver projetos
                    </a>
                </div>
            </div>
        </section>
    );
}
