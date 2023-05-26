import './Projects.css'
import { CardProjects } from '../CardProjects/CardProjects'
import imgClima from '../../assets/proyectoClima.png'
import { motion } from 'framer-motion'

const projectsObj = [
    {
        id: 1,
        img: imgClima,
        title: 'Tiempo Meteorológico',
        description: 'Este es una aplicación del clima creada con React y la API OpenWeatherMap',
        tec: ['React', 'OpenWeatherMapApi']
    }
]

const Projects = () => {
    return (
        <div className='projects' id='projects'>
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
                className='section-projects'>
                <div className='container-title-projects'>
                    <h2>Proyectos</h2>
                </div>
                <div className='container-description-projects'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto exercitationem illum eum distinctio neque nulla soluta id commodi aliquam ullam!</p>
                </div>
                <div className='container-card-projects'>
                    <CardProjects projectsObj={projectsObj} />
                </div>
            </motion.section>
        </div>
    )
}

export { Projects }