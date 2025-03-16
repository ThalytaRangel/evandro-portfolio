export function Experiences() {
    const experiences = [
        {
            title: 'Desenvolvedor Web - Lab Yes!',
            period: 'Maio 2023 - Presente',
            description:
                'Atuando como desenvolvedor web voluntário na Lab Yes!, contribuo para a criação de aplicações web voltadas a solucionar demandas reais de clientes. Trabalho integrado a uma equipe multidisciplinar composta por desenvolvedores, Product Owners (POs) e líderes de projeto, seguindo metodologias ágeis como Scrum e Kanban.',
        },
        {
            title: 'Desenvolvedor Web - Rocketseat (Bootcamp)',
            period: 'Junho 2022 - Novembro 2023',
            description:
                'Durante minha formação no Programa Explorer da Rocketseat, aprofundei meus conhecimentos em desenvolvimento web fullstack, participando de projetos práticos que envolveram desde o desenvolvimento front-end até a criação de APIs.',
        },
        {
            title: 'Bancário - Banco do Brasil',
            period: 'Janeiro 2004 - Março 2021',
            description:
                'Ao longo de 17 anos no Banco do Brasil, desenvolvi habilidades sólidas em gestão, atendimento ao cliente, análise financeira e processos administrativos. Durante minha trajetória, fui responsável por garantir a excelência no suporte a clientes, resolução de demandas e otimização de processos internos.',
        },
    ]
    return (
        <section
            id="experience"
            className="font-display flex w-full flex-col lg:px-28"
        >
            <div className="mb-12 flex w-full items-center gap-2">
                <h2 className="text-light-blue text-3xl font-normal whitespace-nowrap">
                    <span className="text-secondary pe-0.5">#</span>Experiência
                </h2>
                <div className="border-b-primary flex h-0 w-full items-end border align-bottom"></div>
            </div>
            <div className="flex w-full flex-col gap-8">
                {experiences.map((job, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="mb-2 text-xl font-semibold">
                            {job.title}
                        </h3>
                        <p className="text-comments mb-2">{job.period}</p>
                        <p className="text-light-blue">{job.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
