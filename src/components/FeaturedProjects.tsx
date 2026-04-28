import Image from "next/image";
import Link from "next/link";

export interface Destaque {
    slug: string;
    img: string;
    name: string;
    desc: string;
    local: string;
}

interface FeaturedProjectsProps {
    destaques: Destaque[];
}

export default function FeaturedProjects({ destaques }: FeaturedProjectsProps) {
    return (
        <section className="featured" id="destaque">
            <h2 className="featured-title reveal">Projetos em<br />Destaque</h2>
            <p className="featured-subtitle reveal">ver todos</p>
            <div className="featured-grid">
                {destaques.map((p, i) => (
                    <Link
                        href={`/projetos/${p.slug}`}
                        key={i}
                        className={`featured-card reveal reveal-d${Math.min(i + 1, 3)}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div className="featured-card-img">
                            <Image
                                src={p.img}
                                alt={p.name}
                                width={400}
                                height={400}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <div className="featured-card-name">{p.name}</div>
                        <div className="featured-card-desc">{p.local}</div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
