import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import '../CSS/Footer.css';
import Logos from "../Images/Logos.png";
import {Link} from "react-router-dom";



function Footer() {
    return (
        <>

        <Container className="c footer" fluid>
    <Row>
        <Col sm={4} className="foot">
            <img src={Logos} width="200" height="200" alt="logo" style={{borderRadius:"15px 15px 15px 15px"}} alt="text"/>
        </Col>
            <Col sm={4} className="my-foot">
                    <Link to="/"><Row style={{fontFamily:"Ubuntu",color:"white",paddingTop:"0.5vw"}}>Home</Row></Link>
                    <Link to="/Stories"><Row style={{paddingTop:"1vw",fontFamily:"Ubuntu",color:"white"}}>Stories</Row></Link>
                    <Link to="/OurTeam"><Row style={{paddingTop:"1vw",fontFamily:"Ubuntu",color:"white"}}>Our Team</Row> </Link>
                    <Link to="/ContactUs"><Row style={{paddingTop:"1vw",fontFamily:"Ubuntu",color:"white"}}>Contact Us</Row></Link>
                
            </Col>
        <Col sm={4} className="icon-foot">
            <Row className="justify-content-center" style={{fontFamily:"Ubuntu",fontWeight:"bold",color:"white",paddingTop:"1vw",paddingBottom:"1vw"}}>Follow Us</Row>
            <Row className="d-flex justify-content-center">
            <p style={{paddingTop:"1vw",paddingLeft:"1vw",paddingRight:"1vw"}}><a href="https://www.instagram.com/thedatanecdotes/"><img src="https://img.icons8.com/fluent/64/000000/instagram-new.png" width="60%" /></a> </p>
            <p style={{paddingTop:"1vw",paddingLeft:"1vw",paddingRight:"1vw"}}><a href="https://www.linkedin.com/company/the-data-anecdotes/"><img src="https://img.icons8.com/fluent/50/4a90e2/linkedin.png" width="80%"/></a> </p>
            <p style={{paddingTop:"1vw",paddingLeft:"1vw",paddingRight:"1vw"}}><a href="https://github.com/thedatanecdotes"><img src="https://img.icons8.com/fluent/48/000000/github.png" width="80%"/></a></p>
            </Row>
        </Col>
    </Row>
        </Container>

        </>
    );
}
export default Footer;