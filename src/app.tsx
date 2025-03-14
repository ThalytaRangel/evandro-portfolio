import { About } from './components/about-section'
import { Contacts } from './components/contacts-section'
import { Experiences } from './components/experiences-section'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Hero } from './components/hero-section'
import { Projects } from './components/projects-section'
import { Skills } from './components/skills-section'

export function App() {
    return (
        <div className="bg-background text-foreground font-display flex min-h-screen flex-col p-2 lg:w-full lg:p-4">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experiences />
            <Contacts />
            <Footer />
        </div>
    )
}
