import React, { Component } from "react";
import "./test.css"
import { Nav, Row, Image } from "react-bootstrap"



export default class Test extends Component {
    render() {
        const NaviBar = ["Home", "About", "Services", "Portfolio", "News", "Contact"]
        return (
            <Row>
                <div className="sideBar">
                    <div className="logo">
                        <h1>AR</h1>
                        <p>Fullstack Developer & UI/UX </p>
                    </div>
                    <div className="navbar">
                        <Nav className="flex-column">
                            <Nav.Link className="navlink">Home</Nav.Link>
                            <Nav.Link className="navlink">Services</Nav.Link>
                            <Nav.Link className="navlink">News</Nav.Link>
                        </Nav>
                    </div>
                    <div className="logoBar"></div>
                </div>
                <div className="body">
                    <div className="headerBody">
                        <img src="https://cdn.pixabay.com/photo/2015/12/08/00/28/roadway-1081736_960_720.jpg" width="100%" style={{ height: "80vh" }} />
                        <div className="centered">
                            <img src="https://pngimage.net/wp-content/uploads/2018/05/about-me-icon-png-6.png" width="60px" height="60px" />
                            <h6>Michael Joseph</h6>
                            <h6>I'm a Web Developer</h6>
                        </div>
                    </div>
                    <div className="aboutMe">
                        <h1>About Me</h1>
                        <Row>
                            <img src="https://pngimage.net/wp-content/uploads/2018/05/about-me-icon-png-6.png" style={{ width: "30%", paddingRight: "20px" }} />
                            <p style={{ width: "70%", padding: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus arcu, consequat et mauris ac, sollicitudin bibendum arcu. Nam quis libero eget nulla porttitor pharetra. Sed quam tellus, auctor sed purus sed, consectetur sollicitudin urna. Aenean suscipit, velit sit amet hendrerit sagittis, erat nulla molestie erat, vel accumsan elit ipsum a nulla. Ut a auctor diam. Praesent placerat mollis neque quis imperdiet. Maecenas justo arcu, gravida in metus id, faucibus eleifend mauris. Sed odio nisl, fringilla sed molestie et, tempus eget nulla.</p>
                        </Row>
                    </div>
                </div>
            </Row>
        );
    }
}


