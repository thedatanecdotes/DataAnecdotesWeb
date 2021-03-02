import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Card, Button,Navbar, Nav} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../CSS/Stories.css';
import Footer from "./Footer";
import {Link} from "react-router-dom"
import BackgroundParticle from "../background";
import Navbarteam from '../NavBar'

function OurStories() {
    return (
        <>
    <BackgroundParticle/>
    <div style={{position: "absolute",top: 0,left: 0,width: "100vw",height: "100vh",fontFamily:"Ubuntu"}} >
        <Navbarteam/>
        <br/>
        <br/>
        <br/>
        {/* Featured Carousel */}
        <Container >
        <p style={{textAlign:"center",color:"white"}}>
            <h1>Featured ✨</h1>
        </p><br/><br/><br/>
              <Carousel >
                  <Carousel.Item interval={1000}>
                    <p style={{textAlign:"center"}}>
                      <img
                        src="https://images.unsplash.com/photo-1585305896551-8ac46bcc03f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bG9ja2Rvd258ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="First slide"
                        style={{borderRadius:"15px 15px 15px 15px"}}
                        width="70%"
                      />
                    </p>
                    <Carousel.Caption>
                          <h3 style={{color:"black",fontWeight:"bolder"}}>2020's Pandemic: March vs December</h3>
                          <Button className="button" variant="danger">See More</Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                    <p style={{textAlign:"center"}}>
                      <img
                          src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                          alt="First slide"
                          style={{borderRadius:"15px 15px 15px 15px"}}
                          width="70%"
                        />
                    </p>
                    <Carousel.Caption>
                      <h3 style={{color:"black", fontWeight:"bolder"}}>Project Search Bar</h3>
                      <Button className="button" variant="danger" href="https://datanecdotes-psb.herokuapp.com/">Click to visit</Button>
                    </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* Our Stories Card Collection */}
        <Container className="outstories_container align-items-center" fluid="md">-
          <p style={{textAlign:"center",color:"white"}}><h1>Our Stories 📝</h1></p><br/>
          <Row className="outstories_row align-items-center">
          <Col className="outstories_col align-items-center" sm={4}>
          <Card className="card_text">
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1587316745621-3757c7076f7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bG9ja2Rvd258ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <Card.Body>
            <Card.Title>2020's Pandemic : March Vs December</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Released: December 2020</Card.Subtitle>
            <br/>
            <Card.Text style={{textAlign:"left"}}>
              Comparing the Pandemic's progress from the month it first hit India to December.
            </Card.Text>
            <Button className="button" variant="danger">See More</Button>
          </Card.Body>
        </Card>
          </Col>
          <Col className="outstories_col align-items-center" sm={4}>
          <Card className="card_text">
          <Card.Img variant="top" src="https://media2.s-nbcnews.com/i/newscms/2020_50/3434117/201208-_india_farmer_protests_mc-12453_28c6cc8a18e275f33e3a8d869c972ac8.JPG"/>
          <Card.Body>
            <Card.Title>Farmers' Protests</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Released: 4 January 2021</Card.Subtitle>
            <br/>
            <Card.Text style={{textAlign:"left"}}>
              The 2020 Farmers' Protest is an ongoing movement in India against the three farme bills passed in the session of Parliament in September 2020. 
            </Card.Text><br/>
            <Button className="button" variant="danger">See More</Button>
          </Card.Body>
        </Card>
          </Col>
          <Col className="outstories_col align-items-center" sm={4}>
          <Card className="card_text">
          <Card.Img variant="top" src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          <Card.Body><br/>
            <Card.Title>Coming Soon</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Released: coming soon</Card.Subtitle>
            <br/>
            <Card.Text style={{textAlign:"left"}}>
              Some quick example text to build on the Coming and make up the bulk of
              the card's content.
            </Card.Text><br/>
            <Button className="button" variant="danger">See More</Button><br/>
          </Card.Body>
        </Card>
          </Col>
          </Row>

          <Row className="outstories_row align-items-center">
          <Col className="outstories_col align-items-center" sm={4}>
          <Card className="card_text">
          <Card.Img variant="top" src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          <Card.Body>
            <Card.Title>Coming Soon</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Released: coming soon</Card.Subtitle>
            <Card.Text style={{textAlign:"left"}}>
              Some quick example text to build on the Coming and make up the bulk of
              the card's content.
            </Card.Text>
            <Button className="button" variant="danger">See More</Button>
          </Card.Body>
        </Card>
          </Col>
          <Col className="outstories_col align-items-center" sm={4}>
          <Card className="card_text">
          <Card.Img variant="top" src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          <Card.Body>
            <Card.Title>Coming Soon</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Released: coming soon</Card.Subtitle>
            <Card.Text style={{textAlign:"left"}}>
              Some quick example text to build on the Coming and make up the bulk of
              the card's content.
            </Card.Text>
            <Button className="button" variant="danger">See More</Button>
          </Card.Body>
        </Card>
          </Col>
          <Col className="outstories_col align-items-center" sm={4}>
          <Card className="card_text">
          <Card.Img variant="top" src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          <Card.Body>
            <Card.Title>Coming Soon</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Released: coming soon</Card.Subtitle>
            <Card.Text style={{textAlign:"left"}}>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button className="button" variant="danger">See More</Button>
          </Card.Body>
        </Card>
          </Col>
          </Row>
        </Container>
         <Footer/>
        </div>
        </>
    );
}
export default OurStories;