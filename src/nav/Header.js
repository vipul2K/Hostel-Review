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
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "../style/header.css";
import "../style/image.css";
import Home from "../components/Home.js";
import Contact from "../components/Contact.js";
import Dbtable from "../components/Dbtable.js";
import Review from "../components/Review.js";
import fire from "../fire";
import ImageSlider from '../components/Gallery';
import { imageData } from '../components/image';
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
    const handleLogout= () => {
      fire.auth().signOut();
    }
    return(
      
        <>
        <Router>
      <div id="header">
      
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
            <div className="logotext">
                <p>{menuCollapse ? "HR" : "Hostel Review"}</p>
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
                    <MenuItem icon={<FaList />} onClick={closeMenu}>
                    <Link to="/reviewhistory">
                    Review History
                    </Link>
                    </MenuItem>
                    <MenuItem icon={<FaRegHeart />} onClick={closeMenu}>
                    <Link to="/review">
                    Review
                    </Link>
                    </MenuItem>
                    <MenuItem icon={<RiPencilLine />} onClick={closeMenu}>
                    <Link to="/contact">
                    Contact
                    </Link>
                    </MenuItem>
                    <MenuItem icon={<BiCog />} onClick={closeMenu}>
                    <Link to="/gallery">
                    Gallery
                    </Link>
                    </MenuItem>
              </Menu>
              
  
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />} onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </SidebarFooter>

          </ProSidebar>

      </div> 
      <Route path="/"><Home/></Route>
                <Route path="/contact"><Contact/></Route>
                <Route path="/review"><Review/></Route>
                <Route path="/reviewhistory"><Dbtable/></Route>
                <Route path="/gallery"><ImageSlider/></Route>
                
              
              </Router>      
    </>   
    );
};
export default Header;