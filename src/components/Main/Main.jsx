import { About } from "../About/About"
import { Projects } from "../Projects/Projects"
import { Welcome } from "../Welcome/Welcome"
import './Main.css'

const Main = () => {
    return(
        <main className="main">
            <Welcome />
            <About/>
            <Projects />
        </main>
    )
}

export { Main }