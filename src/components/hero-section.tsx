import { IoDocumentOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import EvandroPhoto from '../assets/evandro_img.png'

export function Hero() {
    return (
        <section
            id="home"
            className="font-display flex min-h-screen w-full flex-col items-center justify-center overflow-hidden lg:flex-row"
        >
            <div className="flex w-full flex-col justify-center px-6 py-20 text-start lg:w-5/12 lg:py-0">
                <p className="text-light-blue mt-4 text-base font-normal lg:text-lg">
                    Olá pessoal, sou o
                </p>
                <div className="w-fit overflow-hidden">
                    <h2 className="animate-typing inline-block w-0 overflow-hidden border-r-2 border-transparent pe-2 text-3xl font-extrabold whitespace-nowrap lg:text-5xl">
                        Evandro Damaso
                    </h2>
                </div>
                <p className="text-secondary mt-4 text-2xl lg:text-3xl">
                    &gt; Desenvolvedor full stack
                </p>
                <p className="text-light-blue mt-6 flex-wrap text-sm max-sm:w-sm lg:text-lg">
                    Crio aplicações eficientes e escaláveis, atuando no
                    desenvolvimento front-end e back-end.
                    <br />
                    Vamos construir algo incrível juntos!
                </p>
                <p className="text-comments mt-4 text-xs lg:text-base">
                    // você pode ver mais sobre meu trabalho no meu Github
                </p>
                <p className="text-light-blue mt-6 text-xs lg:text-base">
                    <span className="text-secondary">const</span>{' '}
                    <span className="text-details">githubLink</span> ={' '}
                    <a
                        className="text-tomato hover:text-tomato-bright"
                        href="/"
                    >
                        “https://github.com/dam450”
                    </a>
                </p>
                <div className="mt-8 flex gap-10">
                    <a
                        href="/public/evandro-damaso-cv.pdf"
                        download="evandro-damaso-cv.pdf"
                        className="border-secondary hover:border-details hover:text-details flex flex-row items-center gap-2 border px-4 py-2"
                    >
                        {' '}
                        <IoDocumentOutline />
                        Download CV
                    </a>
                    <a
                        href="mailto:evandro.damaso@gmail.com?subject=Contato via Portfolio"
                        className="text-comments border-comments hover:border-foreground hover:text-secondary flex flex-row items-center gap-2 border px-4 py-2"
                    >
                        {' '}
                        <MdOutlineMailOutline />
                        Entre em contato
                    </a>
                </div>
            </div>
            <div className="flex w-full items-center justify-center lg:w-5/12">
                <img
                    src={EvandroPhoto}
                    alt="Foto de Evandro Damaso"
                    className="h-[300px] w-auto object-contain lg:h-[500px]"
                />
            </div>
        </section>
    )
}
