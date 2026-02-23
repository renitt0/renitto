import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <main className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen overflow-x-hidden transition-colors duration-500">
        <ThemeToggle />
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </ThemeProvider>
  )
}

export default App
