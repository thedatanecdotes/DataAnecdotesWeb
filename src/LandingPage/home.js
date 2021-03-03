import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Slide from 'react-reveal/Slide';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Menu from "./Menu"
import Sloth from "../Images/Sloth Illustration.jpg"
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import {Link} from "react-router-dom";
import Footer from "../StorySection/Footer";
import '../CSS/Home.css';
import BackgroundParticle from '../background';


class CardFlip extends React.Component{
render(){
    return(
        <>
        <Flippy flipOnHover={false} flipOnClick={true} flipDirection="horizontal" style={{ width: '300px', height: '300px' }} >
            <FrontSide style={this.props.fstyle}><Container><img src={this.props.image} width="250vw" alt="text"/></Container></FrontSide>
            <BackSide style={this.props.bstyle}><br/><br/><br/><br/><p style={{fontFamily:"Playfair",fontWeight:"bold"}}> {this.props.content}</p> </BackSide>
            </Flippy>
         </>
    )
    }
}
function Home()
{
        return(
            <>
            <BackgroundParticle/>
            <div style={{position: "absolute",top: 0,left: 0,width: "100vw",height: "100vh"}} >
                    {/* Banner*/}
                    <br/>
                    <Menu/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Jumbotron fluid>
                        <Container>
                            <p className ="tda">THE  DATA  ANECDOTES</p><br/>
                            <p className ="tda_heading"> BRINGING STORIES ENRICHED WITH DATA</p>
                        </Container>
                    </Jumbotron>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {/* Why Data Anecdotees */}
                    <br/> 
                    <div className="why">
                    <Container fluid>
                        <Row>
                                <Col sm={5} className="check">
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <Slide left>
                                        <Jumbotron style={{borderRadius:"15px 15px 15px 15px"}}>
                                        <p className="media">Media seldom shows us both the sides of the story resulting in a largely biased public unaware of the fact that their opinions are not their own.
        We, the Data Anecdotes, aim to bring to you both the sides of the story supported strongly with data and its sources, so that<br/> </p>
                                        <p className="yo" >your opinions are your own.</p>
                                        </Jumbotron>
                                    </Slide>
                                </Col>
                            <Col sm={5} className="checks2">
                                <Slide right>
                                    <img src="https://images.unsplash.com/photo-1594716285500-41a94c56e104?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" width="80%" style={{borderRadius:"15px 15px 15px 15px"}} alt="text"/>
                                </Slide>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {/* Project Search Bar */}
                    <Container>
                    <div className="psb">
                        <Row className="justify-content-md-center">
                            <Col sm={12} className="d-flex justify-content-center my-auto">
                                <Slide left >
                                        <img src="https://images.unsplash.com/photo-1526075419780-c636f80b1659?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" width="65%" style={{borderRadius:"15px 15px 15px 15px",paddingBottom:"4rem"}}/>
                                    </Slide>
                            </Col>
                        </Row>
                        <Slide right>
                            <Jumbotron style={{borderRadius:"15px 15px 15px 15px"}}>
                                    <p style={{textAlign:"center",fontFamily:"Ubuntu",fontWeight:"bolder",color:"red"}}>
                                            <h2>Project Search Bar</h2>
                                    </p>
                                    <p className="proj"> After doing a certain set of analysis, we felt a need of automation. That's when Project Search Bar was born. Type whatever ongoing topic you wish to analyse and the web-app will return to you a simple analysis of tweets and sentiment, alongwith relevant news articles' summary , source and sentiment.</p>
                                    <p style={{textAlign:"center"}}><Button variant="danger" href="https://datanecdotes-psb.herokuapp.com/">Try It Now </Button></p>
                            </Jumbotron>
                        </Slide>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        {/* What we do part */}
                        <div className="what-we-do">
                            <Jumbotron style={{borderRadius:"15px 15px 15px 15px"}}>
                                <p style={{textAlign:"center",fontFamily:"Ubuntu",fontWeight:"bolder"}}>
                                        <h2>How exactly do we work on a story?</h2>
                                        <br/><h4 style={{color:"red"}}>Flip Over to Find Out !</h4><br/>

                                    </p>
                                    <Row className="justify-content-md-center" style={{paddingRight:"0em",paddingLeft:"0em",marginLeft:"0px",marginRight:"0px",marginBottom:"2em"}}>
                                        <Col sm={4} className="d-flex justify-content-center my-auto cardf">
                                            <CardFlip image={Sloth} content="We are generally lazing around or going through our boring lives, waiting for inspiration to strike." fstyle={{backgroundColor:"#483031"}} bstyle={{backgroundColor:"white"}}/>
                                        </Col>
                                        <Col sm={4} className="d-flex justify-content-center my-auto cardf">
                                            <CardFlip image="https://image.freepik.com/free-vector/illustration-light-bulb-icon_53876-40822.jpg" content="One of our creative geniuses calls us up and says,Duddee I got an amazing story idea" fstyle={{backgroundColor:"#daf6fa"}} bstyle={{backgroundColor:"white"}} />
                                        </Col>
                                        <Col sm={4} className="d-flex justify-content-center my-auto">
                                            <CardFlip image="https://image.freepik.com/free-vector/brain-cartoon-icon-illustration-education-object-icon-concept_138676-2578.jpg" content="This is followed by a brainstorming session about the idea" fstyle={{backgroundColor:"#ff8cf4"}} bstyle={{backgroundColor:"white"}}/>
                                        </Col>
                                        </Row>

                                        <Row className="justify-content-md-center" style={{paddingRight:"0em",paddingLeft:"0em",marginLeft:"0em",marginRight:"0em",marginBottom:"2em"}}>
                                            <Col sm={4} className="d-flex justify-content-center my-auto cardf">
                                                <CardFlip image="https://image.freepik.com/free-vector/flat-design-character-file-searching-landing-page_23-2148274329.jpg" content="Gathering of Data from relevant sources" fstyle={{backgroundColor:"#fafbfd"}} bstyle={{backgroundColor:"white"}}/>
                                            </Col>
                                            <Col sm={4} className="d-flex justify-content-center my-auto cardf">
                                                <CardFlip image="https://www.inzata.com/wp-content/uploads/2019/11/shutterstock_1494628892.jpg" content="Then we perform data cleaning and restructuring.Now, our data is ready for analysis and predictions" fstyle={{backgroundColor:"#f9ca24"}} bstyle={{backgroundColor:"white"}} />
                                            </Col>
                                            <Col sm={4} className="d-flex justify-content-center my-auto"> 
                                                <CardFlip image="https://img.freepik.com/free-vector/analysis-concept-illustration_114360-1119.jpg?size=338&ext=jpg" content="We finally get our hands dirty with Data Analysis and if it's too exciting a story, Machine Learning or Deep Learning." fstyle={{backgroundColor:"white"}} bstyle={{backgroundColor:"white"}} />
                                            </Col>
                                            </Row>
                                        <Row className="justify-content-md-center" style={{paddingRight:"0em",paddingLeft:"0em",marginLeft:"0px",marginRight:"0px"}}>
                                        <Col sm={4}></Col>
                                            <Col sm={4} className="d-flex justify-content-center my-auto cardf">
                                                <CardFlip image="https://image.freepik.com/free-vector/creative-content-writing-copywriting-blogging-internet-marketing-article-text-editing-publishing-online-documents-writer-editor-character-concept-illustration_335657-1714.jpg" content="And Voila! We finally publish the our findings to our website.The data  that we collected and our analysis are uploaded on our github. " fstyle={{backgroundColor:"white"}} bstyle={{backgroundColor:"white"}} />
                                            </Col>
                                            <Col sm={4}></Col>
                                    </Row>
                                    <p style={{textAlign:"center",paddingTop:"2vw"}}><Link to="/Stories"><Button variant="danger">Click here to read our stories.</Button></Link></p>
                            </Jumbotron>
                        </div>
                    </Container>
                    <br/>
                    {/* Fifth Part */}
                    <Footer/>
                </div>
            </>
        )
}

export default Home;