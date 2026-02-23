import { ScrollReveal } from './ScrollReveal';

const achievements = [
    {
        badge: "AI Grand Challenge 2025",
        venue: "IIT Delhi",
        stage: "Stage 1 Participant",
        title: "AI-Based Phishing URL Detection Engine",
        role: "ML Engineer & System Architect",
        description:
            "Designed and implemented a machine learning–based phishing URL detection engine using XGBoost, with CLI-based model training workflows and a Flask-powered web inference API. Developed as an internal company project aligned with the AI Grand Challenge 2025 problem statement.",
        architecture: {
            headline: "Tiered Dual-Model Detection Architecture",
            models: [
                {
                    name: "Heavy Model",
                    subtitle: "Full Intelligence Layer",
                    details:
                        "Deep analysis using lexical URL features, DNS signals, and dynamic browser rendering via Playwright. Captures webpage screenshots, inspects DOM structures, and extracts login-related elements to identify sophisticated phishing patterns.",
                    focus: "Depth & Accuracy",
                },
                {
                    name: "Mini Model",
                    subtitle: "High-Speed Screening Layer",
                    details:
                        "Lightweight offline feature extraction based on lexical URL characteristics and static signals, followed by XGBoost classification.",
                    focus: "Speed & Scalability",
                },
            ],
            pipeline:
                "The mini model processes large URL volumes for rapid elimination of benign samples; only suspicious URLs are escalated to the heavy model for deeper behavioral inspection. This enables bulk processing of hundreds of thousands of URLs per day while maintaining strong detection quality.",
        },
        highlights: [
            "Presented before a panel of expert jurors at IIT Delhi",
            "Engineered tiered screening pipeline for 100K+ URLs/day throughput",
            "Rapidly adapted to cybersecurity domain from a different primary background",
            "Intensive experimentation, optimization, and system refinement under competitive conditions",
        ],
        stack: [
            "Python",
            "XGBoost",
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "Flask",
            "Playwright",
            "HTML",
            "CSS",
            "JavaScript",
        ],
    },
];

export const Achievements = () => {
    return (
        <section
            id="achievements"
            className="py-24 px-6 md:px-24 max-w-7xl mx-auto"
        >
            <ScrollReveal>
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)]">
                        Achievements
                    </h2>
                    <div className="h-px flex-1 bg-[var(--accent-secondary)] opacity-30 ml-8"></div>
                </div>
            </ScrollReveal>

            {achievements.map((item, index) => (
                <ScrollReveal key={index} delay={200}>
                    <div className="relative group">
                        {/* Ambient glow on hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)]/20 via-[var(--accent-secondary)]/10 to-[var(--accent-primary)]/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>

                        <div className="relative bg-[var(--card-bg)] border border-[var(--border-color)] rounded-sm overflow-hidden">
                            {/* Top accent bar */}
                            <div className="h-1 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)]"></div>

                            <div className="p-8 md:p-12">
                                {/* Header: badge + title */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30 rounded-full">
                                                <svg
                                                    className="w-3.5 h-3.5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                {item.badge}
                                            </span>
                                            <span className="text-xs font-medium tracking-wide text-[var(--text-secondary)] uppercase">
                                                {item.venue} · {item.stage}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm font-medium text-[var(--accent-secondary)] tracking-wide">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-10 max-w-3xl">
                                    {item.description}
                                </p>

                                {/* Architecture section */}
                                <div className="mb-10">
                                    <h4 className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-primary)] mb-6 flex items-center gap-2">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            />
                                        </svg>
                                        {item.architecture.headline}
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        {item.architecture.models.map(
                                            (model, i) => (
                                                <div
                                                    key={i}
                                                    className="relative bg-[var(--bg-primary)] border border-[var(--border-color)] p-6 rounded-sm hover:border-[var(--accent-primary)]/40 transition-colors duration-300"
                                                >
                                                    <div className="flex items-center justify-between mb-3">
                                                        <div>
                                                            <h5 className="text-lg font-serif text-[var(--text-primary)]">
                                                                {model.name}
                                                            </h5>
                                                            <span className="text-xs font-medium tracking-wide text-[var(--accent-secondary)] uppercase">
                                                                {
                                                                    model.subtitle
                                                                }
                                                            </span>
                                                        </div>
                                                        <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 whitespace-nowrap">
                                                            {model.focus}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                                                        {model.details}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {/* Pipeline flow indicator */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex items-center gap-2 text-xs font-medium text-[var(--accent-primary)]">
                                            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
                                            Pipeline Flow
                                        </div>
                                        <div className="h-px flex-1 bg-gradient-to-r from-[var(--accent-primary)]/40 to-transparent"></div>
                                    </div>
                                    <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed pl-4 border-l-2 border-[var(--accent-primary)]/30">
                                        {item.architecture.pipeline}
                                    </p>
                                </div>

                                {/* Highlights */}
                                <div className="mb-10">
                                    <h4 className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-primary)] mb-4">
                                        Key Highlights
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {item.highlights.map((h, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-sm text-[var(--text-secondary)] font-light"
                                            >
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shrink-0"></span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech stack */}
                                <div>
                                    <h4 className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-primary)] mb-4">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.stack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 text-xs font-medium tracking-wide text-[var(--text-secondary)] bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full hover:border-[var(--accent-primary)]/40 hover:text-[var(--accent-primary)] transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            ))}
        </section>
    );
};
