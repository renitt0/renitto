import { ScrollReveal } from './ScrollReveal';
import { CodeConstellation } from './CodeConstellation';

export const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 mx-auto pt-20 relative overflow-hidden">
            <CodeConstellation />

            <div className="max-w-7xl w-full mx-auto relative z-10">
                <ScrollReveal className="w-full">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--text-primary)] leading-[1.1] mb-6 max-w-6xl">
                        Building AI-integrated,
                        <br className="hidden md:block" />
                        <span className="relative inline-block mt-2 md:mt-0">
                            cloud-native systems.
                            <span
                                className="absolute bottom-2 md:bottom-4 left-0 w-full h-1 bg-[var(--accent-primary)] origin-left scale-x-0 animate-scale-x"
                                style={{ animationDelay: '0.5s' }}
                            ></span>
                        </span>
                    </h1>

                    <div className="mt-8 mb-12 flex flex-col md:flex-row items-start md:items-center gap-4 text-[var(--text-secondary)]">
                        <p className="text-lg md:text-xl font-light">
                            Junior Developer <span className="mx-2 text-[var(--accent-primary)]">•</span> AI <span className="mx-2 text-[var(--accent-primary)]">•</span> Firebase <span className="mx-2 text-[var(--accent-primary)]">•</span> GCP
                        </p>
                    </div>

                    <a
                        href="#projects"
                        className="inline-block bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 text-sm md:text-base font-medium tracking-wide hover:bg-[var(--accent-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 ease-in-out"
                    >
                        View Work
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
}
