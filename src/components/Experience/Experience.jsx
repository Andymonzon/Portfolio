import './Experience.css'
import { motion } from 'framer-motion'

const Experience = () => {

    return (
        <div
            id='experience'
            className="experience">
            <motion.section
                initial={{
                    y: 100,
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.5
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="section-experience">
                <div className="container-title-experience">
                    <h2>Experiencia</h2>
                </div>
                <div
                    className="container-description-experience">
                    <p >Actualmente no tengo experiencia pero hago proyectos para poder practicar las tecnologías adquiridas. Tengo muchas ganas de aportar mi granito de arena, ganar experiencia y conocer gente nueva.</p>
                </div>
            </motion.section>
        </div>
    )
}

export { Experience }