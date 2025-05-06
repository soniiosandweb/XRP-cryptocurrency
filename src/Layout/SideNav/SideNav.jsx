import "./SideNav.css";
import { Nav, Navbar } from "react-bootstrap";
const logo = `${process.env.REACT_APP_IMAGES_PATH}/xrp-logo.png`;
const homeIcon = `${process.env.REACT_APP_IMAGES_PATH}/home.png`;
const exhangeIcon = `${process.env.REACT_APP_IMAGES_PATH}/change.png`;

const SideNav = () => {

    return(
        <Navbar className="sidenavbar_block align-items-start flex-column">
            <Navbar.Brand href="/xrp" className="nav-logo mx-auto">
                <img src={logo} alt="Logo" className="xrp-logo" />
            </Navbar.Brand>
            <Nav className="flex-column">
                <Nav.Link
                    href="/xrp"
                    className="nav_menu_item"
                >
                    <img 
                        src={homeIcon} 
                        alt={"Home"} 
                        className="menu_icon"
                    />
                    Home
                </Nav.Link>

                <Nav.Link
                    href="/xrp"
                    className="nav_menu_item active"
                >
                    <img 
                        src={exhangeIcon} 
                        alt={"Exchange"} 
                        className="menu_icon"
                    />
                    Exchange
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default SideNav