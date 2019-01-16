import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import logoForLoading from '../../Assets/logoForLoading.png'
import styled, { keyframes } from "styled-components";
const styles = theme => ({

    appBar: {
        bottom: 0,
        top: 'auto',
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rootStyle: {
        height: '100vh',
        minHeight : '100vh',
        backgroundColor : '#cccccc',
      },
     
});

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const BlueDot = styled.div`
  background-color: blue;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
const RedDot = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
const GreenDot = styled.div`
  background-color: green;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

const LoadingLayout = props => {
    
debugger
    return (
        <div className={props.classes.rootStyle} >
        {/* 
            <div style={{ display: 'flex', margin:'25%', justifyContent: 'center', alignItems: 'center' }}>
              {/* <img src={logoForLoading} width='100' height='100' /> */}
              {/* */}
              {/* <h2>Loading</h2> */}
              {/* <div>
            <AppBar position="static">
                <Toolbar className={props.classes.toolbar}>

                </Toolbar>
            </AppBar>
            </div> */}
            <div style={{ display: 'flex', height:'100%', justifyContent: 'center', alignItems: 'center' }}>
            <DotWrapper >
        <GreenDot delay="0s" />
        <RedDot delay=".1s" />
        <BlueDot delay=".2s" />
      </DotWrapper>
            </div>
         
        </div>
    )
}

export default withStyles(styles)(LoadingLayout);
