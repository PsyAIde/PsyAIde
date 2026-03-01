"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import founderAthika from "@/assets/founder-athika.jpg";
import founderSarthak from "@/assets/founder-sarthak.jpg";

const founders = [
  {
    name: "Athika Karolia",
    role: "Founder & CEO",
    focus: "Clinical Psychology × Data Science",
    bio: "Clinical operator turned data scientist building infrastructure for psychiatric reasoning.",
    image: founderAthika,
    highlights: [
      "Master's in Psychology (MSU), 3,000+ hours clinical assessment & treatment",
      "Program Administrator & Clinical Program Manager in behavioral health",
      "Currently pursuing Data Science at Harvard University",
    ],
  },
  {
    name: "Sarthak Baral",
    role: "Co-Founder & CTO",
    focus: "AI Systems × Data Architecture",
    bio: "Systems-focused ML engineer building scalable diagnostic intelligence infrastructure.",
    image: founderSarthak,
    highlights: [
      "BSc Computer Science (King's College London), ALM Data Science (Harvard, 3.9 GPA)",
      "Built main-memory columnar database engine with multi-core parallelism",
      "AI & LLM research fellow with experience in GPT-based systems",
    ],
  },
];

const FoundersSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
            Meet the Founders
          </h2>
          <p className="mt-6 text-muted-foreground font-body leading-relaxed">
            Together, we combine domain insight with technical execution to build diagnostic intelligence that is clinically grounded, scalable, and defensible.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="glass-card rounded-xl p-8 h-full flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/20 mb-5 relative">
                  <Image
                    src={f.image}
                    alt={`${f.name} — ${f.role}`}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">
                  {f.name}
                </h3>
                <p className="text-sm font-medium font-body text-primary mt-1">
                  {f.role}
                </p>
                <p className="text-xs font-body text-muted-foreground mt-1">
                  {f.focus}
                </p>
                <p className="text-sm font-body text-muted-foreground mt-4 leading-relaxed">
                  {f.bio}
                </p>
                <ul className="mt-4 space-y-2 text-left w-full">
                  {f.highlights.map((h, j) => (
                    <li key={j} className="text-xs font-body text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
