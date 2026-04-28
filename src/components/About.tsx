interface AboutProps {
    goTo: (id: string) => void;
}

export default function About({ goTo }: AboutProps) {
    return (
        <section className="about-brand" id="sobre">
            <div className="about-brand-label reveal">{"{ sobre }"}</div>
            <div className="about-brand-grid">
                <h2 className="about-brand-title reveal">
                    SABS — é o mundo onde
                    o design se torna arte,
                    e o interior — uma expressão da alma
                </h2>
                <div className="about-brand-right reveal reveal-d1">
                    <p>
                        Cada projeto nasce de uma escuta atenta. Acredito que o design de interiores
                        vai além da estética — é sobre criar ambientes que contam a
                        história de quem os habita. Uno sensibilidade
                        estética com rigor técnico em cada detalhe.
                    </p>
                    <p>
                        Do conceito à entrega, acompanho cada etapa com um olhar minucioso.
                        Trabalho com materiais nobres, soluções funcionais e
                        uma abordagem personalizada que transforma o seu espaço em uma
                        experiência única de morar.
                    </p>
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
