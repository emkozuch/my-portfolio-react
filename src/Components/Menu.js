import React from 'react'
import MenuLink from './MenuLink'
import houseIcon from '../images/icons/house.svg';
import mailIcon from '../images/icons/mail.svg';
import userIcon from '../images/icons/user.svg';
import workIcon from '../images/icons/work.svg';

const Menu = () => {
    return (
        <div className="menu-container">
            <ul className="nav-links-list">
                <li><MenuLink className="house" src={houseIcon} to="/" text="Strona Główna" /></li>
                <li><MenuLink className="document" src={userIcon} to="/about" text="O mnie" /></li>
                <li><MenuLink className="mail" src={workIcon} to="/portfolio" text="Portfolio" /></li>
                <li><MenuLink className="user" src={mailIcon} to="/contact" text="Kontakt" /></li>
            </ul>
        </div>
    )
}

export default Menu
