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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad alias quaerat tempore, aut tenetur ex omnis nobis rem sequi optio illo esse eaque necessitatibus distinctio placeat in reiciendis, architecto officia consequatur odio? Unde est voluptatum non corrupti blanditiis, perferendis dolore nisi voluptatibus aliquid, fugit laudantium, quaerat sequi inventore laborum!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa animi itaque quisquam maxime, eveniet nihil. Sunt inventore corrupti voluptate, provident velit quam facere earum commodi labore doloremque ad voluptatum quod quasi modi quia, nostrum eaque natus sapiente harum explicabo autem facilis, repudiandae magni. Tempora rem numquam dolor commodi laudantium porro? Cum assumenda ipsum, quasi ipsam id obcaecati commodi odio repudiandae sint. Soluta illo eos temporibus rerum provident. Mollitia, similique unde?</p>
                </div>
            </motion.section>
        </div>
    )
}

export { Experience }