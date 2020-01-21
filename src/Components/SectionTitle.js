import React from 'react'
import '../Styles/Components/SectionTitle.scss'
const SectionTitle = (props) => {
    return (
        <div className="section-title">
            <h3>{props.title}</h3>
        </div>
    )
}

export default SectionTitle
