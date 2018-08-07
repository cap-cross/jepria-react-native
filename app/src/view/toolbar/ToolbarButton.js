import React from "react";
import { Button, Icon, Text } from 'native-base';

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
      //return null;
    }
    case 'edit': {
      return 'md-create';
    }
    case 'view': {
      return 'ios-eye';
    }
    case 'list': {
      return 'ios-list';
    }
    case 'search': {
      return 'md-search';
    }
    case 'find': {
//      return 'glasses';
      return 'ios-search';
    }
    case 'remove': {
      return 'trash';
    }
    default:
      return 'unknown'
  }
};

export default function(props) {

  const iconName = actionToIconName(props.action);
  return props.disabled ? null : 
    <Button
      onPress={() => {
        props.onClick();
      }}
      transparent
    >
    {
      iconName ?
      <Icon name={iconName} style={props.styles.icon} /> :
      <Text>Готово</Text>
    }
    </Button>
}
