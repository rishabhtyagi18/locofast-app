import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import AvatarLogo  from './Avatar.png';

const Styles = {
    LeftLFCSS: {
        width: "80px",
        background: "#0067e2",
        marginLeft: "-28px",
        height: "100%",
        border: "0px",
        padding: "0px",
        borderRadius: "0px 30px 0px 0px",
    },
    LFnameCSS: {
        margin: "0px",
        padding: "20px",
        fontSize: "24px",
    }
}

const barWidth = 220;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiDrawer-paper': {
        backgroundColor: "#0067E2"
    },
    '& .MuiInputBase-input': {
        padding: "10px 20px"
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: barWidth,
    width: `calc(100% - ${barWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
   
  hide: {
    display: 'none',
  },
  drawer: {
    width: barWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: "#0067e2"
  },
  drawerOpen: {
    width: barWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
    
}));

export default function MiniBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 0 black", 
            borderBottom: "1px solid #e8e8e8" , 
            height: "56px"
          }}
        >
        <Toolbar >

        <div style={Styles.LeftLFCSS}><h6 style={Styles.LFnameCSS}>LF</h6></div>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={1}>

              <Grid container item xs={2} spacing={1}>
                <Typography 
                  variant="h6" 
                  noWrap 
                  style={{
                    color: "black", 
                    marginTop: "5px", 
                    marginLeft: "20px"
                  }}
                >
                  Material Library
                </Typography>
              </Grid>

              <Grid container item xs={6} spacing={1}></Grid>

              <Grid container item xs={2} spacing={1}>
                <Tooltip title="Search">
                  <SearchIcon style={{color: "black", margin: "10px 10px 10px 70px"}}/>
                </Tooltip>
                        
                <Tooltip title="Help">
                  <HelpOutlineIcon style={{color: "black", margin: "10px 10px 10px 10px"}}/>
                </Tooltip>

                <Tooltip title="Notifications">
                  <NotificationsNoneIcon style={{color: "black", margin: "10px 10px 10px 10px"}}/>
                </Tooltip>
              </Grid>

              <Divider orientation="vertical" flexItem />

              <Grid container item xs={2} spacing={1}>            
                <img 
                  style={{
                    width: "150px", 
                    height: "46px", 
                    objectFit: "none"
                  }} 
                  src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" 
                  alt="mig"
                />
                <Avatar 
                  style={{
                    marginTop: "5px"
                  }}  
                  alt="Remy Sharp" 
                  src={AvatarLogo} 
                  className={classes.small} 
                />
              </Grid>
                    
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        
        <List >
          {['Inbox', 'Starred', 'Send email', 'Drafts','Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <Tooltip title={text}  placement="right">
              <ListItem button style={{color: "#ffffffcc"}}>
                <ListItemIcon 
                  style={{
                    color: "#ffffffcc"}}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>

              <ListItemText primary={text} />
              </ListItem>
            </Tooltip>
          ))}

            <Tooltip title="I am Active"  placement="right">   
              <ListItem className="active" button style={{color: "#ffffff", backgroundColor: "#3184e6", borderLeft: "4px solid white"}}>
                <ListItemIcon style={{color: "#ffffff"}}>
                  <Badge badgeContent={23} color="secondary">
                    <InboxIcon />
                      </Badge>
                    </ListItemIcon>
                <ListItemText primary={"text"} />
              </ListItem>  
            </Tooltip>
        </List>
      </Drawer>
    </div>
  );
}
