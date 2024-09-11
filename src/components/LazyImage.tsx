import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
    src: string;
    alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
    const [isInView, setIsInView] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect(); 
                    }
                });
            },
            {
                threshold: 0.1, 
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <img
            ref={imageRef}
            src={isInView ? src : ""}
            alt={alt}
            style={{ width: "100%", height: "auto", objectFit: "cover", opacity: isInView ? 1 : 0.5 }}
            loading="lazy"
        />
    );
};

export default LazyImage;
