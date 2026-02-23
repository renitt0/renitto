import { ScrollReveal } from './ScrollReveal';

export const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 px-6 md:px-24 mx-auto max-w-7xl bg-[var(--bg-primary)]">
            <div className="mb-12">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] mb-6">About</h2>
                    <div className="w-24 h-0.5 bg-[var(--accent-primary)]"></div>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
                <div className="md:col-span-2">
                    <ScrollReveal delay={200}>
                        <div className="relative group max-w-sm md:max-w-[80%]">
                            <div className="absolute inset-0 bg-[var(--accent-secondary)] rounded-lg translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                            <img
                                src="/profile.webp"
                                alt="Renitto Perinchery"
                                className="relative w-full h-auto rounded-lg shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500 object-cover aspect-[3/4]"
                            />
                        </div>
                    </ScrollReveal>
                </div>

                <div className="md:col-span-3 relative">
                    <ScrollReveal delay={400}>
                        {/* Decorative Accent - Improved from a simple square to a soft, modern floating blob */}
                        <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-[var(--accent-secondary)] to-transparent opacity-30 -z-10 rounded-full blur-2xl animate-soft-pulse"></div>

                        <div className="space-y-6 text-lg md:text-xl font-light text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                I am a <span className="text-[var(--text-primary)] font-medium italic">Full-Stack Developer</span> who thrives at the intersection of elegant frontend design and robust backend architecture. While I am deeply interested in building efficient APIs and scalable systems, I am equally passionate about crafting polished, user-centric interfaces that make complex technology feel intuitive.
                            </p>
                            <p>
                                I am currently diving deep into <span className="text-[var(--accent-primary)] font-medium">Applied Machine Learning</span> and cloud automation, driven by a constant hunger to learn and evolve. My focus is on engineering <span className="text-[var(--text-primary)] font-medium">reliable, high-performance applications</span> on GCP and Firebase. I believe the best software is never finished—it is continuously refined.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};
