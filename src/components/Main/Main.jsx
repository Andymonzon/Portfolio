import { About } from "../About/About"
import { Welcome } from "../Welcome/Welcome"
import './Main.css'

const Main = () => {
    return(
        <main className="main">
            <Welcome />
            <div id='about_me' className="separator"></div>
            <About/>
            <div id='experience' className="separator"></div>

        </main>
    )
}

export { Main }