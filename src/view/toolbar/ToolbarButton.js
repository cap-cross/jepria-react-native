import React from 'react';
import {View} from 'react-native';

const style = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

export default function(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  }

  return (
    // <button onClick={handleClick} disabled={props.disabled} style={style}>
    //   {props.children}
    // </button>
    <View onClick={handleClick} disabled={props.disabled} style={style}>
      {props.children}
    </View>
);
};
