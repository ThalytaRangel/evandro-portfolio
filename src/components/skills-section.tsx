import SkillsDoodles from '../assets/doddles.png'
export function Skills() {
    return (
        <section
            id="skills"
            className="font-display flex w-full flex-col lg:px-28"
        >
            <div className="mb-12 flex w-full items-center gap-2">
                <h2 className="text-light-blue text-3xl font-normal whitespace-nowrap">
                    <span className="text-secondary pe-0.5">#</span>Habilidades
                </h2>
                <div className="border-b-primary flex h-0 w-full items-end border align-bottom"></div>
            </div>
            <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:gap-32">
                <img
                    className="justify-center object-contain max-md:hidden lg:h-[600px] lg:w-5/12"
                    src={SkillsDoodles}
                    alt="Doodles da sessão"
                />
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="border-comments flex h-fit flex-col gap-2 border-2">
                        <h3 className="text-foreground border-comments border-b-2 px-2 py-1 text-xl font-normal">
                            Linguagens de programação e Marcação
                        </h3>
                        <p className="text-comments px-2 py-1">
                            JavaScript, TypeScript, HTML e CSS
                        </p>
                    </div>
                    <div className="border-comments flex h-fit flex-col gap-2 border-2">
                        <h3 className="text-foreground border-comments mb-4 border-b-2 px-2 py-1 text-xl font-normal">
                            Bancos de Dados e ORM
                        </h3>
                        <p className="text-comments px-2 py-1">
                            Nodejs e Prisma
                        </p>
                    </div>
                    <div className="border-comments flex h-fit flex-col gap-2 border-2">
                        <h3 className="text-foreground border-comments mb-4 border-b-2 px-2 py-1 text-xl font-normal">
                            Ferramentas e Editores
                        </h3>
                        <p className="text-comments px-2 py-1">
                            Docker, Git, GitHub, VSCode e Figma
                        </p>
                    </div>
                    <div className="border-comments flex h-fit flex-col gap-2 border-2">
                        <h3 className="text-foreground border-comments mb-4 border-b-2 px-2 py-1 text-xl font-normal">
                            Frameworks e Bibliotecas
                        </h3>
                        <p className="text-comments px-2 py-1">
                            Reactjs, Nextjs, Astro, Nodejs, Flask, Sass,
                            Tailwindcss Expressjs e Jest
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
