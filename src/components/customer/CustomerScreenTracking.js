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
            <CardLayout 
            screenData ={data}
            ></CardLayout>
           ))
       }
       
   </div>   
  )  
}

export default customerScreenTracking;