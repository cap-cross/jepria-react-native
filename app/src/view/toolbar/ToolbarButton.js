import React from "react";
import { Button, Icon } from 'native-base';

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
    case 'list': {
      return 'ios-list';
    }
    case 'search': {
      return 'ios-search';
    }
    case 'find': {
      return 'glasses';
    }
    case 'remove': {
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
