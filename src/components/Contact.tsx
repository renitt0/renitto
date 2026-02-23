import { ScrollReveal } from './ScrollReveal';

export const Contact = () => {
    return (
        <footer id="contact" className="py-32 px-6 md:px-24 bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors duration-500 border-t border-[var(--border-color)]">
            <ScrollReveal className="max-w-7xl mx-auto flex flex-col md:items-start space-y-12">
                <span className="text-sm font-medium tracking-widest text-[var(--accent-primary)] uppercase">Contact</span>

                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                    Interested in working together?
                    <br />
                    <a href="mailto:renittoperinchery@gmail.com" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors duration-300 underline decoration-1 underline-offset-8 decoration-[var(--accent-primary)]/30 hover:decoration-[var(--accent-secondary)]">
                        Get in touch.
                    </a>
                </h2>

                <div className="flex flex-col md:flex-row gap-12 mt-16 w-full pt-16 border-t border-[var(--border-color)]">
                    <div className="flex-1">
                        <h3 className="text-sm font-medium tracking-widest text-[var(--text-secondary)] uppercase mb-6">Socials</h3>
                        <div className="flex flex-col gap-4 text-lg font-light text-[var(--text-secondary)]">
                            <a href="https://github.com/renitt0" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-primary)] transition-colors w-fit">GitHub</a>
                            <a href="https://linkedin.com/in/renitto" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-primary)] transition-colors w-fit">LinkedIn</a>
                        </div>
                    </div>

                    <div className="flex-1 text-left md:text-right self-end text-[var(--text-secondary)] text-sm md:text-base tracking-wide leading-relaxed">
                        Design & Development by <span className="text-[var(--text-primary)] font-medium">Renitto Perinchery</span>.
                        <br />
                        Built with <span className="text-[var(--accent-primary)]">React</span>, <span className="text-[var(--accent-primary)]">Tailwind</span> & <span className="text-[var(--accent-primary)]">Firebase</span>.
                    </div>
                </div>
            </ScrollReveal>
        </footer>
    );
};
