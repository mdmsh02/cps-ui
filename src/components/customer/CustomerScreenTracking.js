import React from 'react';
import PropTypes from 'prop-types';
import CardLayout from './../CardLayout';

const CustomerScreenTracking = props =>{

    const screenTrackingData = props.screenTracking;
    console.log(screenTrackingData);
    
  return(
   <div >
       <h2> Screen Tracking </h2>
       <div style={{display:'flex'}}>
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
   </div>   
  )  
}

export default CustomerScreenTracking;