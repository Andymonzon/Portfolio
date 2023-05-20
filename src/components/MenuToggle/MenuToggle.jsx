import { motion } from 'framer-motion'

const variantBars = {
    hidden: { rotate: -100, scale: 0 },
    visible: {
        rotate: 0,
        scale: 1,
        transition: { duration: .5, type: 'spring', mass: 1, delay: 0.2 }
    }
}

const MenuToggle = ({ handleClick, children }) => {

    return (
        <>
            <button onClick={handleClick} className="btn-menu">
                <motion.i
                    variants={variantBars}
                    initial='hidden'
                    animate='visible'
                    className="fa-solid fa-bars"></motion.i>
            </button>
            {children}
        </>
    )
}

export { MenuToggle }