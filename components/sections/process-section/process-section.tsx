"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processSteps = [
    {
        step: "Step 1",
        title: "Smart Analyzing",
        description:
            "We assess your workflows, map dependencies, and identify AI opportunities to remove friction.",
        demo: "analysis",
    },
    {
        step: "Step 2",
        title: "Development",
        description:
            "We design systems and build reliable pipelines tailored to your operations.",
        demo: "development",
    },
    {
        step: "Step 3",
        title: "Seamless Integration",
        description:
            "We integrate out solution to your stack without disruption, so teams can adopt quickly.",
        demo: "integration",
    },
    {
        step: "Step 4",
        title: "Continuous Optimization",
        description:
            "We monitor performance, improve outputs, and keep workflows evolving with your goals.",
        demo: "optimization",
    },
];

const analysisChecks = [
    "System check",
    "Process check",
    "Speed check",
    "Manual work",
    "Repetitive task",
];

const optimizationItems = [
    { label: "Chatbot system", detail: "Efficiency up by 20%" },
    { label: "Workflow system", detail: "Update available" },
    { label: "Sales system", detail: "Up to date" },
];

const typingConfig = {
    charDelay: 0.035,
    charDuration: 0.05,
    linePause: 0.2,
    indentPx: 12,
};

const codeLines = [
    {
        indent: 0,
        segments: [
            { text: "class ", className: "text-white/40" },
            { text: "Automation", className: "text-[#85cfec]" },
            { text: ":", className: "text-white/40" },
        ],
    },
    {
        indent: 1,
        segments: [{ text: "def run(self, payload):", className: "text-white/50" }],
    },
    {
        indent: 2,
        segments: [{ text: "result = model.predict(payload)", className: "text-white/70" }],
    },
    {
        indent: 2,
        segments: [{ text: "return format_result(result)", className: "text-white/70" }],
    },
];

const typedLines = (() => {
    let time = 0;
    return codeLines.map((line) => {
        const segments = line.segments.map((segment) => {
            const chars = segment.text.split("").map((char) => {
                const delay = time;
                time += typingConfig.charDelay;
                return { char, delay, className: segment.className };
            });
            return { chars };
        });
        time += typingConfig.linePause;
        return { indent: line.indent, segments };
    });
})();

const ProcessSectionStyles = () => (
    <style>{`
        .code-char {
            opacity: 0;
            display: inline-block;
            animation: code-reveal var(--char-duration, 0.05s) linear forwards;
            animation-delay: var(--char-delay, 0s);
            animation-play-state: paused;
        }
        .code-caret {
            animation: caret-blink 1s steps(1, end) infinite;
            animation-play-state: paused;
        }
        .code-block.is-active .code-char,
        .code-block.is-active .code-caret {
            animation-play-state: running;
        }
        @keyframes code-reveal {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        @keyframes caret-blink {
            50% {
                opacity: 0;
            }
        }
        @media (prefers-reduced-motion: reduce) {
            .code-char {
                opacity: 1;
                animation: none;
            }
            .code-caret {
                opacity: 0;
                animation: none;
            }
        }
    `}</style>
);

