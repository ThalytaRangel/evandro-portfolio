export function Experiences() {
    return (
        <section
            id="experience"
            className="font-display flex flex-col lg:px-28"
        >
            <div className="mb-12 flex max-w-full items-center gap-2">
                <h2 className="text-light-blue text-3xl font-normal whitespace-nowrap">
                    <span className="text-secondary pe-0.5">#</span>Experiência
                </h2>
                <div className="border-b-primary flex h-0 w-full items-end border align-bottom"></div>
            </div>
            <div className="flex flex-col gap-8">
                {[
                    {
                        title: 'Lead Software Engineer at Google',
                        period: 'Nov 2019 - Present',
                        description:
                            "Developing innovative solutions for Google's core search algorithms, enhancing search accuracy and user experience.",
                    },
                    {
                        title: 'Junior Software Engineer at Apple',
                        period: 'Jan 2016 - Dec 2017',
                        description:
                            'Shaped the architecture of mission-critical software projects, ensuring scalable and efficient systems.',
                    },
                    {
                        title: 'Software Engineer at Meta',
                        period: 'Jan 2017 - Oct 2019',
                        description:
                            'Focused on backend systems for large-scale data processing and user engagement features.',
                    },
                ].map((job, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="mb-2 text-xl font-semibold">
                            {job.title}
                        </h3>
                        <p className="mb-2 text-gray-400">{job.period}</p>
                        <p>{job.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
