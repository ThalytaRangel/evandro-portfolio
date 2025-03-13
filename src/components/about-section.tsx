import TechImage from "../assets/technologies_img.png"


export function About() {  

  return ( 
    <section id="about" className="flex font-display flex-col items-center justify-between gap-10 lg:max-h-svh px-6 py-16 lg:flex-row lg:gap-0 lg:px-24 lg:py-28">
      <div id="about-me" className="p-12 text-start flex flex-col lg:h-[744px]">
        <div className="flex gap-2 max-w-full items-center">
          <h2 className="text-3xl font-normal text-light-blue text-inherit"><span className="text-secondary pe-0.5">#</span>Sobre mim</h2> 
          <div  className="flex h-0 border w-sm border-b-primary align-bottom items-end"></div>
        </div>        
        <div className="text-xl font-normal text-light-blue mt-8">
          <p><span>1</span>/**</p>
          <p><span>2</span>* I have 5 years of еxperience in web</p>
          <p><span>3</span>* development lorem ipsum dolor sit amet,</p>
          <p><span>4</span>* consectetur adipiscing elit, sed do eiusmod</p>
          <p><span>5</span>* tempor incididunt ut labore et dolore</p>
          <p><span>6</span>* magna aliqua. Ut enim ad minim veniam,</p>
          <p><span>7</span>* quis nostrud exercitation ullamco laboris</p>
        </div>      
      </div>
      <div id="technologies" className="p-12 text-start flex flex-col lg:h-[744px] ">
      <div className="flex gap-2 max-w-full items-center">
        <h2 className="text-3xl font-normal text-light-blue text-inherit"><span className="text-secondary pe-0.5">#</span>Tecnologias</h2> 
        <div  className="flex h-0 border w-sm border-b-primary align-bottom items-end"></div>
      </div>
        <img src={TechImage} alt="Foto com ícones das tecnologias" />
      </div>        
      </section>
  )
}

