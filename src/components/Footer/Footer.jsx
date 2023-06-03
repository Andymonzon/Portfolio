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
                        <li><a href="https://github.com/Andymonzon" target='_blank' rel='noreferrer'><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/andr%C3%A9s-monz%C3%B3n-14a724279/" rel='noreferrer' target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export { Footer }