import React from 'react';
import PropTypes from 'prop-types';
import CardLayout from './../CardLayout';

const customerScreenTracking = props =>{

    const screenTrackingData = props.screenTracking;
    console.log(screenTrackingData);
    
  return(
   <div>
       <h2>Screen Trakcing</h2>
       {
           screenTrackingData.map((data,index) =>(
            <CardLayout  key={index+data.pagename}
            screenData ={data}
            switchHandler ={props.switchHandler}
            screenTracking = {screenTrackingData}
            ></CardLayout>
           ))
       }
       
   </div>   
  )  
}

export default customerScreenTracking;