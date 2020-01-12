import React from 'react'
import '../Styles/Components/Layout.scss'
import Avatar from './Avatar'
import Menu from './Menu'
import MediaLinks from './MediaLinks'

const Layout = (props) => {
    return (
        <div className="layout-main-container">
            <div className="layout-left-column">
                <Avatar />
                <Menu/>
                <MediaLinks/>
            </div>
            <div className="layout-right-column">
                {props.children}
            </div>
        </div>
    )
}

export default Layout
