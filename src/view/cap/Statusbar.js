import React from 'react';
import { WorkstateAsString } from '../../state/cap/workstate';

export default function (props) {
  return (
    <div className="jepRia-StatusBar">
      {WorkstateAsString[props.workstate]}
    </div>
  );
};
