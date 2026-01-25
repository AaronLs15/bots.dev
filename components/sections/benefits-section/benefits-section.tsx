"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Lightning,
    UsersThree,
    Clock,
    CurrencyDollar,
    ChartLineUp,
    ArrowsOutCardinal,
} from "@phosphor-icons/react";

const benefits = [
    {
        icon: Lightning,
        title: "Increased Productivity",
        description:
            "Automate repetitive work so your team can focus on higher‑value decisions and execution.",
    },
    {
        icon: UsersThree,
        title: "Better Customer Experience",
        description:
            "Deliver faster responses and personalized interactions that improve satisfaction and retention.",
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        description:
            "Always‑on systems handle requests around the clock without downtime or delays.",
    },
    {
        icon: CurrencyDollar,
        title: "Cost Reduction",
        description:
            "Reduce manual overhead and optimize resources with smarter, automated workflows.",
    },
    {
        icon: ChartLineUp,
        title: "Data‑Driven Insights",
        description:
            "Turn complex data into clear signals that guide strategy and improve accuracy.",
    },
    {
        icon: ArrowsOutCardinal,
        title: "Scalability & Growth",
        description:
            "Scale operations smoothly without increasing headcount or sacrificing quality.",
    },
];

export default function BenefitsSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const blocks = gsap.utils.toArray<HTMLElement>("[data-animate='block']");
            blocks.forEach((block) => {
                gsap.fromTo(
                    block,
                    { opacity: 0, y: 26 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: block,
                            start: "top 82%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );
            });

            const items = gsap.utils.toArray<HTMLElement>("[data-animate='item']");
            items.forEach((item) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 18 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 86%",
                            toggleActions: "play none none reverse",
                        },
                    },
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="benefits"
            ref={sectionRef}
            className="relative min-h-screen bg-black px-[8vw] py-[12vh] text-white"
            aria-labelledby="benefits-title"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
                <div
                    data-animate="block"
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                >
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                        Benefits
                    </span>
                    <h2
                        id="benefits-title"
                        className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl"
                        style={{ textWrap: "balance" }}
                    >
                        The Key Benefits of Bots.dev for Your Business Growth
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                        Discover how intelligent automation increases efficiency, reduces costs,
                        and keeps your organization moving faster with smarter processes.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;
                        return (
                            <article
                                key={benefit.title}
                                data-animate="item"
                                className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                            >
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(circle_at_50%_100%,rgba(133,207,236,0.3),transparent_70%)] opacity-70"
                                />
                                <div className="relative z-10">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80">
                                        <Icon size={18} weight="bold" aria-hidden="true" />
                                    </span>
                                    <h3 className="mt-4 text-lg font-semibold text-white">
                                        {benefit.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                                        {benefit.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
