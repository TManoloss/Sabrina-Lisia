import Image from "next/image";
import Link from "next/link";

export interface Projeto {
    slug: string;
    img: string;
    name: string;
    tipo: string;
    ano: string;
}

interface ProjectsProps {
    projetos: Projeto[];
}

export default function Projects({ projetos }: ProjectsProps) {
    return (
        <section className="new-in" id="projetos">
            <div className="new-in-header reveal">
                <h2 className="new-in-title">Projetos</h2>
                <a href="#" className="new-in-link">ver portfólio completo →</a>
            </div>
            <div className="new-in-grid">
                {projetos.map((p, i) => (
                    <Link
                        href={`/projetos/${p.slug}`}
                        key={i}
                        className={`product-card reveal reveal-d${(i % 3) + 1}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div className="product-card-img">
                            <Image
                                src={p.img}
                                alt={p.name}
                                width={500}
                                height={500}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div className="product-card-name">{p.name}</div>
                        <div className="product-card-sub">{p.tipo} · {p.ano}</div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
