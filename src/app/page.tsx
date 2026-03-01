import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import ProductSection from "@/components/home/ProductSection";
import FAQSection from "@/components/home/FAQSection";
import InvestorsSection from "@/components/home/InvestorsSection";

export default function Home() {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <ProductSection />
            <InvestorsSection />
            <FAQSection />
        </div>
    );
}
