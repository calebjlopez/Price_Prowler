import React, {useState} from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';


const Header = () => {
const [menuOpened, setMenuOpened] = useState(false)
const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800)    
        {
            return {display: !menuOpened && "none"}
        }
    }

    return (
        <header id="masthead" className="site-header">
        <div className="header-container">
        <div className="flex-row">
            <div className="col-6">
                <div className="mob-flex">
                    <div className="logo">
                        <a href="/">
                            <div className="logo-box">
                                <img src="./PP-Logo.png" />
                                <h2>Price Prowler</h2>
                            </div>
                        </a>
                    </div>
                    <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                        <AiOutlineMenu size={30}/>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="menu-wrapper">
                    <ul style={getMenuStyles(menuOpened)} id="site-navigation">
                        <li><NavLink exact="true" activeclassname="active" to="/">Home</NavLink></li>
                        <li><NavLink activeclassname="active" to="/about">About Us</NavLink></li>
                        <li><NavLink activeclassname="active" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</header>
)
}

export default Header