import HeroSection from "@/components/sections/hero/hero-section"
import LandingSection from "@/components/sections/landing-section"
import ServicesSection from "@/components/sections/services-section/services-section";
import ProcessSection from "@/components/sections/process-section/process-section";
import BenefitsSection from "@/components/sections/benefits-section/benefits-section";



export default function Page() {
    return (
        <>
            <main>
                <HeroSection />
                <ServicesSection />
                <ProcessSection />
                <BenefitsSection />
            </main>
        </>
    )
}
