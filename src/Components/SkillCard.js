import React from 'react'
import SVG from 'react-inlinesvg'
import '../Styles/Components/SkillCard.scss'

const SkillCard = (props) => {
    return (
        <div className="skill-card">
            <SVG className="skill-image" src={props.src}/>
            {props.title}
        </div>
        )
    }
    
    export default SkillCard
