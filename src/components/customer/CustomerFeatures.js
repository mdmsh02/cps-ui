import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import SwitchControlLayout from "./../SwitchControlLayout";

// class CustomerFeatures extends React.Component {
//   state = {
//     gilad: true,
//     jason: false,
//     antoine: true,
//   };



const CustomerFeatures = props => {
  debugger
//   const handleChange = name => event => {
//     console.log(event);
//    const updatedList= updateTodo(ess,{[name]:event.target.checked});
//    console.log(updatedList);
//    return updatedList;
//    // this.setState({ [name]: event.target.checked });
//   };
console.log(props.feature);
  const { ess } = props.feature;
  return (
      <div> <h2>Customer Features</h2>
    <FormControl component="fieldset">
      <FormGroup>
        {ess.map((features,index) => (
            
          <SwitchControlLayout key={features.featurename+index}
            name={features.featurename}
            action ={ features.enable}
            onchange={(event) => props.switchHandler(event,props.feature,features.featurename,'CUSTOMER_FEATURE_UPDATE')}
          />
        ))}
      </FormGroup>
    </FormControl>
    </div>
  );
};

export default CustomerFeatures;
