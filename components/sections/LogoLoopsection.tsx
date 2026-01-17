import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import LogoLoop from "@/components/LogoLoop";

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function LogoLoopSection() {
    return (
        <>
        <div
            style={{
                height: "200px",
                position: "relative",
                background: "#050607",
                color: "#ffffff",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
            }}
        >
            <LogoLoop
                logos={techLogos}
                speed={58}
                direction="left"
                logoHeight={60}
                gap={80}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
            />
        </div>
        </>
    );
}
 

