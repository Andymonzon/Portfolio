import './Welcome.css'
import { motion } from 'framer-motion'
import { SphereAnimation } from '../SphereAnimation/SphereAnimation'
import { TecAnimation } from '../TecAnimation/TecAnimation'

const variants = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 1,
        transition: {
            duration: .5,
            type: 'spring',
            mass: 1,
            delay: 0.2
        }
    }
}

const variantP = {
    hidden: {
        y: '-100%',
        opacity: 0
    },
    visible: {
        y: '0%',
        opacity: 1,
        transition: {
            duration: 1,
            type: 'spring',
            delay: .7,
            mass: 1
        }
    }
}

const Welcome = () => {

    return (
        <div className='container-welcome'>
            <section className='container-text-welcome'>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={variants} className='text-card-welcome'>
                    <h2>Hola, yo soy</h2>
                </motion.div>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={variants}
                    className='text-card-welcome'>
                    <h3>Andrés Monzón</h3>
                </motion.div>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={variants}
                    className='text-card-welcome'>
                    <h4>Desarrollador web</h4>
                </motion.div>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={variantP}
                    className='description-welcome'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta, magnam quo cupiditate distinctio asperiores eum aliquid ea quam perferendis.</p>
                </motion.div>
                <motion.div
                    initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: 1
                    }}
                    transition={{
                        duration: .5,
                        delay: 1,
                        type: 'spring',
                        mass: 1
                    }}
                    className='btn-welcome-cv'
                    >
                    <a href='https://google.com' target='_black'>Ver CV</a>
                </motion.div>
            </section>
            <motion.section
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.2
                }}
                className='section-welcomo-img'>
                <SphereAnimation />
                <TecAnimation />
            </motion.section>
        </div>
    )
}

export { Welcome }