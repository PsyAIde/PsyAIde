"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import {
  CheckCircle2,
  Stethoscope,
  Briefcase,
  Database,
  Search,
  ClipboardList,
  Cpu,
  Layers,
  Code
} from "lucide-react";
import founderAthika from "@/assets/founder-athika.jpg";
import founderSarthak from "@/assets/founder-sarthak.jpg";

const founders = [
  {
    name: "Athika Karolia",
    role: "Founder & CEO",
    focus: "Clinical Psychology • Data Science",
    bio: "Clinical operator turned data scientist building infrastructure for psychiatric reasoning.",
    image: founderAthika,
    details: [
      {
        icon: Stethoscope,
        title: "Deep Clinical Training",
        description: "Master's in Psychology (MSU), with clinical training encompassing neuropsychology, mood disorders, trauma, and TBI. Accumulated 3,000+ hours of clinical assessment & treatment exposure."
      },
      {
        icon: Briefcase,
        title: "Operational Leadership in Behavioral Health",
        description: "Served as Program Administrator & Clinical Program Manager, overseeing multidisciplinary teams, managing budgets, and directing high-acuity patient care."
      },
      {
        icon: Search,
        title: "Research & Data Background",
        description: "Currently pursuing Data Science at Harvard University. Experience as a Lab Director, with published research presentations at APA and APS conferences."
      },
      {
        icon: ClipboardList,
        title: "Founder-Market Fit",
        description: "Gained firsthand exposure to diagnostic complexity, challenges in longitudinal care, and the significant documentation burden prevalent in psychiatric settings."
      }
    ]
  },
  {
    name: "Sarthak Baral",
    role: "Co-Founder & CTO",
    focus: "AI Systems • Data Architecture",
    bio: "Systems-focused ML engineer building scalable diagnostic intelligence infrastructure.",
    image: founderSarthak,
    details: [
      {
        icon: Cpu,
        title: "Strong Technical Foundation",
        description: "BSc Computer Science (King's College London) | ALM Data Science (Harvard, GPA 3.9) | Coursework in Advanced ML, Deep Learning, Data Systems."
      },
      {
        icon: Layers,
        title: "Systems & Infrastructure Builder",
        description: "Designed main-memory columnar database engine in C with multi-core parallelism and custom execution layer | Built persistent storage, indexing, and optimized query pipelines from scratch."
      },
      {
        icon: Database,
        title: "AI & LLM Research Experience",
        description: "Undergraduate research fellow in knowledge engineering for LLMs | Developed ontology validation pipelines and LLM-driven refinement frameworks | Experience with GPT-based systems and structured reasoning."
      },
      {
        icon: Code,
        title: "Full-Stack & Backend Engineering",
        description: "Built database-backed web applications (Django, PostgreSQL, REST APIs) | Experience with Docker, AWS, scalable backend deployment."
      }
    ]
  },
];

const FoundersSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-20 text-balance">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Our Minds
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
            The Leadership Driving Innovation
          </h2>
        </AnimatedSection>

        <div className="flex flex-col gap-24 max-w-7xl mx-auto">
          {founders.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.2}>
              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-stretch`}>
                {/* Left: Content and Highlights */}
                <div className="flex-1 space-y-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
                        {f.name}
                      </h3>
                      <div className="text-green-500">
                        <CheckCircle2 size={24} fill="currentColor" className="text-white ring-2 ring-green-500 rounded-full" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-lg font-heading font-bold text-primary">{f.role}</div>
                      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{f.focus}</div>
                    </div>
                    <p className="text-lg text-slate-600 font-body leading-relaxed border-l-2 border-slate-200 pl-6 italic quote-accent">
                      "{f.bio}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    {f.details.map((detail, j) => (
                      <div key={j} className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group h-full">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <detail.icon size={20} />
                        </div>
                        <h4 className="text-[15px] font-heading font-bold text-slate-900 leading-snug">
                          {detail.title}
                        </h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed font-body">
                          {detail.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Large Portrait */}
                <div className="lg:w-2/5 min-h-[500px]">
                  <div className="relative w-full h-full min-h-[500px] lg:min-h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-white border-[8px] group">
                    <Image
                      src={f.image}
                      alt={`${f.name} — ${f.role}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
