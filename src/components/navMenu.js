import React, { Component } from "react"
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import navMenuStyles from "./navMenu.module.scss"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


class NavMenu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className={navMenuStyles}>
                <Navbar color="light" light expand="md">

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <NavbarBrand>
                            <Link to="/">Home</Link>
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/work">Portfolio</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/blog">Blog</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about">About</Link>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default NavMenu
