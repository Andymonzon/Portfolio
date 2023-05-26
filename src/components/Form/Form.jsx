import './Form.css'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loading } from '../Loading/Loading';

const initialForm = {
    user_name: '',
    user_email: '',
    message: ''
}

const Form = () => {

    const [formInp, setFormInp] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setErrors(validateForm(formInp))

        if (Object.keys(errors).length === 0) {

            setLoading(true)

            emailjs.sendForm('service_dz7vfx7', 'template_r9p3lka', form.current, 'kz0uNGgpXzYes8pP2')
                .then(() => {
                    setLoading(false)
                    setResponse(true)
                    setFormInp(initialForm)
                    setTimeout(() => setResponse(false), 5000)
                });

        } else {
            return
        }
    };

    const validateForm = (form) => {
        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexComments = /^.{1,600}$/;

        if (!form.user_name.trim()) {
            errors.user_name = 'El campo "Nombre" es requerido'
        } else if (!regexName.test(form.user_name.trim())) {
            errors.user_name = 'El campo "Nombre" sólo acepta letras y espacios en blanco'
        }

        if (!form.user_email.trim()) {
            errors.user_email = 'EL campo "Email" es requerido'
        } else if (!regexEmail.test(form.user_email.trim())) {
            errors.user_email = 'El campo "Email" es incorrecto'
        }

        if (!form.message.trim()) {
            errors.message = 'EL campo "Comentario" es requerido'
        } else if (!regexComments.test(form.message.trim())) {
            errors.message = 'El campo "Comentario" no debe exceder los 600 caracteres'
        }

        return errors
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormInp({
            ...formInp,
            [name]: value
        })

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            })
        }
    }

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(formInp))
    }

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className='form'>
                <input type="text" name="user_name" onBlur={handleBlur} onChange={handleChange} required placeholder='Nombre' value={formInp.user_name} />
                {errors.user_name && <p className='msg-error-inp'>{errors.user_name}</p>}
                <input type="email" name="user_email" onBlur={handleBlur} onChange={handleChange} required placeholder='Email' value={formInp.user_email} />
                {errors.user_email && <p className='msg-error-inp'>{errors.user_email}</p>}
                <textarea name="message" onBlur={handleBlur} onChange={handleChange} required placeholder='Comentario' value={formInp.message} />
                {errors.message && <p className='msg-error-inp'>{errors.message}</p>}
                <input type="submit" value="Send" />
            </form>
            {loading && <Loading />}
            {response && <div className='container-msg-succes'><p>El mensaje ha sido enviado</p></div>}
        </>
    )
}

export { Form }