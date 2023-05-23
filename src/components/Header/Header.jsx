import { useState } from 'react'
import { MenuToggle } from '../MenuToggle/MenuToggle'
import './Header.css'
import { motion } from 'framer-motion'

const links = [
    {
        label: 'Sobre mi',
        route: '#about_me'
    },
    {
        label: 'Experiencia',
        route: '#experience'
    },
    {
        label: 'Proyectos',
        route: '#projects'
    },
    {
        label: 'Contacto',
        route: '#contact'
    }
]


const variants = {
    open: { x: '0%' },
    closed: { x: "120%" },
}

const variantXmark = {
    hidden: { rotate: -100, scale: 0 },
    visible: {
        rotate: 0,
        scale: 1,
        transition: { duration: .5, type: 'spring', mass: 1, delay: 0.2 }
    }
}

const variantsListMenu = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
            delay: .2
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(true)
        document.body.classList.add('no-scroll')
    }

    const closeModal = () => {
        setIsOpen(false)
        document.body.classList.remove('no-scroll')
    }

    return (
        <header>
            <div className='contianer-header'>
                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        delay: 0.2,
                        type: 'spring',
                        mass: 1
                    }}
                >Logo</motion.h1>
                <nav className='nav'>
                    <ul>
                        {links.map(({ label, route }, index) => (
                            <motion.li key={route}
                                initial={{
                                    x: -300,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 1,
                                    ease: 'easeInOut',
                                    delay: (index - .5) * 0.3,
                                    type: 'spring',
                                    mass: 2
                                }}
                            >
                                <a href={route}>{label}</a>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <nav className='contianer-header-mobil'>
                    <MenuToggle handleClick={handleClick}>
                        <div className={isOpen ? 'section-menu mostrarMenu' : 'section-menu'}>
                            <motion.div
                                animate={isOpen ? "open" : "closed"}
                                initial='closed'
                                variants={variants}
                                transition={{
                                    type: 'just'
                                }}
                                className='container-menu'
                            >
                                <div className='container-btn-close'>
                                    <h2 className='title-menu'>Menu</h2>
                                    <button className='btn-close' onClick={closeModal}>
                                        <motion.i
                                            variants={variantXmark}
                                            initial='hidden'
                                            animate={isOpen ? 'visible' : 'hidden'}
                                            className="fa-solid fa-xmark"></motion.i>
                                    </button>
                                </div>
                                <ul>
                                    {links.map(({ label, route }) => (
                                        <motion.li
                                            variants={variantsListMenu}
                                            key={route}
                                        >
                                            <a onClick={closeModal} href={route}>{label}</a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </MenuToggle>
                </nav>
            </div>
        </header>
    )
}

export { Header }