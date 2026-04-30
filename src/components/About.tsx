interface AboutProps {
    goTo: (id: string) => void;
}

export default function About({ goTo }: AboutProps) {
    return (
        <section className="about-brand" id="sobre">
            <div className="about-brand-label reveal">{"{ sobre }"}</div>
            <div className="about-brand-grid">
                <h2 className="about-brand-title reveal">
                    Sabrina Lisia — Arquitetura e interiores com foco no detalhe, na funcionalidade e na materialização de espaços autênticos.
                </h2>
                <div className="about-brand-right reveal reveal-d1">
                    <p>
                        Sou Arquiteta com foco em design de interiores e visualização arquitetônica. Minha trajetória é movida pela busca constante em compreender como o ambiente construído impacta a experiência humana e as dinâmicas cotidianas. Desenvolvo projetos que unem estética apurada a soluções funcionais, sempre priorizando o rigor técnico e o detalhamento minucioso.
                    </p>
                    <p>
                        Com experiência no desenvolvimento de projetos residenciais e comerciais, domino ferramentas essenciais de representação e modelagem, buscando sempre a excelência na materialização de conceitos. Acredito na arquitetura como uma ferramenta de transformação e acolhimento, onde cada detalhe é planejado para refletir a identidade e as necessidades únicas de cada morador.
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
