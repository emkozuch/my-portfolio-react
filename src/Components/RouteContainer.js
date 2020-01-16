import React from 'react'
import '../Styles/Components/RouteContainer.scss'

const RouteContainer = (props) => {
    return (
        <div className="route-container">
            {props.children}
        </div>
    )
}

export default RouteContainer
