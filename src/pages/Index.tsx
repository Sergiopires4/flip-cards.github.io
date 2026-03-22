import FlipCard from "@/components/FlipCard";
import espressoImg from "@/assets/coffee-espresso.jpg";
import latteImg from "@/assets/coffee-latte.jpg";
import coldbrewImg from "@/assets/coffee-coldbrew.jpg";

const products = [
  {
    image: espressoImg,
    title: "Single Origin Espresso",
    subtitle: "Ethiopian Yirgacheffe",
    price: "€14.90",
    origin: "Ethiopia",
    roast: "Medium",
    flavor: "Citrus",
    description:
      "Hand-picked from the highlands of Yirgacheffe, this single origin delivers a bright, complex cup with notes of bergamot and dark chocolate. Roasted in small batches to preserve its delicate character.",
    details: [
      "Altitude: 1,800–2,200m above sea level",
      "Process: Washed & sun-dried",
      "Best for: Espresso & pour-over",
    ],
  },
  {
    image: latteImg,
    title: "Velvet Blend",
    subtitle: "House Signature",
    price: "€12.50",
    origin: "Colombia",
    roast: "Medium-Dark",
    flavor: "Caramel",
    description:
      "Our signature house blend crafted for silky lattes and creamy cappuccinos. A balanced marriage of Colombian and Brazilian beans that creates a velvety mouthfeel with sweet caramel undertones.",
    details: [
      "Blend: 60% Colombian, 40% Brazilian",
      "Tasting: Caramel, hazelnut, milk chocolate",
      "Best for: Milk-based drinks",
    ],
  },
  {
    image: coldbrewImg,
    title: "Midnight Cold Brew",
    subtitle: "Limited Edition",
    price: "€16.00",
    origin: "Guatemala",
    roast: "Dark",
    flavor: "Smoky",
    description:
      "Steeped for 18 hours in cold filtered water, this Guatemalan single origin yields a smooth, naturally sweet concentrate with deep smoky undertones and a clean finish that lingers.",
    details: [
      "Steep time: 18 hours cold extraction",
      "Strength: 2× concentrate — dilute to taste",
      "Best for: Iced drinks & cocktails",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-16 pb-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">
          Artisan Roasters · Est. 2019
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4 leading-[1.05]">
          Our Collection
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
          Three distinct coffees, each telling its own story. Click a card to discover what makes it special.
        </p>
      </header>

      {/* Cards */}
      <main className="flex flex-wrap justify-center gap-8 px-6 py-12 max-w-[1280px] mx-auto">
        {products.map((product, i) => (
          <FlipCard key={product.title} {...product} delay={i * 100} />
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center py-12 text-xs text-muted-foreground tracking-wide">
        Crafted with care · Roasted to order · Shipped worldwide
      </footer>
    </div>
  );
};

export default Index;
