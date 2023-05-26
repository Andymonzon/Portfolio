import { About } from "../About/About"
import { Experience } from "../Experience/Experience"
import { Projects } from "../Projects/Projects"
import { Welcome } from "../Welcome/Welcome"
import './Main.css'

const Main = () => {
    return(
        <main className="main">
            <Welcome />
            <About/>
            <Experience />
            <Projects />
        </main>
    )
}

export { Main }