export default function ProcessSection() {
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

            const codeBlocks = gsap.utils.toArray<HTMLElement>("[data-code-block]");
            codeBlocks.forEach((block) => {
                ScrollTrigger.create({
                    trigger: block,
                    start: "top 85%",
                    onEnter: () => block.classList.add("is-active"),
                    onLeaveBack: () => block.classList.remove("is-active"),
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="process"
            className="relative min-h-screen bg-black px-[8vw] py-[12vh] text-white"
            aria-labelledby="process-title"
            ref={sectionRef}
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
                <div
                    data-animate="block"
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                >
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                        Our Process
                    </span>
                    <h2
                        id="process-title"
                        className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl"
                        style={{ textWrap: "balance" }}
                    >
                        Our Simple, Smart, and Scalable Process
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                        We design, develop, and implement automation tools that help you work
                        smarter, not harder.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {processSteps.map((step) => (
                        <article
                            key={step.step}
                            data-animate="block"
                            className="flex min-h-[360px] flex-col rounded-[26px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                        >
                            <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                                {step.step}
                            </span>
                            <h3
                                className="mt-4 text-2xl font-semibold text-white md:text-3xl"
                                style={{ textWrap: "balance" }}
                            >
                                {step.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                                {step.description}
                            </p>
                            <div className="mt-6 flex-1 rounded-2xl border border-white/10 bg-black/40 p-4">
                                {step.demo === "analysis" ? (
                                    <div className="grid items-center gap-4 md:grid-cols-[0.9fr_1.1fr]">
                                        <div className="relative mx-auto flex aspect-square w-full max-w-[160px] items-center justify-center rounded-full border border-white/10 bg-black/50">
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0 rounded-full opacity-70 animate-spin motion-reduce:animate-none"
                                                style={{
                                                    background:
                                                        "conic-gradient(from 90deg, rgba(133,207,236,0.55), rgba(133,207,236,0) 55%)",
                                                    animationDuration: "8s",
                                                }}
                                            />
                                            <span className="absolute inset-[18%] rounded-full border border-white/10" />
                                            <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#85cfec] shadow-[0_0_12px_rgba(133,207,236,0.7)]" />
                                        </div>
                                        <div className="space-y-2 text-xs text-white/60">
                                            {analysisChecks.map((check) => (
                                                <div
                                                    key={check}
                                                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                                                >
                                                    <span>{check}</span>
                                                    <span className="h-2 w-2 rounded-full bg-[#85cfec]/70" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : null}
                                {step.demo === "development" ? (
                                    <div className="flex h-full flex-col justify-between gap-4">
                                        <div className="flex items-center justify-between text-xs text-white/50">
                                            <span>bots.dev</span>
                                            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                                                AI Core
                                            </span>
                                        </div>
                                        <div
                                            data-code-block
                                            className="code-block rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-[11px] leading-relaxed text-white/70"
                                        >
                                            {typedLines.map((line, lineIndex) => (
                                                <div
                                                    key={`line-${lineIndex}`}
                                                    className="code-line whitespace-pre"
                                                    style={{
                                                        paddingLeft: line.indent * typingConfig.indentPx,
                                                    }}
                                                >
                                                    {line.segments.map((segment, segmentIndex) =>
                                                        segment.chars.map((char, charIndex) => (
                                                            <span
                                                                key={`char-${lineIndex}-${segmentIndex}-${charIndex}`}
                                                                className={`code-char ${char.className}`}
                                                                style={{
                                                                    ["--char-delay" as string]: `${char.delay}s`,
                                                                    ["--char-duration" as string]: `${typingConfig.charDuration}s`,
                                                                }}
                                                            >
                                                                {char.char}
                                                            </span>
                                                        )),
                                                    )}
                                                </div>
                                            ))}
                                            <div className="mt-2 text-white/40">
                                                status: <span className="text-white/70">optimized</span>
                                                <span
                                                    aria-hidden="true"
                                                    className="code-caret ml-1 inline-block h-[14px] w-[2px] translate-y-[2px] rounded-full bg-[#85cfec]/70"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : null}
                                {step.demo === "integration" ? (
                                    <div className="flex h-full flex-col justify-center gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white/80">
                                                B
                                            </div>
                                            <div className="relative h-px flex-1 bg-white/10">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#85cfec] shadow-[0_0_12px_rgba(133,207,236,0.7)] animate-pulse motion-reduce:animate-none"
                                                    style={{ animationDuration: "2.2s" }}
                                                />
                                            </div>
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white/80">
                                                Stack
                                            </div>
                                        </div>
                                        <p className="text-xs text-white/50">
                                            Secure API connections with minimal disruption.
                                        </p>
                                    </div>
                                ) : null}
                                {step.demo === "optimization" ? (
                                    <div className="flex h-full flex-col gap-3">
                                        {optimizationItems.map((item, index) => (
                                            <div
                                                key={item.label}
                                                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80"
                                            >
                                                <div>
                                                    <p className="text-sm text-white/85">{item.label}</p>
                                                    <p className="text-xs text-white/50">
                                                        {item.detail}
                                                    </p>
                                                </div>
                                                <span
                                                    aria-hidden="true"
                                                    className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 ${
                                                        index === 0
                                                            ? "text-[#85cfec]"
                                                            : "text-white/60"
                                                    }`}
                                                >
                                                    <span
                                                        className={`h-3 w-3 rounded-full border-2 ${
                                                            index === 0
                                                                ? "border-[#85cfec] border-t-transparent animate-spin motion-reduce:animate-none"
                                                                : "border-white/30"
                                                        }`}
                                                        style={
                                                            index === 0
                                                                ? { animationDuration: "2.2s" }
                                                                : undefined
                                                        }
                                                    />
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <ProcessSectionStyles />
        </section>
    );
}
