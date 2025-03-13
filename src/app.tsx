import { About } from "./components/about-section"
import { Header } from "./components/header"
import { Hero } from "./components/hero-section"

export function App() {
  

  return (
    <div className="bg-background text-foreground min-h-screen font-display">
      <Header/>
      <Hero/>
      <About/>
       
    </div>
  )
}


