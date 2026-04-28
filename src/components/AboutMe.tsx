import Image from "next/image";

export default function AboutMe() {
    return (
        <section className="about-us" id="sobre-mim">
            <h2 className="about-us-title reveal">Sobre Mim</h2>
            <p className="about-us-subtitle reveal">quem sou</p>
            <div className="about-us-content">
                <div className="about-us-left reveal">
                    <div className="about-us-main-img">
                        <Image
                            src="/images/sabrina.png"
                            alt="Sabrina — designer de interiores"
                            width={600}
                            height={800}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                </div>
                <div className="about-us-right reveal reveal-d1">
                    <div className="about-us-sm-img">
                        <Image
                            src="/images/3.png"
                            alt="Projeto paisagístico"
                            width={400}
                            height={400}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className="about-us-sm-img">
                        <Image
                            src="/images/carrocel/1.png"
                            alt="Projeto de interiores"
                            width={400}
                            height={400}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className="about-us-text">
                        <p>
                            Sou Sabrina, designer de interiores apaixonada por transformar casas em
                            experiências. Desde cedo, sempre fui encantada pela forma como os
                            ambientes influenciam nossas emoções e rotinas. Essa paixão guia
                            cada projeto de interiores que desenvolvo — com escuta, sensibilidade e
                            atenção a cada detalhe.
                        </p>
                        <p>
                            Acredito que o design vai muito além da decoração: é sobre criar
                            espaços que acolhem, inspiram e refletem quem você é. Meu
                            processo é sempre colaborativo — da primeira conversa ao
                            acompanhamento final, cada decisão é tomada em conjunto com
                            você.
                        </p>
                        <div className="location">📍 São Paulo, SP</div>

                        <div className="tools-section">
                            <span className="tools-label">Ferramentas</span>
                            <div className="tools-grid">
                                <div className="tool-item">
                                    <span className="tool-icon">📐</span>
                                    <span className="tool-name">SketchUp</span>
                                </div>
                                <div className="tool-item">
                                    <span className="tool-icon">📄</span>
                                    <span className="tool-name">Layout</span>
                                </div>
                                <div className="tool-item">
                                    <span className="tool-icon">🎨</span>
                                    <span className="tool-name">V-Ray</span>
                                </div>
                                <div className="tool-item">
                                    <span className="tool-icon">✏️</span>
                                    <span className="tool-name">AutoCAD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
