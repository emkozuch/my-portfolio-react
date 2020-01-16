import React from 'react'
import SVG from 'react-inlinesvg'
import '../Styles/Components/RouteTitle.scss'

const RouteTitle = (props) => {
    return (
        <div className="route-title-container">
                <h2>{props.title}</h2>
                <SVG className="route-icon" src={props.src} />
            </div>
    )
}

export default RouteTitle
