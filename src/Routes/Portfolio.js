import React, { Component } from 'react'
import RouteTitle from '../Components/RouteTitle'
import workIcon from '../images/icons/work.svg'
import RouteContainer from '../Components/RouteContainer'
import '../Styles/Components/RouteContainer.scss'
import Filter from '../Components/Filter'
import '../Styles/Routes/Portfolio.scss'
import ProjectCard from '../Components/ProjectCard'
import { projects } from '../appData/projects-data'
class Portfolio extends Component {
    state = {
        filter: ""
    }

    callbackFunction = (childData) => {
        this.setState({
            filter: childData
        })
    }
    render() {
        return (
            <RouteContainer>
                <RouteTitle title="Portfolio" src={workIcon} />
                <Filter parentCallback={this.callbackFunction} />
                <div className="projects-container">
                    {projects.map((project) => {
                        if (this.state.filter === "all") {
                            return <ProjectCard backgroundImage={project.background} githubLink={project.github} websiteLink={project.website} cardTitle={project.title} />
                        } else {
                            if (project.type === this.state.filter) {
                                return <ProjectCard backgroundImage={project.background} githubLink={project.github} websiteLink={project.website} cardTitle={project.title} />
                            }
                        }
                    })}
                </div>
            </RouteContainer>
        )
    }
}

export default Portfolio
