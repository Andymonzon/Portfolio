import svgAbout from '../../assets/undraw_programming_re_kg9v.svg'
import './About.css'
import { motion } from 'framer-motion'

const cardVariants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const About = () => {
    return (
        <div className='about' id='about_me'>
            <motion.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className='section-about'
            >
                <motion.div
                    className='container-about'>
                    <div className='container-about-title'>
                        <h2 className='title-about'>Sobre mí</h2>
                    </div>
                    <div className='container-description-about'>
                        <p className='description-about'>
                            Soy una persona responsable, comprometida y apasionada por la tecnología.
                        </p>
                        <p className='description-about'>
                            Realicé mis estudié en la <a className='link-presentation' href="https://utn.edu.ar/es/" target='_blank' rel='noreferrer'>Universidad Tecnológica Nacional</a>. He participado en el programa de <a className='link-presentation' href="https://www.argentina.gob.ar/economia/conocimiento/argentina-programa" target='_black' rel='noreferrer'>Argentina 4.0</a>.
                        </p>
                        <p className='description-about'>
                            Actualmente sigo perfeccionando mis conocimientos ya adquiridos y aprendiendo nuevos lenguajes.
                        </p>
                        <p className='description-about'>
                            Debajo puedes ver algunas tecnologías que utilizo.
                        </p>
                    </div>
                    <div className='container-ul-about-1024'>
                        <ul>
                            <div>
                                <li><span style={{ color: '#FF5733' }} className='icon-about-1024'><i className="fa-brands fa-html5"></i></span>HTML</li>
                                <li><span style={{ color: '#2965f1' }} className='icon-about-1024'><i className="fa-brands fa-css3"></i></span>CSS</li>
                                <li><span style={{ color: '#f80' }} className='icon-about-1024'><i className="fa-brands fa-js"></i></span>JavaScript</li>
                            </div>
                            <div>
                                <li><span style={{ color: '#61DBFB' }} className='icon-about-1024'><i className="fa-brands fa-react"></i></span>React</li>
                                <li><span style={{ color: '#68a063' }} className='icon-about-1024'><i className="fa-brands fa-node-js"></i></span>NodeJs</li>
                                <li><span style={{ color: '#00758F' }} className='icon-about-1024'><i className="fa-solid fa-database"></i></span>MySql</li>
                            </div>
                        </ul>
                    </div>
                </motion.div>
                <div className='container-img-1024'>
                    <img className='svg-1024-about' src={svgAbout} alt="" />
                </div>
            </motion.section>
            <motion.div
                initial={{
                    y: 100,
                    opacity: 0
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.5
                }}
                viewport={{ once: true }}
                className='container-img-about'>
                <ul className='ul-about-phone'>
                    <div>
                        <li><span style={{ color: '#61DBFB' }} className='icon-about'><i className="fa-brands fa-react"></i></span>React</li>
                        <li><span style={{ color: '#68a063' }} className='icon-about'><i className="fa-brands fa-node-js"></i></span>NodeJs</li>
                        <li><span style={{ color: '#00758F' }} className='icon-about'><i className="fa-solid fa-database"></i></span>MySql</li>
                    </div>
                    <div>
                        <li>HTML<span style={{ color: '#FF5733' }} className='icon-about'><i className="fa-brands fa-html5"></i></span></li>
                        <li>CSS<span style={{ color: '#2965f1' }} className='icon-about'><i className="fa-brands fa-css3"></i></span></li>
                        <li>JavaScript<span style={{ color: '#f80' }} className='icon-about'><i className="fa-brands fa-js"></i></span></li>
                    </div>
                </ul>
                <img className='img-about' src={svgAbout} alt="" />
            </motion.div>
            <motion.div
                initial={{
                    y: 100,
                    opacity: 0
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 0.5
                }}
                viewport={{ once: true }}
                className='container-img-about-768'>
                <ul>
                    <li><span style={{ color: '#FF5733' }} className='icon-about'><i className="fa-brands fa-html5"></i></span>HTML</li>
                    <li><span style={{ color: '#2965f1' }} className='icon-about'><i className="fa-brands fa-css3"></i></span>CSS</li>
                    <li><span style={{ color: '#f80' }} className='icon-about'><i className="fa-brands fa-js"></i></span>JavaScript</li>
                </ul>
                <img className='img-about' src={svgAbout} alt="" />
                <ul className='ul-2'>
                    <li>React<span style={{ color: '#61DBFB' }} className='icon-about'><i className="fa-brands fa-react"></i></span></li>
                    <li>NodeJs<span style={{ color: '#68a063' }} className='icon-about'><i className="fa-brands fa-node-js"></i></span></li>
                    <li>MySql<span style={{ color: '#00758F' }} className='icon-about'><i className="fa-solid fa-database"></i></span></li>
                </ul>
            </motion.div>
        </div>
    )
}

export { About }