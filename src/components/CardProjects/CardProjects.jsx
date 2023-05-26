import './CardProjects.css'
import { motion } from 'framer-motion'

const CardProjects = ({ projectsObj }) => {
    return (
        <ul className='ul-card-projects'>
            {projectsObj.map((project) => (
                <motion.li
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .5,
                        }
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{
                        y: -15,
                        transition: {
                            duration: .5,
                            type: 'spring'
                        }
                    }}
                    key={project.id}>
                    <a href="" target='_black'>
                        <div>
                            <img className='img-projects-card' src={project.img} alt={project.title} />
                            <div className='text'>
                                <h3 className='title-projec-card'>{project.title}</h3>
                                <p className='description-projec-card'>{project.description}</p>
                                <div
                                    className='container-tec'>
                                    {project.tec.map((code, index) => (
                                        <div className='tec-div'
                                            key={index}>{code}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                </motion.li>
            ))
            }
        </ul >
    )
}

export { CardProjects }