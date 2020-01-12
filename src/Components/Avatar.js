import React from 'react'
import avatarImage from '../images/img_avatar.png'
import '../Styles/Components/Avatar.scss'
const Avatar = () => {
    return (
        <div className="avatar-container">
            <img className="avatar-image" src={avatarImage} alt="avatar-image" />
            <div className="name-tag-container">
                <h3 className="name-tag">Marcin Kożuchowski</h3>
            </div>

        </div>
    )
}

export default Avatar