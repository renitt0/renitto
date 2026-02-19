import { ScrollReveal } from './ScrollReveal';

const experiences = [
    {
        company: "Expectation Walkers",
        role: "Junior Developer",
        period: "2025 — Present",
        description: [
            "Built and deployed AI-integrated web applications using OpenAI APIs.",
            "Developed full-stack applications with React and Firebase.",
            "Designed serverless backend logic and scalable cloud deployment workflows using GCP.",
            "Implemented secure authentication systems and optimized API performance and cost efficiency.",
            "Contributed to rapid prototyping and production deployment of GenAI-driven solutions."
        ]
    },
    {
        company: "Avaknin I Pvt Ltd – IQED Project",
        role: "Academic Development Intern (Remote)",
        period: "03/2025 – 05/2025 | Thrissur, India",
        description: [
            "Designed structured mathematics curriculum emphasizing analytical and algorithmic reasoning.",
            "Applied AI-assisted validation workflows to streamline content review processes.",
            "Ensured high accuracy and consistency through systematic quality analysis."
        ]
    },
    {
        company: "MashupStack",
        role: "Python Full Stack Developer Intern",
        period: "2024",
        description: [
            "Completed project-based full-stack development training in Django and React.",
            "Developed RESTful APIs using Django REST Framework with MySQL integration.",
            "Implemented JWT-based authentication and role-based access control.",
            "Integrated Razorpay payment gateway and built secure CRUD modules.",
            "Followed modular architecture and Git-based version control practices."
        ]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
            <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] mb-16">Experience</h2>
            </ScrollReveal>

            <div className="relative border-l-2 border-[var(--accent-primary)]/30 ml-4 md:ml-12 space-y-12">
                {experiences.map((exp, index) => (
                    <ScrollReveal key={index} delay={index * 200}>
                        <div className="relative pl-8 md:pl-16 group">
                            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] transition-colors duration-300"></div>

                            <div className="bg-[var(--card-bg)] p-6 md:p-8 rounded-sm hover:bg-[var(--card-hover)] transition-colors duration-500 ease-out">
                                <span className="block text-sm font-medium tracking-wide text-[var(--accent-primary)] mb-2 uppercase">{exp.period}</span>
                                <h3 className="text-2xl font-serif text-[var(--text-primary)] mb-1">{exp.role}</h3>
                                <h4 className="text-lg font-light text-[var(--text-secondary)] mb-4">{exp.company}</h4>
                                <ul className="list-disc list-outside ml-4 space-y-2 text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};
