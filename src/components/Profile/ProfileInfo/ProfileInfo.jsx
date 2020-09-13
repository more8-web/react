import React from "react";
import profileInfo from "./ProfileInfo.module.css";
import banner from "./img/main-banner-image.png";
import avatar from "./img/avatar.jpeg"

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src={banner} alt={''} className={profileInfo.img}/>
            </div>

            <div className={profileInfo.aboutBlock}>
                <img src={avatar} alt={''} className={profileInfo.awa}/>
            </div>
        </div>
    )
}

export default ProfileInfo