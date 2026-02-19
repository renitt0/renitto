import { ScrollReveal } from './ScrollReveal';

export const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 md:px-24 max-w-7xl mx-auto bg-[var(--bg-primary)]">
            <ScrollReveal className="w-full">
                <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] mb-16">Skills</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-sm text-[var(--text-secondary)]">
                <ScrollReveal delay={100} className="space-y-6 border-l border-[var(--accent-secondary)] px-6 border-opacity-30">
                    <h3 className="font-medium uppercase tracking-widest text-[var(--accent-primary)] mb-4 opacity-70">Languages</h3>
                    <ul className="space-y-2 font-light">
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                </ScrollReveal>

                <ScrollReveal delay={200} className="space-y-6 border-l border-[var(--accent-secondary)] px-6 border-opacity-30">
                    <h3 className="font-medium uppercase tracking-widest text-[var(--accent-primary)] mb-4 opacity-70">Frontend</h3>
                    <ul className="space-y-2 font-light">
                        <li>React.js</li>
                        <li>Tailwind CSS</li>
                        <li>Framer Motion</li>
                    </ul>
                </ScrollReveal>

                <ScrollReveal delay={300} className="space-y-6 border-l border-[var(--accent-secondary)] px-6 border-opacity-30">
                    <h3 className="font-medium uppercase tracking-widest text-[var(--accent-primary)] mb-4 opacity-70">Backend</h3>
                    <ul className="space-y-2 font-light">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>FastAPI</li>
                    </ul>
                </ScrollReveal>

                <ScrollReveal delay={400} className="space-y-6 border-l border-[var(--accent-secondary)] px-6 border-opacity-30">
                    <h3 className="font-medium uppercase tracking-widest text-[var(--accent-primary)] mb-4 opacity-70">Cloud</h3>
                    <ul className="space-y-2 font-light">
                        <li>Google Cloud Platform</li>
                        <li>Firebase</li>
                        <li>Docker</li>
                    </ul>
                </ScrollReveal>

                <ScrollReveal delay={500} className="space-y-6 border-l border-[var(--accent-secondary)] px-6 border-opacity-30">
                    <h3 className="font-medium uppercase tracking-widest text-[var(--accent-primary)] mb-4 opacity-70">AI Integration</h3>
                    <ul className="space-y-2 font-light">
                        <li>TensorFlow</li>
                        <li>OpenAI API</li>
                        <li>Hugging Face</li>
                    </ul>
                </ScrollReveal>
            </div>
        </section>
    );
};
