import React,{Component} from 'react';
import '../CSS/Team.css'
import Teamf from "./components/Teamf"
import Navbarteam from "../NavBar"
import BIRDS from 'vanta/dist/vanta.net.min'
import Footer from '../StorySection/Footer';
function Content() {
  return (
    <div className="App">
      <Navbarteam/>
      <div className="head">
        <br/>
        <h2 style={{textAlign:"center",fontFamily:"Ubuntu",fontWeight:"bolder"}}> | The Dream Team 🌟 |  </h2>
        <br/>
      </div>
      <Teamf />
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 style={{textAlign:"center",fontFamily:"Ubuntu",fontWeight:"bold"}}>Website created by our Talented Members 🤍</h2>
      <Footer/>
      
   
    </div>
  );
}
class OurTeam extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      backgroundColor:"#a4161a",
      color: "#000000",
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>
      <Content/>
    </div>
  }
}

export default OurTeam;