import React from 'react';
import {Jumbotron,Container,Button} from 'react-bootstrap';
import Navbarteam from '../NavBar';
import  BackgroundParticle from '../background';
export default function StoryFormat(){
  return(
        <>
           <BackgroundParticle/>
            <div style={{position: "absolute",top: 0,left: 0,width: "100vw",height: "100vh"}} >
              <Navbarteam/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            
              <Container>
                <Jumbotron>
                    <p style={{textAlign:"center",fontFamily:"Ubuntu"}} >
                            <br/>
                            <h1 align="center" style={{color:"red",fontFamily:"Raleway",fontWeight:"bolder"}}> 2020 FARMERS' PROTEST </h1>
                            <br/>
                            Release Date: 4 January 2021
                            <br/>
                    </p>
                    <p style={{textAlign:"left",fontFamily:"Ubuntu",fontSize:"20px"}}><br/><br/>
                      <h2 style={{textDecoration:"underline",textAlign:"center"}}>Movement so far</h2><br/>
                    The 2020 Farmers' Protest is an ongoing movement in India against the three farme bills passed in the session of Parliament in September 2020. The three laws passed are as follows:<br/> <br/>
                      <ul>
                          <li> <h4> The Farmers’ Produce Trade and Commerce (Promotion and Facilitation) Act:</h4> This will enable the farmers to sell their farm produces 
                                  outside the Agriculture Produce Market Committees (APMCs). Any trader with license can buy the necessary commondities from the
                                  farmers directly under a mutually set price. This sale would be free from the mandi tax imposed by the state government.
                          </li><br/>
                          
                          <li> <h4> The Farmers (Empowerment and Protection) Agreement of Price Assurance and Farm Services Act :</h4> This will allow farmers to engage in contract farming and market their produces freely.</li><br/>
                          <li><h4>The Essential Commodities (Amendment) Act:</h4> As the name suggests, it is an amendment to an existing act by the same name. This amendmend frees items such as foodgrains, pulses, edible oils and onion for trade except in crises.</li><br/>
                      </ul>

                      <h4> Why are farmer's against this law?</h4><br/>

                      Introduction of these laws in the system, removes the concept of MSP in the case of trade outside of APMC, which made the farmers conclude that majority of the government agencies might involve in trade outside of APMC and end up buying the produce at comparatively lesser prices than the actual value. As the APMC is the only constant source of revenue in the farmers' lives , implementation of these laws without reconsideration of farmers' demands and needs may lead to huge losses for them.
                      <br/><br/>

                      <h4> What are the updated demands of the farmers and why is the government against it? </h4><br/>
                      <h5> The Demands (As of 4th December)</h5><br/>
                      <ul>
                              <li>Convene a special Parliament session to repeal the farm laws</li>
                              <li>Make minimum support price (MSP) and state procurement of crops a legal right</li>
                              <li>Assurances that conventional procurement system will remain</li>
                              <li>Implement Swaminathan Panel Report and peg MSP at least 50% more than weighted average cost of production</li>
                              <li>Cut diesel prices for agricultural use by 50%</li>
                              <li>Repeal of Commission on Air Quality Management in NCR and the adjoining Ordinance 2020 and removal of punishment and fine for stubble burning</li>
                              <li>Release of farmers arrested for burning paddy stubble in Punjab</li>
                              <li>Abolishing the Electricity Ordinance 2020</li>
                              <li> Centre should not interfere in state subjects, decentralization in practice</li>
                              <li>Withdrawal of all cases against and release of farmer leaders</li>
                      </ul><br/>
                      <h5> The Government's Side </h5><br/>
                        <h5> Agreed </h5><br/>
                        <ul>                    
                              <li> Written assurance for provision of MSP </li>
                              <li> Taking Back FIRs and Cases Against Farmer Leaders</li>
                              <li> Decriminalising stubble burning by excluding farmers from the ambit of the act and drop provision of the draft of Electricity Amendment Bill 2020</li>
                        </ul>
                      <br/>
                      While the government is ready to give written assurance for provision of MSP , to take back FIRs and cases against the Farmers Leaders ,to “decriminalise” stubble burning by excluding farmers from the ambit of the act and drop those provisions of the draft Electricity Amendment Bill, 2020, they are  <h5>still opposed to demands like the cutting of diesel prices for agriculutural use , as there is no way of knowing for sure whether the purchase of diesel by a customer would be for agricultural purposes.</h5>
                      <br/>
                      <br/>

                      <h2 style={{textDecoration:"underline",textAlign:"center"}}> Results </h2>
                      <br/>
                      <h3 >Tweet Analysis</h3>
                      Twitter is a data mine. We went through thousands of tweets to analyse the sentiments and further apprehend why were certain people for the bills and why certain against them.<br/>
                      <br/><h4> Top 10 Locations of Tweets </h4><br/><p style={{textAlign:"center"}}>
                      <img src="https://raw.githubusercontent.com/thedatanecdotes/FarmersProtest/main/Images/locations.png" width="50%"/></p><br/>
                      <br/>
                      Topping the list is Delhi. Supporting/Opposing the laws from abroad are our well wishers in Ontario.<br/>
                      <br/><h4> Sentiments between 17 December 2020 to 1 January 2021 </h4><br/><p style={{textAlign:"center"}}>
                      <img src="https://raw.githubusercontent.com/thedatanecdotes/FarmersProtest/main/Images/saa.png" width="50%"/></p><br/>
                      <br/>
                      We can understand from the above graph that public sentiment on the overall is **against the bills**, with a special peak on 18th December 2020. This peak is due to the combination PM Modi's video conference to the farmers ,the Union Agricultural Minister Narender Singh Tomar's open letter to the farmers and CM Arvind Kejriwal's tearing of the bills in the Parliament on 17th December 2020 . On this day , the PM assured the farmers that MSP will not be scrapped and pleaded them to believe that the farm laws were for their own good. He also blamed the opposition for spreading lies about the bills.
                      <br/>
                      <br/>
                      Let's further implore the reason behind these sentiments.
                      <br/>
                      <br/>
                      
                      
                      
                      <h4> Word Cloud of Positive Sentiments (Supporters) </h4><br/><p style={{textAlign:"center"}}>
                      <img src="https://raw.githubusercontent.com/thedatanecdotes/FarmersProtest/main/Images/pcloud.png" /></p><br/>
                      <br/>
                      
                      On studying the word cloud , the following conclusions were drawn for people for the bill:
                      <ul>
                            <li> That the laws should be supported</li>
                            <li> There are talks amongst them for the influence of cartels in mandis </li>
                            <li> The farmers are being influenced by the opposition parties </li>
                            
                      </ul>
                              
                      <h4> Word Cloud for Negative Sentiments (Opposers) </h4><br/><p style={{textAlign:"center"}}>
                      <img src="https://raw.githubusercontent.com/thedatanecdotes/FarmersProtest/main/Images/ncloud.png" /></p><br/>
                      <br/>
                      
                      On studying the word cloud, the following conclusions were drawn for people against the bill:
                      <ul>
                            <li> Implementing these laws would insure the existence of cartels outside of APMC </li>
                            <li> The highest prices would be set by the cartels and not by the farmers </li>
                            <li> The government isn't corporating with the farmers </li>
                      </ul>
                      
                      <br/>
                      <br/>

                      <p style={{fontWeight:"bold",textAlign:"center"}}>For Datasets and Python Scripts which entail how we did it , visit our Github.<br/><br/>
                      <Button variant="danger" href="https://github.com/thedatanecdotes/FarmersProtest">Visit Github</Button></p>
      
                    </p>
                </Jumbotron>
              </Container>
            </div>    
           </>
  )
}

