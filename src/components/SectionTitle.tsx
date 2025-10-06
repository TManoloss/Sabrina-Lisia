interface SectionTitleProps {
    subtitle: string;
    title: string;
    centered?: boolean;
  }
  
  export default function SectionTitle({ subtitle, title, centered = false }: SectionTitleProps) {
    return (
      <div className={centered ? 'text-center' : ''}>
        <p className="text-sm uppercase tracking-wider text-balaio-green mb-2 font-medium">
          {subtitle}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-balaio-dark mb-4">
          {title}
        </h2>
      </div>
    );
  }