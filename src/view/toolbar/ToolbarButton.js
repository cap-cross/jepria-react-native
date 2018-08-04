import React from 'react';
import {View} from 'react-native';

const style = {
  backgroundColor: 'transparent',
};

export default function(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  }

  return (
    <View onClick={handleClick} disabled={props.disabled} style={style}>
      {props.children}
    </View>
);
};
