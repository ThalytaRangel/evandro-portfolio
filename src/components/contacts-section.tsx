import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import EvandroAvatar from '../assets/evandro_avatar.png'

export function Contacts() {
    return (
        <section
            id="contacts"
            className="font-display flex w-full flex-col lg:px-28"
        >
            <div className="mb-12 flex w-full items-center gap-2">
                <h2 className="text-light-blue text-3xl font-normal whitespace-nowrap">
                    <span className="text-secondary pe-0.5">#</span>Contato
                </h2>
                <div className="border-b-primary flex h-0 w-full items-end border align-bottom"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="flex flex-col gap-4 lg:col-span-2">
                    <p className="mb-4 p-4 text-center lg:p-0 lg:text-left">
                        Estou sempre em busca de novos desafios e oportunidades
                        para aplicar minhas habilidades em desenvolvimento web.
                        Se tiver alguma proposta ou quiser trocar ideias,
                        sinta-se à vontade para entrar em contato!
                    </p>
                    <div className="border-comments flex flex-col justify-center gap-6 self-center border p-8 lg:self-start">
                        <h3 className="text-2xl font-semibold">
                            Me acompanhe por aqui!{' '}
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/evandro-damaso/"
                                target="_blank"
                                className="border-details hover:border-foreground hover:text-primary flex h-16 w-16 items-center justify-center rounded-full border-1 text-3xl"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/dam450"
                                target="_blank"
                                className="border-details hover:text-primary hover:border-foreground flex h-16 w-16 items-center justify-center rounded-full border-1 text-3xl"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://discord.com/users/547738105331843077"
                                target="_blank"
                                className="border-details hover:text-primary hover:border-foreground flex h-16 w-16 items-center justify-center rounded-full border-1 text-3xl"
                            >
                                <FaDiscord />
                            </a>
                            <a
                                href="https://www.instagram.com/dam450.dev/"
                                target="_blank"
                                className="border-details hover:text-primary hover:border-foreground flex h-16 w-16 items-center justify-center rounded-full border-1 text-3xl"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col items-center gap-4 lg:col-span-1">
                    <img
                        src={EvandroAvatar}
                        alt="Avatar de Evandro"
                        className="h-64 w-64 rounded-lg object-cover"
                    />
                    <p className="border-comments absolute -bottom-14 flex flex-col gap-2 border p-4 lg:-bottom-3 lg:mt-8">
                        Entre em contato comigo:{' '}
                        <span className="flex items-center gap-2 font-mono text-lg">
                            {' '}
                            <MdOutlineMailOutline /> evandro.damaso@gmail.com
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}
