"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProjetoBySlug, ProjetoData } from "@/data/projetos";
import BeforeAfter from "@/components/BeforeAfter";

export default function ProjetoPage() {
    const params = useParams();
    const slug = params.slug as string;
    const projeto = getProjetoBySlug(slug);

    const [selectedImg, setSelectedImg] = useState(0);
    const [showBeforeAfter, setShowBeforeAfter] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("visible");
                }),
            { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
        );
        document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, [showBeforeAfter]);

    if (!projeto) {
        return (
            <div className="projeto-not-found">
                <h1>Projeto não encontrado</h1>
                <Link href="/">← Voltar ao início</Link>
            </div>
        );
    }

    return (
        <>
            {/* Back navigation */}
            <header className="projeto-header">
                <Link href="/" className="projeto-back">
                    ← voltar
                </Link>
                <span className="projeto-header-brand">sabs</span>
            </header>

            {/* Hero cover */}
            <section className="projeto-hero">
                <div className="projeto-hero-img">
                    <Image
                        src={projeto.images[selectedImg]}
                        alt={projeto.name}
                        width={1920}
                        height={1080}
                        priority
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div className="projeto-hero-overlay">
                    <div className="projeto-hero-info reveal">
                        <span className="projeto-hero-tipo">{projeto.tipo}</span>
                        <h1 className="projeto-hero-title">{projeto.name}</h1>
                        <p className="projeto-hero-local">
                            {projeto.local} · {projeto.ano}
                        </p>
                    </div>
                </div>
            </section>

            {/* Thumbnails */}
            <section className="projeto-thumbs reveal">
                {projeto.images.map((img, i) => (
                    <button
                        key={i}
                        className={`projeto-thumb ${i === selectedImg ? "active" : ""}`}
                        onClick={() => setSelectedImg(i)}
                    >
                        <Image
                            src={img}
                            alt={`${projeto.name} — vista ${i + 1}`}
                            width={200}
                            height={150}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </button>
                ))}
            </section>

            {/* Antes e Depois Toggle */}
            {projeto.imagesAntes && projeto.imagesAntes.length > 0 && (
                <div className="before-after-toggle-container reveal">
                    <button 
                        className={`before-after-toggle-btn ${showBeforeAfter ? 'active' : ''}`}
                        onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                    >
                        {showBeforeAfter ? "Esconder Antes e Depois" : "Ver Antes e Depois"}
                    </button>
                </div>
            )}
 
            {/* Antes e Depois Section */}
            {showBeforeAfter && projeto.imagesAntes && projeto.imagesAntes.length > 0 && (
                <section className="before-after-section">
                    <h2 className="projeto-section-title reveal">Antes & Depois</h2>
                    <div className="before-after-grid">
                        {projeto.imagesAntes.map((beforeImg, i) => (
                            <div key={i} className="before-after-wrapper">
                                <BeforeAfter 
                                    before={beforeImg} 
                                    after={projeto.images[i] || projeto.cover} 
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Content */}
            <section className="projeto-content">
                <div className="projeto-content-grid">
                    {/* Left: descriptions */}
                    <div className="projeto-texts">
                        <h2 className="projeto-section-title reveal">Sobre o Projeto</h2>
                        {projeto.descricao.map((p, i) => (
                            <p
                                key={i}
                                className={`projeto-paragraph reveal reveal-d${Math.min(i + 1, 3)}`}
                            >
                                {p}
                            </p>
                        ))}
                    </div>

                    {/* Right: detail cards */}
                    <div className="projeto-details reveal reveal-d1">
                        <h3 className="projeto-details-title">Ficha Técnica</h3>
                        <div className="projeto-details-list">
                            {projeto.detalhes.map((d, i) => (
                                <div key={i} className="projeto-detail-item">
                                    <span className="projeto-detail-label">{d.label}</span>
                                    <span className="projeto-detail-value">{d.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery grid */}
            <section className="projeto-gallery">
                <h2 className="projeto-section-title reveal">Galeria</h2>
                <div className="projeto-gallery-grid">
                    {projeto.images.map((img, i) => (
                        <div
                            key={i}
                            className={`projeto-gallery-item reveal reveal-d${Math.min(i + 1, 3)}`}
                        >
                            <Image
                                src={img}
                                alt={`${projeto.name} — imagem ${i + 1}`}
                                width={800}
                                height={600}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="projeto-cta reveal">
                <h2>Gostou deste projeto?</h2>
                <p>
                    Entre em contato para conversarmos sobre como posso transformar sua
                    ideia em realidade.
                </p>
                <div className="projeto-cta-links">
                    <a
                        href="https://wa.me/5544998472027"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projeto-cta-btn"
                    >
                        Falar pelo WhatsApp
                    </a>
                    <Link href="/#contato" className="projeto-cta-link">
                        ou envie um e-mail →
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="site-footer">
                <div className="footer-inner">
                    <span>© 2024 SABS Arquitetura</span>
                    <div className="footer-links">
                        <a
                            href="https://www.instagram.com/sabsz.l/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                        <a href="#">Pinterest</a>
                        <a href="#">LinkedIn</a>
                        <a href="mailto:biniinha27@gmail.com">biniinha27@gmail.com</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
