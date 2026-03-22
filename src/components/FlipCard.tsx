import { useState, useRef, useEffect } from "react";

interface FlipCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  origin: string;
  roast: string;
  flavor: string;
  description: string;
  details: string[];
  delay?: number;
}

const FlipCard = ({
  image,
  title,
  subtitle,
  price,
  origin,
  roast,
  flavor,
  description,
  details,
  delay = 0,
}: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`flip-card w-[360px] h-[440px] cursor-pointer ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-face">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--coffee-overlay-from))/0.9] via-[hsl(var(--coffee-overlay-from))/0.3] to-transparent" />
            <div className="inner-content relative z-10 h-full flex flex-col justify-end p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/60 mb-2 font-medium">
                {subtitle}
              </p>
              <h2 className="font-serif text-3xl text-foreground mb-3 leading-[1.1]">
                {title}
              </h2>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-foreground/10">
                <span className="text-primary font-semibold text-lg">{price}</span>
                <span className="text-xs uppercase tracking-[0.15em] text-foreground/50 font-medium">
                  Click to explore →
                </span>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="flip-card-face flip-card-back bg-card border border-border">
            <div className="inner-content h-full flex flex-col p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl text-foreground">{title}</h3>
                <span className="text-primary font-bold text-lg">{price}</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Origin", value: origin },
                  { label: "Roast", value: roast },
                  { label: "Flavor", value: flavor },
                ].map((item) => (
                  <div key={item.label} className="text-center p-3 rounded-lg bg-secondary">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground block mb-1">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
                {description}
              </p>

              <ul className="space-y-2 mb-6">
                {details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-secondary-foreground">
                    <span className="text-primary mt-0.5">●</span>
                    {detail}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 rounded-lg border-2 border-primary text-primary text-sm 
                           font-semibold uppercase tracking-[0.1em] transition-all duration-200
                           hover:bg-primary hover:text-primary-foreground active:scale-[0.97]"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(false);
                }}
              >
                ← Flip Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
