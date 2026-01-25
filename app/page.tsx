import HeroSection from "@/components/sections/hero/hero-section"
import ServicesSection from "@/components/sections/services-section/services-section";
import LogoLoopSection from "@/components/sections/LogoLoopsection";
import ProcessSection from "@/components/sections/process-section/process-section";
import BenefitsSection from "@/components/sections/benefits-section/benefits-section";



export default function Page() {
    return (
        <>
            <main>
                <HeroSection />
                {/*<LogoLoopSection />*/}
                <ServicesSection />
                <ProcessSection />
                <BenefitsSection />
            </main>
        </>
    )
}
