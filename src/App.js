import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './LandingPage/home';
  import OurStories from './StorySection/Stories';
  import ContactForm from './ContactForm/contactform';
  import Team from "./OurTeam/Team";

  function App()
  {
        return(
            <>
            <Router>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/Stories"><OurStories/></Route>
                    <Route exact path="/OurTeam"><Team/></Route>
                    <Route exact path="/ContactUs"><ContactForm/></Route>
                </Switch>

            </Router>
            </>
        )
  }

  export default App;