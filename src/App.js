import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";
import Home from './LandingPage/home';
import OurStories from './StorySection/Stories';
import ContactForm from './ContactForm/contactform';
import Team from "./OurTeam/Team";


const ScrollToTop = (props) => {
  const { children } = props;

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <main>{children}</main>;
};
  function App()
  {
        return(
            <>
            <Router>
                <Switch>
                    <Route exact path="/"><ScrollToTop><Home/></ScrollToTop></Route>
                    <Route exact path="/Stories"><ScrollToTop><OurStories/></ScrollToTop></Route>
                    <Route exact path="/OurTeam"><ScrollToTop><Team/></ScrollToTop></Route>
                    <Route exact path="/ContactUs"><ScrollToTop><ContactForm/></ScrollToTop></Route>
                </Switch>

            </Router>
            </>
        )
  }

  export default App;