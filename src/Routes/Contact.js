import React, { Component } from 'react'
import RouteContainer from '../Components/RouteContainer'
import RouteTitle from '../Components/RouteTitle'
import mail from '../images/icons/mail.svg'
import '../Styles/Routes/Contact.scss'
import SectionTitle from '../Components/SectionTitle'

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <RouteContainer>
                <RouteTitle src={mail} title="Kontakt." />
                <div className="contact-form-container">
                    <SectionTitle title="Kontakt" />
                    <form onSubmit={this.handleSubmit}>
                        <div className="first-row">
                            <input onChange={this.handleChange} name="name" type="text" placeholder="Imię"></input>
                            <input onChange={this.handleChange} name="email" type="email" placeholder="Email"></input>
                        </div>
                        <div className="second-row">
                            <textarea onChange={this.handleChange} name="message" placeholder="Wiadomość..."></textarea>
                            <button type="submit">Wyślij wiadomość</button>
                        </div>
                    </form>
                </div>
            </RouteContainer>
        )
    }
}

export default Contact
