import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ProductSection from "@/components/home/ProductSection";
import WhyNowSection from "@/components/home/WhyNowSection";
import FoundersSection from "@/components/home/FoundersSection";
import ResponsibleAISection from "@/components/home/ResponsibleAISection";
import FAQSection from "@/components/home/FAQSection";
import InvestorsSection from "@/components/home/InvestorsSection";

export const metadata: Metadata = {
    title: "PsyAIde | AI Infrastructure for Psychiatric Care",
    description: "PsyAIde merges lived psychiatric workflow insight with advanced AI systems training to structure and support clinical diagnostic reasoning.",
};

export default function Home() {
    return (
        <>
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <ProductSection />
            <WhyNowSection />
            <FoundersSection />
            <ResponsibleAISection />
            <FAQSection />
            <InvestorsSection />
        </>
    );
}
