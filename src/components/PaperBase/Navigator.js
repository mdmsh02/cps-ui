import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {
  MenuList, MenuItem,
} from '@material-ui/core';

const categories = [
  {
    id: 'Develop',
    children: [
      { id: 'Authentication', icon: <PeopleIcon />, active: true },
      { id: 'Database', icon: <DnsRoundedIcon /> },
      { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
      { id: 'Hosting', icon: <PublicIcon /> },
      { id: 'Functions', icon: <SettingsEthernetIcon /> },
      { id: 'ML Kit', icon: <SettingsInputComponentIcon /> },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Analytics', icon: <SettingsIcon /> },
      { id: 'Performance', icon: <TimerIcon /> },
      { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    ],
  },
];

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 16,
    paddingBottom: 16,
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize,
    },
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Navigator(props) {
  const { classes, pathname, ...other } = props;
  debugger
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding >
        <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
          CPS
        </ListItem>
        <ListItem className={classNames(classes.item, classes.itemCategory)}>
          <ListItemIcon>
          
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            DEV
          </ListItemText>
        </ListItem>
        <React.Fragment >
          <MenuList>
           
            <MenuItem 
             className={classes.categoryHeader}
             component={Link} to="/" selected={'/' === pathname}  >
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary,
                  }}
                >
                  Home
                </ListItemText>
              {/* </ListItem> */}
            </MenuItem>
            <MenuItem  className={classes.categoryHeader} component={Link} to="/CustomerFeatures" selected={'/CustomerFeatures' === pathname} >
              
            <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary,
                  }}
                >
                Feature
                </ListItemText>
 
           </MenuItem>
            <MenuItem className={classes.categoryHeader} component={Link} to="/CustomerAnalytics" selected={'/CustomerAnalytics' === pathname} >
             
            <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary,
                  }}
                >
                Analytics
                </ListItemText> 
           </MenuItem>
            <MenuItem className={classes.categoryHeader} component={Link} to="/CustomerTheme" selected={'/CustomerTheme' === pathname} >
            <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary,
                  }}
                >
                Theme
                </ListItemText> 
              
            </MenuItem>
            <MenuItem  className={classes.categoryHeader} component={Link} to="/CustomerScreenTracking" selected={'/CustomerScreenTracking' === pathname} >
            <ListItemText
                  classes={{
                    primary: classes.categoryHeaderPrimary,
                  }}
                >
                Tracking
                </ListItemText> 
           </MenuItem>
          </MenuList>
        </React.Fragment>
        {/* {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem
                button
                dense
                key={childId}
                className={classNames(
                  classes.item,
                  classes.itemActionable,
                  active && classes.itemActiveItem,
                )}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                    textDense: classes.textDense,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))} */}
        <Divider className={classes.divider} />

      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};
//export default compose( withRouter, withStyles(styles))(Navigator);
export default withStyles(styles)(Navigator);
