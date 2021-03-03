import React from 'react';
import clsx from 'clsx';
import {Row,Col} from 'react-bootstrap'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link} from "react-router-dom";

const drawerWidth = 360;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
  },
  dividerColor:{
    backgroundColor:"black"
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#e9ecef"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Menu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <img src="https://img.icons8.com/ios-filled/60/000000/xbox-menu.png"/>
          </IconButton>
        </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      className="widthd">
        <div className={classes.drawerHeader}>
           <p style={{fontFamily:"Playfair",paddingTop:"1rem",paddingRight:"1rem",fontWeight:"bolder",fontSize:"18px",color:"black"}}>
              THE DATA ANECDOTES
           </p>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon  />}
          </IconButton>
        </div>
        <Divider className={classes.dividerColor}/>
        <List>
            <Col sm={4}>
                    <Link to="/"><Row style={{paddingLeft:"1.5vw",fontFamily:"Ubuntu",color:"black",paddingTop:"0.5vw"}}>Home</Row></Link>
                    <Link to="/Stories"><Row style={{paddingLeft:"1.5vw",paddingTop:"1vw",fontFamily:"Ubuntu",color:"black"}}>Stories</Row></Link>
                    <Link to="/OurTeam"><Row style={{paddingLeft:"1.5vw",paddingTop:"1vw",fontFamily:"Ubuntu",color:"black"}}>Our Team</Row> </Link>
                    <Link to="/ContactUs"><Row style={{paddingLeft:"1.5vw",paddingTop:"1vw",fontFamily:"Ubuntu",color:"black"}}>Contact Us</Row></Link>
                
            </Col>
        </List>
      <Row>
          <p style={{paddingTop:"0.5vw",paddingLeft:"2.5vw",paddingRight:"0.2vw"}}><a href="https://www.instagram.com/thedatanecdotes/"><img src="https://img.icons8.com/fluent/40/000000/instagram-new.png" width="60%" /></a> </p>
          <p style={{paddingTop:"0.5vw",paddingRight:"0.5vw"}}><a href="https://www.linkedin.com/company/the-data-anecdotes/"><img src="https://img.icons8.com/fluent/30/4a90e2/linkedin.png" width="80%"/></a> </p>
          <p style={{paddingTop:"0.5vw",paddingLeft:"0.2vw",paddingRight:"0.5vw"}}><a href="https://github.com/thedatanecdotes"><img src="https://img.icons8.com/fluent/30/000000/github.png" width="80%"/></a></p>
      </Row>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        </main>
    </div>
  );
}