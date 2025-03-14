export function Projects() {
    return (
        <section
            id="projects"
            className="font-display flex flex-col gap-10 lg:px-28 lg:py-32"
        >
            <div className="flex max-w-full items-center gap-2">
                <h2 className="text-light-blue text-3xl font-normal whitespace-nowrap">
                    <span className="text-secondary pe-0.5">#</span>Projetos
                </h2>
                <div className="border-b-primary flex h-0 w-full items-end border align-bottom"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {[
                    {
                        title: 'ChertNodes',
                        description: 'Minecraft servers hosting',
                        stack: 'HTML SCSS Python Flask',
                    },
                    {
                        title: 'ProtectX',
                        description: 'Discord anti-crash bot',
                        stack: 'React Express Node.js',
                    },
                    {
                        title: 'Kahoot Answers Viewer',
                        description: 'Get answers to your kahoot quiz',
                        stack: 'CSS Express Node.js',
                    },
                ].map((project, index) => (
                    <div
                        key={index}
                        className="rounded-xl bg-gray-800 p-6 shadow-lg"
                    >
                        <h3 className="mb-2 text-xl font-semibold">
                            {project.title}
                        </h3>
                        <p className="mb-4 text-gray-400">
                            {project.description}
                        </p>
                        <p className="text-sm text-blue-400">{project.stack}</p>
                        <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600">
                            Live ➜
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}
