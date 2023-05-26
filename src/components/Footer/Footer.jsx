import { Form } from '../Form/Form'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer' id='contact'>
            <section
                className='section-header'>
                <div className='container-contact'>
                    <h2>Contacto</h2>
                </div>
                <div className='container-form'>
                    <Form />
                </div>
                <div className='container-social-network'>
                    <ul>
                        <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export { Footer }