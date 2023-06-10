import './Projects.css'
import { CardProjects } from '../CardProjects/CardProjects'
import imgClima from '../../assets/proyectoClima.png'
import imgTareas from '../../assets/tasksproyecto.png'
import imgPeliculas from '../../assets/reactPeliculas.png'
import { motion } from 'framer-motion'

const projectsObj = [
    {
        id: 1,
        img: imgClima,
        title: 'Tiempo Meteorológico',
        description: 'Esta es una aplicación del clima creada con React y la API OpenWeatherMap',
        tec: ['React', 'OpenWeatherMapApi'],
        link: 'https://climaviteandres.netlify.app/',
    },
    {
        id: 2,
        img: imgTareas,
        title: 'Página web de Tareas',
        description: 'Esta es una aplicación para poder crear tareas, editarlas, eliminarlas y marcar como completas. Creada con React, NodeJS, Express y MySQL',
        tec: ['React', 'NodeJS', 'Express', 'MySQL'],
        link: 'https://taskreact-production.up.railway.app/',
    },
    {
        id: 3,
        img: imgPeliculas,
        title: 'Página web de Películas y Series',
        description: 'Página que permite buscar peliculas y series, brindando informacion al respecto. Creada con React, tailwindcss y la API de themoviedb (sólo para PC)',
        tec: ['React', 'Tailwindcss', 'Themoviedb'],
        link: 'https://github.com/Andymonzon/Portfolio'
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
                viewport={{ once: true, amount: 0.1 }}
                className='section-projects'>
                <div className='container-title-projects'>
                    <h2>Proyectos</h2>
                </div>
                <div className='container-description-projects'>
                    <p>Esto son algunos de mis proyectos</p>
                </div>
                <div className='container-card-projects'>
                    <CardProjects projectsObj={projectsObj} />
                </div>
            </motion.section>
        </div>
    )
}

export { Projects }