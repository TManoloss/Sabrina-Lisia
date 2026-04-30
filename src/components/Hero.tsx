import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero-section">
            <h1 className="hero-brand">Sabrina Lisia - arquitetura e interiores</h1>

            <div className="hero-images reveal">
                <div className="hero-img-wrap hero-img-1">
                    <Image
                        src="/images/Renders Port/Suite Freijó/Suíte Freijó 1.png"
                        alt="Suíte Freijó — quarto contemporâneo"
                        width={800}
                        height={600}
                        priority
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="hero-img-wrap hero-img-2">
                    <Image
                        src="/images/Renders Port/Sala Praia/Sala praia 1.png"
                        alt="Sala Praia — living com vista mar"
                        width={700}
                        height={600}
                        priority
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            </div>

            <div className="hero-captions">
                <div className="hero-caption">
                    <span className="caption-num">001</span>
                    <span className="caption-dot" />
                    <span className="caption-text">Suíte Freijó</span>
                    <span className="caption-price">Curso Render Class 2025</span>
                </div>
                <div className="hero-caption">
                    <span className="caption-num">002</span>
                    <span className="caption-dot" />
                    <span className="caption-text">Sala da Praia</span>
                    <span className="caption-price">Curso Render Class 2025</span>
                </div>
            </div>
        </section>
    );
}
