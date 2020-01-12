import React from 'react'
import SVG from 'react-inlinesvg'
import '../Styles/Components/MediaLinks.scss'
import githubIcon from '../images/icons/github.svg'
import linkedinIcon from '../images/icons/linkedin.svg'
function MediaLinks() {
    return (
        <div className="media-links-container">
            <a target="_blank"  href="#"><SVG className="github icon" src={githubIcon} /></a>
            <a target="_blank"  href="#"><SVG className="linkedin icon" src={linkedinIcon} /></a>
        </div>
    )
}

export default MediaLinks
