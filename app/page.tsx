import HeroSection from "@/components/sections/hero/hero-section"
import LandingSection from "@/components/sections/landing-section"
import ServicesSection from "@/components/sections/services-section/services-section";
import LogoLoopSection from "@/components/sections/LogoLoopsection";



export default function Page() {
    return (
        <>
            <main>
                <HeroSection />
                {/*<LogoLoopSection />*/}
                <ServicesSection />
                <LandingSection
                    id="servicios"
                    eyebrow="Seccion 3"
                    title="Servicios que impulsan resultados"
                    body="Presenta los servicios clave y como cada uno aporta valor directo a tu operacion."
                />
                <LandingSection
                    id="automatizacion"
                    eyebrow="Seccion 4"
                    title="Automatizacion sin fricciones"
                    body="Cuenta como integras datos, herramientas y canales para que todo funcione en piloto automatico."
                />
                <LandingSection
                    id="resultados"
                    eyebrow="Seccion 5"
                    title="Resultados medibles desde el dia uno"
                    body="Destaca metricas, casos de uso y el impacto real en el crecimiento de la empresa."
                />
            </main>
        </>
    )
}
