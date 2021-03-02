import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './LandingPage/home';
  import OurStories from './StorySection/Stories';
  import ContactForm from './ContactForm/contactform';
  import StoryFormat from "./StorySection/FarmerProtests";
  import Team from "./OurTeam/Team";

  function App()
  {
        return(
            <>
            <Router>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/Stories"><OurStories/></Route>
                    <Route exact path="/Our Team"><Team/></Route>
                    <Route exact path="/Contact Us"><ContactForm/></Route>
                    <Route exact path="/Stories/FarmerProtests"><StoryFormat/></Route>
                </Switch>

            </Router>
            </>
        )
  }

  export default App;