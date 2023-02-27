import React , {useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Ваше сообщение было отправлено, мы свяжемся с Вами в ближайшее время!.</p>
    )
}

function ContactForm({props , formStyle}) {
    const [ result,showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_3n6yrtc', 
            'template_aj3zuuq', 
            e.target, 
            'FLUg8xS2H_yp_LcfV'
        )
        .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
            <div className="form-group">
                <input 
                type="text"
                name="fullname"
                placeholder="Имя"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="email"
                name="email"
                placeholder="Email адрес"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="text"
                name="phone"
                placeholder="Номер Телефона"
                required
                />
            </div>


            <div className="form-group">
                <input 
                type="text"
                name="subject"
                placeholder="Тема"
                required
                />
            </div>

            <div className="form-group">
                <textarea 
                name="message"
                placeholder="Ваше сообщение"
                required
                >
                </textarea>
            </div>  

            <div className="form-group">
                <button type="submit" className="btn-default btn-medium btn-border round btn-icon">Отправить</button>
            </div> 

            <div className="form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;
