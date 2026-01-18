import HeroSection from "@/components/sections/hero/hero-section"
import LandingSection from "@/components/sections/landing-section"
import ServicesSection from "@/components/sections/services-section/services-section";
import LogoLoopSection from "@/components/sections/LogoLoopsection";
import ProcessSection from "@/components/sections/process-section/process-section";



export default function Page() {
    return (
        <>
            <main>
                <HeroSection />
                {/*<LogoLoopSection />*/}
                <ServicesSection />
                <ProcessSection />
                <LandingSection
                    id="resultados"
                    eyebrow="Seccion"
                    title="Resultados medibles desde el dia uno"
                    body="Destaca metricas, casos de uso y el impacto real en el crecimiento de la empresa."
                />
            </main>
        </>
    )
}
