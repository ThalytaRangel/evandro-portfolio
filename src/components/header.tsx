import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const menuItems = [
    { id: 'about-me', label: 'Sobre mim' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Projetos' },
    { id: 'experience', label: 'Experiências' },
    { id: 'contacts', label: 'Contatos' },
] as const

type MenuItemProps = {
    id: string
    label: string
    onClick: (id: string) => void
    className?: string
    customContent?: React.ReactNode
}

const MenuItem = ({
    id,
    label,
    onClick,
    className = '',
    customContent,
}: MenuItemProps) => (
    <button
        onClick={() => onClick(id)}
        className={className || 'hover:text-details'}
        aria-label={`Ir para ${label}`}
    >
        {customContent || (
            <>
                <span className="text-secondary pe-0.5">#</span>
                {label}
            </>
        )}
    </button>
)

const DesktopNav = ({ onItemClick }: { onItemClick: (id: string) => void }) => (
    <nav className="hidden space-x-6 lg:flex">
        {menuItems.map((item) => (
            <MenuItem
                key={item.id}
                id={item.id}
                label={item.label}
                onClick={onItemClick}
            />
        ))}
    </nav>
)

const MobileNav = ({
    isOpen,
    onItemClick,
}: {
    isOpen: boolean
    onItemClick: (id: string) => void
}) => {
    if (!isOpen) return null

    return (
        <nav className="bg-background border-foreground/10 absolute top-20 right-0 left-0 flex h-screen flex-col border-b lg:hidden">
            {menuItems.map((item, index) => (
                <MenuItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    onClick={onItemClick}
                    className={`px-10 py-4 text-left ${
                        index !== menuItems.length - 1
                            ? 'border-foreground/5 border-b'
                            : ''
                    }`}
                />
            ))}
        </nav>
    )
}

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
    }

    return (
        <header className="border-foreground/10 bg-background fixed top-0 flex w-full items-center justify-between border-b px-6 py-6 lg:px-12">
            <MenuItem
                id="home"
                label="Evandro Damaso"
                onClick={scrollToSection}
                className="hover:text-details text-2xl font-bold transition-colors"
                customContent={
                    <>
                        <span className="text-details pe-0.5">&lt;</span>
                        Evandro Damaso{' '}
                        <span className="text-details pe-0.5">&frasl;&gt;</span>
                    </>
                }
            />

            <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
                {isMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>

            <DesktopNav onItemClick={scrollToSection} />
            <MobileNav isOpen={isMenuOpen} onItemClick={scrollToSection} />
        </header>
    )
}
