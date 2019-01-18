
import {  withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import {  createMuiTheme,MuiThemeProvider,withStyles } from '@material-ui/core/styles';
import Navigator from '../components/PaperBase/Navigator';
import Content from '../components/PaperBase/Content';
import Header from '../components/PaperBase/Header';
import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import { CustomLoadingBar } from './customLoader/CustomLoadingBar';
//const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginLeft: 12,
//     marginRight: 36,
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
    
    
//   },
//   drawerOpen: {
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerClose: {
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: theme.spacing.unit * 7 + 1,
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing.unit * 9 + 1,
//     },
//   },
//   toolbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor:'ghostwhite',
//     padding: theme.spacing.unit *3,
//   },
//   paper: {
//     background: "blue"
//   }
// });

let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'initial',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing.unit,
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'initial',
        margin: '0 16px',
        minWidth: 0,
        [theme.breakpoints.up('md')]: {
          minWidth: 0,
        },
      },
      labelContainer: {
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing.unit,
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: 48,
    },
  },
};

const drawerWidth = 256;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    padding: '48px 36px 0',
    background: '#eaeff1',
  },
};

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  render() {
    debugger
    const { classes,location,onUpdateHandler } = this.props;
    const pathname = location.pathname;

    // const drawer = (
    //   <div>
    //     <div className={classes.toolbar} />
    //     <Divider />


    //     <Divider />
    //   </div>

    // );

    return (
    //   <MuiThemeProvider theme={theme}>
     
    //   <div className={classes.root}>
    //     <CssBaseline />
    //     <AppBar
    //       position="fixed"
    //       className={classNames(classes.appBar, {
    //         [classes.appBarShift]: this.state.open,
    //       })}
    //     >
    //       <Toolbar disableGutters={!this.state.open}>
    //         <IconButton
    //           color="inherit"
    //           aria-label="Open drawer"
    //           onClick={this.handleDrawerOpen}
    //           className={classNames(classes.menuButton, {
    //             [classes.hide]: this.state.open,
    //           })}
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Typography variant="h6" color="inherit" noWrap>
    //          Customer Provisioning Server
    //       </Typography>
    //       </Toolbar>
    //     </AppBar>
    //     <Drawer 
    //       variant="permanent"
    //       className={classNames(classes.drawer, {
    //         [classes.drawerOpen]: this.state.open,
    //         [classes.drawerClose]: !this.state.open,
    //       })}
    //       classes={{
    //         paper: classNames({
    //           [classes.drawerOpen]: this.state.open,
    //           [classes.drawerClose]: !this.state.open,
    //         }),
    //       }}
    //       open={this.state.open}
    //     >
       
    //       <div className={classes.toolbar} >
    //         <IconButton onClick={this.handleDrawerClose}>
    //           {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    //         </IconButton>
    //       </div>
    //       <Divider />
    //       <MenuList>
    //         <MenuItem component={Link} to="/" selected={'/' === pathname}  >
            
    //           Home  
    //         </MenuItem>
    //         <MenuItem component={Link} to="/CustomerFeatures" selected={'/CustomerFeatures' === pathname} >
    //          Feature

    //         </MenuItem>
    //         <MenuItem component={Link} to="/CustomerAnalytics" selected={'/CustomerAnalytics' === pathname} >
    //           Analytics
    //         </MenuItem>
    //         <MenuItem component={Link} to="/CustomerTheme" selected={'/CustomerTheme' === pathname} >
    //          Theme
    //         </MenuItem>
    //         <MenuItem component={Link} to="/CustomerScreenTracking" selected={'/CustomerScreenTracking' === pathname} >
    //          Tracking
    //         </MenuItem>
    //       </MenuList>
    //       <Divider />
          
    //     </Drawer>
        
    //     <main className={classes.content}>
    //       <div className={classes.toolbar} style={{ marginTop:'-28px' }} />
    //       {this.props.children}
    //     </main>
    //   </div>
    //   </MuiThemeProvider>
    // );

    <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="js">
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            pathname ={pathname}
          />
        </Hidden>
        <Hidden xsDown implementation="css">
          <Navigator PaperProps={{ style: { width: drawerWidth } }}  pathname ={pathname}/>
        </Hidden>
      </nav>
      <div className={classes.appContent}>
        <Header onDrawerToggle={this.handleDrawerToggle} onUpdateHandler={onUpdateHandler} />
        <main className={classes.mainContent}>
            <CustomLoadingBar component={this.props.children}>

            </CustomLoadingBar>
            {/* <Content component={this.props.children}></Content> */}
          
        </main>
      </div>
    </div>
  </MuiThemeProvider>
);
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default  withStyles(styles, { withTheme: true })(ResponsiveDrawer);
export default compose( withRouter, withStyles(styles))(ResponsiveDrawer);


