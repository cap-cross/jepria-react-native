import React from 'react';
import {View} from 'react-native';
import { Container, Content, Header, Body, Title, Button, Left, Icon, Right, Toast } from 'native-base';

import {AddButton, SaveButton, EditButton, ViewButton, ListButton, SearchButton, FindButton, DeleteButton} from '.';

export default function(props) {
  const actions = props.actions;
  const wrkst = props.workstate;

  getStyles = () => ({
    content: {
      justifyContent: 'space-between',
      padding: 8,
    },
    inputGroup: {
      flex: 0.9,
    },
    header: {
      backgroundColor: 'blue',
    },
    title: {
      color: '#FFFFFF',
    },
    icon: {
      color: '#FFFFFF',
      fontSize: 30,
    },
    editButton: {
      backgroundColor: 'green',
      height: 56,
      width: 56,
      borderRadius: 28,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 30,
      right: 30,
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0,
      },
    },
    editButtonIcon: {
      color: 'white',
    },
  });

  const styles = this.getStyles();
  return (
    <Header style={styles.header}>
      <Right>
        <AddButton styles={styles} workstate={wrkst} onClick={actions.add}/>
        <SaveButton styles={styles} workstate={wrkst} onClick={actions.save}/>
        <EditButton styles={styles} workstate={wrkst} onClick={actions.edit}/>
        <ViewButton styles={styles} workstate={wrkst} onClick={actions.view}/>
        <ListButton styles={styles} workstate={wrkst} onClick={actions.list}/>
        <DeleteButton styles={styles} workstate={wrkst} onClick={actions.remove}/>
        <SearchButton styles={styles} workstate={wrkst} onClick={actions.search}/>
        <FindButton styles={styles} workstate={wrkst} onClick={actions.find}/>
      </Right>
    </Header>
  );
};
