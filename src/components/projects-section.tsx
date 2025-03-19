import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const projects = [
        {
            title: 'Fastify Get File',
            description:
                'Servidor Fastify que prepara um arquivo ZIP e envia para o usuário através de uma rota GET diretamente no navegador.',
            stack: ['Fastify', 'fastify-static', 'Arquiver'],
            deploy: 'https://github.com/dam450/fastify-getfiles',
        },
        {
            title: 'RK Landing Page',
            description:
                'O projeto tinha o propósito de lançar uma POC (Proof of Concept) de uma landing page para cada corretor de imóveis da corretora RK. Cada corretor fez a curadoria dos seus imóveis e tornando a página um catálogo individual.',
            stack: ['Reactjs', 'Vitejs', 'Axios', 'styled-components'],
            deploy: 'https://rklp-vera-melendez.netlify.app/',
        },
        {
            title: 'Food Explorer',
            description:
                'O Food Explorer é um projeto criado como parte do desafio final do curso Explorer da @Rockeseat para avaliar os conhecimentos adquiridos pelo aluno.',
            stack: [
                'Reactjs',
                'Vitejs',
                'Axios',
                'styled-components',
                'Keen-slider',
            ],
            deploy: 'https://foodexplorer-dam450.netlify.app/signin',
        },
        {
            title: 'RocketMovies',
            description:
                'Aplicação de gerenciamento de filmes. Permite que os usuários visualizem, avaliem, resenhem e organizem os filmes assistidos em uma interface moderna.',
            stack: ['Reactjs', 'Vitejs', 'Axios', 'styled-components'],
            deploy: 'https://rocketmovies-dam450.netlify.app/',
        },
        {
            title: 'RocketNotes',
            description:
                'O projeto é uma aplicação de anotações, permitindo que os usuários criem, editem e excluam notas de forma simples.',
            stack: ['Reactjs', 'Vitejs', 'Axios', 'styled-components'],
            deploy: 'https://rocketnotes-dam450.netlify.app/',
        },
        {
            title: 'Github Favorites',
            description:
                'Projeto para salvar os perfis github favoritos do usuário. Os dados ficam salvos localmente. Há também um filtro para busca de nomes entre os favoritados.',
            stack: [
                'HTML',
                'CSS',
                'Javascript',
                'LocalStorage',
                'GitHub REST API',
            ],
            deploy: 'https://dam450.dev/git-favorites/',
        },
    ]

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 1,
            spacing: 32,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: { perView: 2, spacing: 32 },
            },
            '(min-width: 1024px)': {
                slides: { perView: 3, spacing: 32 },
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        loop: true,
        renderMode: 'performance',
        drag: true,
        mode: 'snap',
    })

    useEffect(() => {
        const timer = setInterval(() => {
            if (instanceRef.current) {
                instanceRef.current.next()
            }
        }, 5000)

        return () => {
            clearInterval(timer)
        }
    }, [instanceRef])

    return (
        <section
            id="projects"
            className="font-display flex w-full flex-col pt-24 lg:px-28"
        >
            <div className="mb-12 flex w-full items-center gap-2">
                <h2 className="text-light-blue text-3xl font-normal whitespace-nowrap">
                    <span className="text-secondary pe-0.5">#</span>Projetos
                </h2>
                <div className="border-b-primary flex h-0 w-full items-end border align-bottom"></div>
            </div>

            <div className="relative">
                <div ref={sliderRef} className="keen-slider">
                    {projects.map((project, index) => (
                        <div key={index} className="keen-slider__slide">
                            <div className="border-comments flex h-full flex-col gap-4 border-2 p-6 shadow-lg">
                                <h3 className="mb-2 text-xl font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-comments mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="bg-details/10 text-details ring-details/20 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    target="_blank"
                                    href={project.deploy}
                                    className="border-secondary hover:bg-primary mt-auto w-fit border px-4 py-2"
                                >
                                    Ver projeto ➜
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {loaded && instanceRef.current && (
                    <>
                        <button
                            onClick={() => instanceRef.current?.prev()}
                            className="bg-background/80 border-foreground/10 hover:border-details absolute top-1/2 left-0 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border p-2 backdrop-blur-sm transition-colors lg:flex"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <button
                            onClick={() => instanceRef.current?.next()}
                            className="bg-background/80 border-foreground/10 hover:border-details absolute top-1/2 right-0 hidden translate-x-1/2 -translate-y-1/2 rounded-full border p-2 backdrop-blur-sm transition-colors lg:flex"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </>
                )}

                {loaded && instanceRef.current && (
                    <div className="mt-6 flex justify-center gap-2">
                        {[
                            ...Array(
                                instanceRef.current.track.details.slides.length
                            ).keys(),
                        ].map((idx) => (
                            <button
                                key={idx}
                                onClick={() =>
                                    instanceRef.current?.moveToIdx(idx)
                                }
                                className={`h-2 w-2 rounded-full transition-colors ${
                                    currentSlide === idx
                                        ? 'bg-details'
                                        : 'bg-foreground/20 hover:bg-foreground/40'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
