import React, {useState} from "react";
import{
    ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { MdLibraryBooks } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import "react-pro-sidebar/dist/css/styles.css";
import "../style/header.css";
import Home from "../components/Home.js";
import Contact from "../components/Contact.js";
import Dbtable from "../components/Dbtable.js";
import Form from "../components/Form.js";
import Notice from "../components/Notice.js";
import FoodMenu from "../components/FoodMenu.js";
function Header(){
    const [menuCollapse, setMenuCollapse] = useState(false)
    const [openMenu, setOpenMenu]=React.useState(null)
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        setOpenMenu(true)
      }
    const closeMenu=()=>{
      setOpenMenu(false)
    }
    return(
      
        <>
        <Router>
      <div id="header">
      
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
            <div className="logotext">
                <p>{menuCollapse ? "RH" : "Reach Hostel"}</p>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? (
                  <FiArrowRightCircle/>
                ) : (
                  <FiArrowLeftCircle/>
                )}
              </div>
            </SidebarHeader>
            <SidebarContent>  
              
              <Menu iconShape="square" open={openMenu} onClose={closeMenu}>
                    <MenuItem
                     active={true} icon={<FiHome />} onClick={closeMenu}>
                     <Link to="/">
                      Home
                    </Link>
                    </MenuItem>
                    <MenuItem icon={<MdRestaurantMenu />} onClick={closeMenu}>
                    <Link to="/foodmenu">
                    Food Menu
                    </Link>
                    </MenuItem>
                    <MenuItem icon={<MdLibraryBooks />} onClick={closeMenu}>
                    <Link to="/notice">
                    Notice
                    </Link>
                    </MenuItem> 
                    <MenuItem icon={<FaRegHeart />} onClick={closeMenu}>
                    <Link to="/review">
                    Review Us
                    </Link>
                    </MenuItem>
                    <MenuItem icon={<FaList />} onClick={closeMenu}>
                    <Link to="/reviewhistory">
                    Reviews 
                    </Link>
                    </MenuItem>                  
                    <MenuItem icon={<RiPencilLine />} onClick={closeMenu}>
                    <Link to="/contact">
                    Contact Us
                    </Link>
                    </MenuItem>
                    
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
              </Menu>
            </SidebarFooter>

          </ProSidebar>

      </div> 
      <Route path="/"><Home/></Route>
                <Route path="/contact"><Contact/></Route>
                <Route path="/review"><Form/></Route>
                <Route path="/reviewhistory"><Dbtable/></Route>
                <Route path="/notice"><Notice/></Route>
                <Route path="/foodmenu"><FoodMenu/></Route>
              </Router>      
    </>   
    );
};
export default Header;