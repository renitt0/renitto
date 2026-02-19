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
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--accent-secondary)] opacity-20 -z-10 rounded-sm"></div>
                        <div className="space-y-6 text-lg md:text-xl font-light text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                I am a Junior Developer passionate about building intelligent systems that live on the cloud. My work focuses on integrating AI capabilities into scalable web applications, ensuring they are not just smart, but also efficient and user-centric.
                            </p>
                            <p>
                                I specialize in the modern web stack—React, Tailwind, and Firebase—while leveraging Google Cloud Platform for backend robustness. I believe in code that is clean, maintainable, and built for the future.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};
