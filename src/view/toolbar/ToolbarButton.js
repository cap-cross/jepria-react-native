import React from 'react';
import {Button, View} from 'react-native';

const style = {
  backgroundColor: 'transparent',
};

export default function(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  }

  console.log('ToolbarButton: props.title = ' + props.title);
//  console.log('ToolbarButton: props.children = ' + JSON.stringify(props.children));

  return (
    <View onClick={handleClick} disabled={props.disabled} style={style}>
      <Button
        onPress={props.onClick}
        title={props.title}
        color="green"
        accessibilityLabel="Learn more about this purple button"
        />      
  </View>
  );
};
