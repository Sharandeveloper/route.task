import React, { useState } from "react";
import "./navbar.css";

export const Navbar = () => 

{
    const [menuopen, setmenuopen] = useState(false)
    return
    { 
    <nav>
        <li>
            <link to = '/website'> website</link> 
        </li>
        <ul className = {menuopen ? "open" : ""}>

            <li>
                <link to = "/about">about</link>
                
            </li>
            <li>
                <link to = "/service">servie</link>
            </li>
            <li> <link to = "/contact">contact</link></li>
        </ul>
        div classname= "menu"
        onclick={() => {
            setmenuopen(!menuopen);
        }}
    </nav>
};
};