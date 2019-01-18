import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const SwitchControlLayout = props => {
  debugger
  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={props.action}
            onChange={props.onchange}
            value={props.name}
          />
        }
        // labelPlacement="start"
        label={props.name}
      />
    </div>
  );
};

export default SwitchControlLayout;