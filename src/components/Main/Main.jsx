import { Welcome } from "../Welcome/Welcome"
import './Main.css'

const Main = () => {
    return(
        <main className="main">
            <Welcome />
            <div className="separator"></div>
        </main>
    )
}

export { Main }