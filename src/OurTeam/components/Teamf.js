import React from 'react';
import Cardp from './Cardp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tarushi from "../../Images/Tarushi.jpg";
import Kabir from "../../Images/Kabir.jpeg";
import Tanya from "../../Images/Tanya.jpg";
import Kriti from "../../Images/Kriti.jpeg";
import Purbasha from "../../Images/Purbasha.jpg";
import Anusri from '../../Images/Anusri.jpeg';


function Teamf(){
    return(

    <div style={{width:"80%", marginRight:"auto", marginLeft:"auto",height:"60%"}}>
<Container style={{height:"70%"}}>
<Row>
   <Col xs={12} md={4}>
   <Cardp name="Tarushi Pathak" title="Founder & CTO" img={Tarushi} urlgit="https://github.com/tarushi98
" urllink="https://www.linkedin.com/in/tarushi-pathak-6b7b5b177/"/>
   </Col>
   
   <Col xs={12} md={4}>
   <Cardp name="Kabir Nagpal" title="Lead Machine Learning Engineer" img={Kabir} urlgit="https://github.com/kabirnagpal" urllink="https://www.linkedin.com/in/kabir-nagpal-3a1302174/"/>
   </Col>
   <Col xs={12} md={4}>
   <Cardp name="Laxmi Anusri Patti" title="Lead Web Developer" img={Anusri} urlgit="https://github.com/Anusri27" urllink="https://www.linkedin.com/in/anusri-p/"/>
   </Col>
</Row>

<Row>
   <Col xs={12} md={4}>
   <Cardp name="Tanya Aggarwal" title="Lead Front End Engineer" img={Tanya} urlgit="https://github.com/Tanya-aggarwal" urllink="https://www.linkedin.com/in/tanya-aggarwal-0a752118b/"/>
   </Col>
   
  
   <Col xs={12} md={4}>
   <Cardp name="Purbasha Pan" title="Marketing & Content Head | Web Developer" img={Purbasha} urlgit="https://github.com/Purbasha33" urllink="https://www.linkedin.com/in/purbasha-pan-1a5329192/"/>
   </Col>

   <Col xs={12} md={4}>
   <Cardp name="Kriti Gandotra" title="Web Developer" img={Kriti} urlgit="https://github.com/KritiGandotra" urllink="https://www.linkedin.com/in/kriti-gandotra-4015ab16a/"/>
   </Col>
</Row>
</Container>
</div>
    );
}

export default Teamf
