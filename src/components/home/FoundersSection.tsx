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

        <div className="flex flex-col gap-36 max-w-6xl mx-auto">
          {founders.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.2}>
              <div className="space-y-12">
                {/* 1. Header Row: Name, Designation & Bio */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <h3 className="text-[32px] md:text-[40px] font-heading font-bold text-slate-900 tracking-tight">
                        {f.name}
                      </h3>
                      <div className="w-5 h-5 rounded-full border-2 border-sky-300/30" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-lg font-heading font-bold text-slate-800">{f.role}</div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] font-body">
                        {f.focus}
                      </div>
                    </div>

                    <blockquote className="mt-5 border-l-2 border-sky-200 pl-6 italic text-slate-500 text-lg font-body leading-relaxed max-w-4xl">
                      "{f.bio}"
                    </blockquote>
                  </div>
                </div>

                {/* 2. Content Layout: 2x2 Grid and Large Image */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-stretch">

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {f.details.map((detail, j) => (
                      <div key={j} className="p-8 rounded-3xl bg-white border border-slate-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-500 group">
                        <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-clinical-blue group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 mb-6">
                          <detail.icon size={18} strokeWidth={2.5} />
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-[18px] font-serif font-bold text-slate-900 leading-snug">
                            {detail.title}
                          </h4>
                          <p className="text-[15px] text-slate-500 leading-relaxed font-body">
                            {detail.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Large Profile Image */}
                  <div className="flex justify-center">
                    <div className="relative w-full h-full min-h-[450px] rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-sm group">
                      <Image
                        src={f.image}
                        alt={`${f.name} — ${f.role}`}
                        fill
                        className={`object-cover ${i === 1 ? 'object-center' : 'object-top'} transition-transform duration-1000 group-hover:scale-105`}
                        sizes="(max-width: 1024px) 100vw, 340px"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Separator */}
              {/* {i < founders.length - 1 && (
                <div className="mt-32 mb-32 border-t border-slate-100/80 max-w-full" />
              )} */}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
