import { ScrollReveal } from './ScrollReveal';

export const Contact = () => {
    return (
        <footer id="contact" className="py-32 px-6 md:px-24 bg-[#111111] dark:bg-black text-ivory transition-colors duration-500">
            <ScrollReveal className="max-w-7xl mx-auto flex flex-col md:items-start space-y-12">
                <span className="text-sm font-medium tracking-widest text-[var(--accent-primary)] uppercase">Contact</span>

                <h2 className="text-4xl md:text-6xl font-serif leading-tight text-ivory">
                    Interested in working together?
                    <br />
                    <a href="mailto:renittoperinchery@gmail.com" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors duration-300 underline decoration-1 underline-offset-8 decoration-[var(--accent-primary)]/30 hover:decoration-[var(--accent-secondary)]">
                        Get in touch.
                    </a>
                </h2>

                <div className="flex flex-col md:flex-row gap-12 mt-16 w-full pt-16 border-t border-white/10">
                    <div className="flex-1">
                        <h3 className="text-sm font-medium tracking-widest text-white/40 uppercase mb-6">Socials</h3>
                        <div className="flex flex-col gap-4 text-lg font-light">
                            <a href="https://github.com/renitt0" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-primary)] transition-colors w-fit">GitHub</a>
                            <a href="https://linkedin.com/in/renitto" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-primary)] transition-colors w-fit">LinkedIn</a>
                        </div>
                    </div>

                    <div className="flex-1 text-right self-end opacity-20 text-sm">
                        Design & Development by Renitto Perinchery.
                        <br />
                        Built with React, Tailwind & Firebase.
                    </div>
                </div>
            </ScrollReveal>
        </footer>
    );
};
