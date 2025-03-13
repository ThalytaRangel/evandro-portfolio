

export function Header() {  

  return ( 
    <header className="flex justify-between items-center p-6 border-b border-foreground/10">
        <h1 className="text-2xl font-bold"><span className="text-details pe-0.5">&lt;</span>Evandro Damaso <span className="text-details pe-0.5">&frasl;&gt;</span></h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-details"><span className="text-secondary pe-0.5">#</span>home</a>
          <a href="#about-me" className="hover:text-details"><span className="text-secondary pe-0.5">#</span>about-me</a>
          <a href="#projects" className="hover:text-details"><span className="text-secondary pe-0.5">#</span>projects</a>
          <a href="#skills" className="hover:text-details"><span className="text-secondary pe-0.5">#</span>skills</a>
          <a href="#experience" className="hover:text-details"><span className="text-secondary pe-0.5">#</span>experience</a>
          <a href="#contacts" className="hover:text-details"><span className="text-secondary pe-0.5">#</span>contacts</a>
        </nav>
      </header>
  )
}