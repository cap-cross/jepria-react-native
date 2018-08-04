import React from 'react';
import {Text} from 'react-native';
import { WorkstateAsString } from '../../state/cap/workstate';

export default function (props) {
  return (
    <Text>
      {WorkstateAsString[props.workstate]}
    </Text>
  );
};
