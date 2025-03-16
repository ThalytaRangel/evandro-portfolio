import TechImage from '../assets/technologies_img.png'

export function About() {
    const text = `Minha jornada começou com JavaScript, explorando seu potencial para criar aplicações dinâmicas e interativas. Desde então, aprofundei meus conhecimentos em React.js, Node.js e Express, sempre focado na componentização, na experiência do usuário e na criação de sistemas escaláveis e otimizados. 
    Minha experiência inclui desenvolvimento full stack, utilizando APIs RESTful, gerenciadores de pacotes, TypeScript e metodologias ágeis como Scrum e Kanban. 
    Sou formado em Ciência da Computação pela Universidade UNG e também concluí cursos especializados em Redes de Computadores pela Uninove e Desenvolvimento Web Full Stack pela Rocketseat. 
    Muito apaixonado por tecnologia e aprendizado contínuo, estou sempre buscando aprimorar minhas habilidades para desenvolver soluções inovadoras e eficientes.`

    const lines = text.split('\n').flatMap((paragraph) => {
        const matches = paragraph.match(/.{1,50}(?:\s|$)/g)
        return matches ? matches.filter(Boolean) : []
    })

    return (
        <section
            id="about"
            className="font-display flex min-h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden lg:flex-row lg:gap-6"
        >
            <div
                id="about-me"
                className="flex flex-col text-start lg:h-[744px] lg:w-5/12 lg:py-0"
            >
                <div className="flex max-w-full items-center gap-2">
                    <h2 className="text-light-blue text-3xl font-normal whitespace-nowrap">
                        <span className="text-secondary pe-0.5">#</span>Sobre
                        mim
                    </h2>
                    <div className="border-b-primary flex h-0 w-full items-end border align-bottom"></div>
                </div>
                <div className="text-comments mt-8 text-lg font-normal">
                    <p>
                        <span className="me-5">1</span>/**
                    </p>
                    {lines.map((line, index) => (
                        <p key={index}>
                            <span className="text-comments me-5">
                                {index + 2}
                            </span>
                            * {line.trim()}
                        </p>
                    ))}
                    <p>
                        <span className="me-5">{lines.length + 2}</span>*/
                    </p>
                </div>
            </div>
            <div
                id="technologies"
                className="flex flex-col text-start lg:h-[744px] lg:w-5/12 lg:py-0"
            >
                <div className="flex items-center gap-2">
                    <h2 className="text-light-blue text-3xl font-normal text-inherit">
                        <span className="text-secondary pe-0.5">#</span>
                        Tecnologias
                    </h2>
                    <div className="border-b-primary flex h-0 w-full items-end border align-bottom"></div>
                </div>
                <img
                    className="h-[300px] w-auto justify-center object-contain lg:h-[600px]"
                    src={TechImage}
                    alt="Foto com ícones das tecnologias"
                />
            </div>
        </section>
    )
}
