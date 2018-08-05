import React from "react";
//import { Button, View } from "react-native";
import { Container, Content, Header, Body, Title, Button, Left, Icon, Right, Toast } from 'native-base';

const style = {
  backgroundColor: "transparent",
};

const actionToIconName = action => {
  switch(action) {
    case 'add': {
      return 'add';
    }
    case 'delete': {
      return 'trash';
    }
    default:
      return 'unknown'
  }
};

export default function(props) {
  const handleClick = e => {
    e.preventDefault();
    props.onClick();
  };

  console.log("ToolbarButton: props.title = " + props.title);
  //  console.log('ToolbarButton: props.children = ' + JSON.stringify(props.children));
  const styles = props.styles;

  return props.disabled ? null : 
    <Button
      onPress={() => {
        props.onClick();
      }}
      transparent
    >
      <Icon name={actionToIconName(props.action)} style={styles.icon} />
    </Button>
}
