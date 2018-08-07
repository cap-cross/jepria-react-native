import React from "react";
import { Button, Icon, Title } from 'native-base';

const actionToIconName = action => {
  switch(action) {
    case 'add': {
      return 'add';
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
  const action = props.action;
  const buttonContent =  action === 'save' ?
    <Title>Готово</Title> :
    <Icon name={actionToIconName(action)} style={props.styles.icon} />

  return props.disabled ? null : 
    <Button
      onPress={() => {
        props.onClick();
      }}
      transparent
    >
      {buttonContent}
    </Button>
}
