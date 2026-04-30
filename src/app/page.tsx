"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Banner from "@/components/Banner";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projetos as projetosData } from "@/data/projetos";

const projetos = projetosData.map((p) => ({
  slug: p.slug,
  img: p.cover,
  name: p.name,
  tipo: p.tipo,
  ano: p.ano,
}));

const featuredSlugs = ["suite-freijo", "escritorio-jeanine", "area-externa-felipe", "suite-vanessa"];
const destaques = featuredSlugs.map(slug => {
  const p = projetosData.find(item => item.slug === slug)!;
  return {
    slug: p.slug,
    img: p.cover,
    name: p.name,
    desc: p.descricaoCurta,
    local: `${p.local} · ${p.ano}`,
  };
});

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} goTo={goTo} />
      <Hero />
      <div className="smooth-divider reveal" />
      <About goTo={goTo} />
      <Banner
        text='"Cada projeto é único — assim como quem o habita"'
      />
      <Projects projetos={projetos} />

      <Footer />
    </>
  );
}
