"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tasks = [
    { title: "Payment reminder", meta: "Sent to selected clients", tone: "accent" },
    { title: "Payroll management", meta: "Due on 2nd July", tone: "accent" },
    { title: "Employee tracking", meta: "2 days ago", tone: "muted" },
    { title: "Social media post", meta: "Canceled by user", tone: "muted" },
];

const services = [
    {
        label: "ERP",
        title: "Enterprise Resource Planning",
        description:
            "Unify your inventory, finance, and operations in one system with dashboards that stay in sync.",
        detail:
            "Replace spreadsheet chaos with clean approvals, forecasting, and visibility across teams.",
    },
    {
        label: "CRM",
        title: "Customer Relationship Management",
        description:
            "Track every lead, deal, and interaction in one timeline so your team never loses context.",
        detail:
            "Automate follow-ups, reminders, and notes to keep pipeline momentum moving.",
    },
    {
        label: "POS",
        title: "Point of Sale",
        description:
            "Modern checkout experiences that keep inventory, sales, and customer data aligned in real time.",
        detail:
            "Support multi-location reporting and reconciliation without manual overhead.",
    },
    {
        label: "E-Commerce",
        title: "E-Commerce Platforms",
        description:
            "Conversion-focused storefronts with personalized catalogs, smart merchandising, and automation.",
        detail:
            "Integrate payments, shipping, and marketing flows so your store runs end to end.",
    },
    {
        label: "Web Design",
        title: "Web Design & UX",
        description:
            "Premium web experiences that balance storytelling with performance and technical clarity.",
        detail:
            "Launch faster sites with UX strategy, SEO-ready structure, and clean visuals.",
    },
    {
        label: "Consulting",
        title: "Process & Technology Consulting",
        description:
            "Map workflows, identify bottlenecks, and design automation roadmaps aligned with business goals.",
        detail:
            "Translate strategy into systems, timelines, and measurable outcomes your teams can execute.",
    },
];

const automationTags = ["ERP", "CRM", "POS"];
const growthTags = ["E-Commerce", "Web Design"];

export default function ServicesSection() {
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
            id="mejora"
            ref={sectionRef}
            className="relative min-h-screen bg-black px-[8vw] py-[12vh] text-white"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-24">
                <div data-animate="block" className=" text-center ">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                        Our Services
                    </span>
                    <h2
                        className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl"
                        style={{ textWrap: "balance" }}
                    >
                        Solutions That Take Your Business to the Next Level
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
<<<<<<< HEAD
                        We design, develop, and implement tools that help you work
=======
                        We design, develop, and implement automation tools that help you work
>>>>>>> origin/main
                        smarter, move faster, and keep teams aligned from the front desk to the
                        boardroom.
                    </p>
                </div>

                <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
                    <div data-animate="block" className="text-center lg:text-left">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                            AI Assistant
                        </span>
                        <h3
                            className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl"
                            style={{ textWrap: "balance" }}
                        >
                            Delegate Daily Tasks
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                            Move calendar management, reporting, and routine approvals into AI
                            workflows that keep your teams moving without bottlenecks.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                            Keep operations consistent across locations while your team focuses on
                            higher-impact decisions.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                            {automationTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div data-animate="block" className="relative">
                        <div
                            aria-hidden
                            className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_20%_20%,rgba(133,207,236,0.2),transparent_55%)] opacity-80 blur-2xl"
                        />
                        <div className="relative rounded-[28px] border border-white/10 bg-white/4 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                            <div className="rounded-4xl border border-white/10 bg-black/40 p-5">
                                <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                                        All Tasks
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                                        Waiting for approval
                                    </span>
                                </div>
                                <ul className="mt-5 space-y-3">
                                    {tasks.map((task) => (
                                        <li
                                            key={task.title}
                                            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50">
                                                    <span className="h-2 w-2 rounded-full bg-white/40" />
                                                </span>
                                                <div>
                                                    <p className="text-sm text-white/90">
                                                        {task.title}
                                                    </p>
                                                    <p className="text-xs text-white/50">
                                                        {task.meta}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                                <span
                                                    className={`h-2.5 w-2.5 rounded-full ${
                                                        task.tone === "accent"
                                                            ? "bg-[#85cfec]"
                                                            : "bg-white/30"
                                                    }`}
                                                />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
                    <div data-animate="block" className="relative">
                        <div
                            aria-hidden
                            className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_80%_20%,rgba(133,207,236,0.18),transparent_60%)] opacity-80 blur-2xl"
                        />
                        <div className="relative rounded-[28px] border border-white/10 bg-white/4 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                            <div className="rounded-4xl border border-white/10 bg-black/40 p-5">
                                <div className="flex items-center justify-between text-sm text-white/60">
                                    <span>Generate</span>
                                    <span
                                        aria-hidden="true"
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80"
                                    >
                                        &gt;
                                    </span>
                                </div>
                                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                                    Add document
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/50">
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                                        Analyze
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                                        Generate Image
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                                        Research
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-animate="block" className="text-center lg:text-left">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                            Sales & Marketing
                        </span>
                        <h3
                            className="mt-6 text-3xl font-semibold text-white md:text-4xl"
                            style={{ textWrap: "balance" }}
                        >
                            Expedite Sales Growth
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                            Support outreach, nourishment, and customer engagement with automation
                            that feels human and consistent across every channel.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                            Turn attention into revenue with tailored journeys, analytics, and
                            content that scales with demand.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                            {growthTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div data-animate="block" className="border-t border-white/10 pt-12">
                    <div className="grid gap-12 md:grid-cols-2">
                        {services.map((service) => (
                            <div
                                key={service.label}
                                data-animate="item"
                                className="border-l border-white/10 pl-6"
                            >
                                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                                    {service.label}
                                </p>
                                <h4
                                    className="mt-3 text-2xl font-semibold text-white"
                                    style={{ textWrap: "balance" }}
                                >
                                    {service.title}
                                </h4>
                                <p className="mt-3 text-base leading-relaxed text-white/70">
                                    {service.description}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/60">
                                    {service.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
