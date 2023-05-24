import './TecAnimation.css'
import TagCloud from 'TagCloud'
import { useEffect } from 'react'

const TecAnimation = () => {

    useEffect(() => {
        return () => {
            const container = '.tagcloud'
            const texts = [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "NodeJS",
                "Express",
                "MySQL"
            ]

            const options = {
                radius: 270,
                maxSpeed: 'normal',
                initSpeed: 'normal',
                keep: true,
            }

            TagCloud(container, texts, options)
        }
    },[])

    return(
        <div className="container-tec-animation">
            <span className='tagcloud'></span>
        </div>
    )
}

export { TecAnimation }