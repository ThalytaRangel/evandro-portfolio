import { IoDocumentOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import EvandroPhoto from '../assets/evandro_img.png'

export function Hero() {
    return (
        <section
            id="home"
            className="font-display flex flex-col items-center justify-between gap-10 px-6 py-16 lg:flex-row lg:gap-0 lg:px-28 lg:py-32"
        >
            <div className="flex flex-col p-12 text-start">
                <p className="text-light-blue mt-4 text-2xl font-normal">
                    Olá pessoal, sou o
                </p>
                <h2 className="text-5xl font-extrabold">Evandro Damaso</h2>
                <p className="text-secondary mt-4 text-2xl">
                    &gt; Desenvolvedor Full Stack
                </p>
                <p className="text-light-blue mt-6 text-2xl">
                    He crafts responsive websites where technologies meet
                    creativity
                </p>
                <p className="text-comments mt-4 text-xl">
                    // you can also see it on my Github page
                </p>
                <p className="text-light-blue mt-6 text-xl">
                    <span className="text-secondary">const</span>{' '}
                    <span className="text-details">githubLink</span> ={' '}
                    <a
                        className="text-tomato hover:text-tomato-bright"
                        href="/"
                    >
                        “https://github.com/example/url”
                    </a>
                </p>
                <div className="mt-8 flex gap-10">
                    <button className="border-secondary hover:border-details hover:text-details flex flex-row items-center gap-2 border px-4 py-2">
                        {' '}
                        <IoDocumentOutline />
                        Download CV
                    </button>
                    <button className="text-comments border-comments hover:border-foreground hover:text-secondary flex flex-row items-center gap-2 border px-4 py-2">
                        {' '}
                        <MdOutlineMailOutline />
                        Entre em contato
                    </button>
                </div>
            </div>
            <div>
                <img src={EvandroPhoto} alt="Foto de Evandro Damaso" />
            </div>
        </section>
    )
}
