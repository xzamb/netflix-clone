import React, {useState, useEffect} from 'react';

import './style.css';

const netflixLogoUrl = "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png";
const netflixAvatarLogoUrl = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png";

const Nav = () => {

    const [showBackground, handleShowBackground] = useState(false);

    useEffect(() => {
        //Adding listener to verify the scroll position
        window.addEventListener("scroll", () => handleShowBackground(window.scrollY > 100));
        
        //cleaning up
        return () => window.removeEventListener("scroll");
    }, []);

    return(
        <div className={`nav ${showBackground? 'nav__black' : ''}`}>
            <img className="nav__logo" src={netflixLogoUrl} alt="Netflix logo"/>
            <img className="nav__avatar" src={netflixAvatarLogoUrl} alt="avatar logo"/>
        </div>
    )
}

export default Nav;