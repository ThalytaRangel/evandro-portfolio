export function Contacts() {
    return (
        <section
            id="contacts"
            className="font-display mb-24 flex flex-col lg:px-28"
        >
            <div className="mb-12 flex max-w-full items-center gap-2">
                <h2 className="text-light-blue text-3xl font-normal whitespace-nowrap">
                    <span className="text-secondary pe-0.5">#</span>Contato
                </h2>
                <div className="border-b-primary flex h-0 w-full items-end border align-bottom"></div>
            </div>
            <div>
                <p className="mb-4">
                    I’m interested in freelance opportunities. Feel free to
                    contact me!
                </p>
                <div className="flex justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        className="btn"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://discord.com/"
                        target="_blank"
                        className="btn"
                    >
                        Discord
                    </a>
                </div>
                <p className="mt-8">
                    Message me here:{' '}
                    <span className="font-mono">elias@elias.me</span>
                </p>
            </div>
        </section>
    )
}
