import TechImage from '../assets/technologies_img.png'

export function About() {
    return (
        <section
            id="about"
            className="font-display flex flex-col items-center justify-between gap-10 px-6 py-16 lg:max-h-svh lg:flex-row lg:gap-0 lg:px-24 lg:py-28"
        >
            <div
                id="about-me"
                className="flex flex-col p-12 text-start lg:h-[744px]"
            >
                <div className="flex max-w-full items-center gap-2">
                    <h2 className="text-light-blue text-3xl font-normal whitespace-nowrap">
                        <span className="text-secondary pe-0.5">#</span>Sobre
                        mim
                    </h2>
                    <div className="border-b-primary flex h-0 w-sm items-end border align-bottom"></div>
                </div>
                <div className="text-light-blue mt-8 text-xl font-normal">
                    <p>
                        <span className="me-5">1</span>/**
                    </p>
                    <p>
                        <span className="me-5">2</span>* I have 5 years of
                        еxperience in web
                    </p>
                    <p>
                        <span className="me-5">3</span>* development lorem ipsum
                        dolor sit amet,
                    </p>
                    <p>
                        <span className="me-5">4</span>* consectetur adipiscing
                        elit, sed do eiusmod
                    </p>
                    <p>
                        <span className="me-5">5</span>* tempor incididunt ut
                        labore et dolore
                    </p>
                    <p>
                        <span className="me-5">6</span>* magna aliqua. Ut enim
                        ad minim veniam,
                    </p>
                    <p>
                        <span className="me-5">7</span>* quis nostrud
                        exercitation ullamco laboris
                    </p>
                </div>
            </div>
            <div
                id="technologies"
                className="flex flex-col p-12 text-start lg:h-[744px]"
            >
                <div className="flex max-w-full items-center gap-2">
                    <h2 className="text-light-blue text-3xl font-normal text-inherit">
                        <span className="text-secondary pe-0.5">#</span>
                        Tecnologias
                    </h2>
                    <div className="border-b-primary flex h-0 w-sm items-end border align-bottom"></div>
                </div>
                <img src={TechImage} alt="Foto com ícones das tecnologias" />
            </div>
        </section>
    )
}
