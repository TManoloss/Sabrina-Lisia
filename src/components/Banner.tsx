import Image from "next/image";

interface BannerProps {
    src?: string;
    alt?: string;
    text: string;
}

export default function Banner({ src, alt, text }: BannerProps) {
    return (
        <div className={`banner reveal ${!src ? 'banner-solid' : ''}`}>
            {src && (
                <Image
                    src={src}
                    alt={alt || ""}
                    width={1920}
                    height={1080}
                    style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                />
            )}
            <div className="banner-overlay">
                <div className="banner-text">
                    <h2>{text}</h2>
                </div>
            </div>
        </div>
    );
}
