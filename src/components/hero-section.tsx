import { MdOutlineMailOutline } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import EvandroPhoto from "../assets/evandro_img.png"


export function Hero() {  

  return ( 
    <section id="home" className="flex font-display flex-col items-center justify-between gap-10  px-6 py-16 lg:flex-row lg:gap-0 lg:px-28 lg:py-32">
      <div className="p-12 text-start flex flex-col">
      <p className="text-xl font-normal text-light-blue mt-4">Olá pessoal, sou o</p>
      <h2 className="text-5xl font-extrabold">Evandro Damaso</h2>
        <p className="text-xl text-secondary mt-4">&gt; Desenvolvedor Full Stack</p>
        <p className="mt-6 text-light-blue">He crafts responsive websites where technologies meet creativity</p>
        <p className="mt-4 text-comments">// you can also see it on my Github page</p>
        <p className="mt-6 text-light-blue"><span className="text-secondary">const</span> <span className="text-details">githubLink</span> = <a className="text-tomato hover:text-tomato-bright" href="/">“https://github.com/example/url”</a></p>
        <div className="mt-8 flex gap-10">
          <button className="border flex flex-row gap-2 items-center  border-secondary px-4 py-2  hover:border-details hover:text-details"> <IoDocumentOutline/>Download CV</button>
          <button className="flex flex-row gap-2 border items-center text-comments border-comments px-4 py-2  hover:border-foreground hover:text-secondary"> <MdOutlineMailOutline/>Entre em contato</button>
        </div>
      </div>
      <div>
        <img src={EvandroPhoto} alt="Foto de Evandro Damaso" />
      </div>

        
      </section>
  )
}

