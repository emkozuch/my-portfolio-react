import React from 'react'
import RouteContainer from '../Components/RouteContainer'
import RouteTitle from '../Components/RouteTitle'
import mail from '../images/icons/mail.svg'
import '../Styles/Routes/Contact.scss'
function Contact() {
    return (
        <RouteContainer>
            <RouteTitle src={mail} title="Kontakt" />
            <div className="contact-form-container">
                <form>
                    <div className="first-row">
                        <input type="text" placeholder="Imię"></input>
                        <input type="email" placeholder="Email"></input>
                    </div>
                    <div className="second-row">
                        <textarea placeholder="Wiadomość..."></textarea>
                        <button>Wyślij wiadomość</button>
                    </div>


                </form>
            </div>
        </RouteContainer>
    )
}

export default Contact
