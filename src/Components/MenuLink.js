import React from 'react'
import { NavLink } from 'react-router-dom'

import '../Styles/Components/MenuLink.scss'
import SVG from 'react-inlinesvg'

const MenuLink = (props) => {
    return (
        <NavLink className="menu-link" exact activeClassName="activeLink" to={props.to}>
            <SVG className={`${props.className} icon`} src={props.src}/>
            {props.text}
        </NavLink>
    )
}

export default MenuLink
