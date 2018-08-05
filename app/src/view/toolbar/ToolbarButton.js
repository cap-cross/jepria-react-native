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
    case 'save': {
      return 'ios-arrow-down';
    }
    case 'edit': {
      return 'md-create';
    }
    case 'view': {
      return 'ios-eye';
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
  return props.disabled ? null : 
    <Button
      onPress={() => {
        props.onClick();
      }}
      transparent
    >
      <Icon name={actionToIconName(props.action)} style={props.styles.icon} />
    </Button>
}
