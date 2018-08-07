import React from 'react';
import { Header, Body, Left, Right } from 'native-base';

import {AddButton, SaveButton, EditButton, ViewButton, ListButton, SearchButton, FindButton, DeleteButton} from '.';

export default function(props) {
  const actions = props.actions;
  const wrkst = props.workstate;

  getStyles = () => ({
    header: {
      backgroundColor: 'darkgray',
    },
    title: {
      color: '#FFFFFF',
    },
    icon: {
      color: '#FFFFFF',
      fontSize: 30,
    },
  });

  const styles = this.getStyles();
  return (
    <Header style={styles.header}>
      <Left>
        <SaveButton styles={styles} workstate={wrkst} onClick={actions.save}/>
      </Left>
      <Right>
        <AddButton styles={styles} workstate={wrkst} onClick={actions.add}/>
        <EditButton styles={styles} workstate={wrkst} onClick={actions.edit}/>
        <ViewButton styles={styles} workstate={wrkst} onClick={actions.view}/>
        <ListButton styles={styles} workstate={wrkst} onClick={actions.list}/>
        <SearchButton styles={styles} workstate={wrkst} onClick={actions.search}/>
        <FindButton styles={styles} workstate={wrkst} onClick={actions.find}/>
        <DeleteButton styles={styles} workstate={wrkst} onClick={actions.remove}/>
      </Right>
    </Header>
  );
};
