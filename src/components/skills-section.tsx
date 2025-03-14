import SkillsDoodles from '../assets/doddles.png'
export function Skills() {
    return (
        <section id="skills" className="font-display flex flex-col lg:px-28">
            <div className="mb-12 flex max-w-full items-center gap-2">
                <h2 className="text-light-blue text-3xl font-normal whitespace-nowrap">
                    <span className="text-secondary pe-0.5">#</span>Skills
                </h2>
                <div className="border-b-primary flex h-0 w-full items-end border align-bottom"></div>
            </div>
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-32">
                <img src={SkillsDoodles} alt="Doodles da sessão" />
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">
                            Languages
                        </h3>
                        <p>TypeScript, Lua, Python, JavaScript</p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">
                            Databases
                        </h3>
                        <p>SQLite, PostgreSQL, Mongo</p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Tools</h3>
                        <p>
                            VSCode, Neovim, Linux, Figma, Arc, Git, Font Awesome
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">
                            Frameworks
                        </h3>
                        <p>React, Vue, Flask, Express.js</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
