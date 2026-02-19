import { ScrollReveal } from './ScrollReveal';

const projects = [
    {
        title: "Pharmaceutical Inventory Management System",
        stack: "React • Firebase • Tailwind CSS",
        description: "A real-time inventory tracking system designed for pharmacies to manage stock levels, expiration alerts, and supplier orders efficiently."
    },
    {
        title: "Weight Management Application",
        stack: "React • Node.js • MongoDB",
        description: "A mobile-first application helping users track nutrition, set goals, and visualize progress through intuitive data visualization."
    },
    {
        title: "Splitwise Clone",
        stack: "Next.js • Firebase",
        description: "A simplified expense sharing platform allowing groups to track shared costs and settle debts with minimal friction."
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 md:px-24 max-w-7xl mx-auto bg-[var(--bg-primary)]">
            <ScrollReveal>
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)]">Projects</h2>
                    <div className="h-px flex-1 bg-[var(--accent-secondary)] opacity-30 ml-8"></div>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ScrollReveal key={index} delay={index * 150} className="h-full">
                        <div className="group relative h-full bg-[var(--card-bg)] border border-[var(--border-color)] p-8 hover:-translate-y-2 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-[var(--accent-secondary)]/10">
                            <div className="absolute inset-0 bg-[var(--accent-secondary)] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <span className="text-xs font-medium tracking-widest text-[var(--accent-primary)] uppercase mb-4">{project.stack}</span>
                                <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-primary)] transition-colors duration-300">{project.title}</h3>
                                <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>

                                <a href="#" className="inline-flex items-center text-sm font-medium text-[var(--text-primary)] hover:underline underline-offset-4 decoration-[var(--accent-primary)]">
                                    View Project <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};
