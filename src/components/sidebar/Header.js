
import React, { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import { FaRegHeart, FaTasks } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle,FiMessageSquare } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import {BsPeople}from "react-icons/bs"


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
const Header = () => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
    <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            {menuCollapse ? <h2>Aspire</h2> : <h1>Aspire</h1>}
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (<FiArrowRightCircle />) : (<FiArrowLeftCircle />)}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>Home</MenuItem>
                            <MenuItem icon={<FiMessageSquare />}>Messages</MenuItem>
                            <MenuItem icon={<FaTasks />}>My Tasks</MenuItem>
                            <MenuItem icon={<BsPeople />}>Students</MenuItem>
                            <MenuItem icon={<BiCog />}>Settings</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;