import React, { Component } from 'react'
import '../Styles/Components/ProjectCard.scss'
import github from '../images/icons/github.svg'
import www from '../images/icons/www.svg'
import SVG from 'react-inlinesvg'

class ProjectCard extends Component {
    state = {
        hoover: false,
        className: "invisible"
    }

    handleMouseEnter = () => {
        this.setState({
            hoover: true,
            className: "visible"
        })
    }
    handleMouseLeave = () => {
        this.setState({
            hoover: false,
            className: "invisible"
        })
    }
    render() {
        return (
            <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={{ backgroundImage: `url(${this.props.backgroundImage})` }} className="project-card">
                <div className={`content-container ${this.state.className}`}>
                    <div className="card-text">
                        <h3>{this.props.cardTitle}</h3>
                    </div>
                    <div className="links-container">
                        <a href={this.props.githubLink} target="_blank"><SVG className="link-icon" src={github} /></a>
                        <a href={this.props.websiteLink} target="_blank"><SVG className="link-icon" src={www} /></a>
                    </div>
                </div>

            </div>
        )
    }
}

export default ProjectCard
