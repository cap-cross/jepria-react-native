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
      backgroundColor: DARK_BLUE_COLOR,
    },
    title: {
      color: '#FFFFFF',
    },
    icon: {
      color: '#FFFFFF',
      fontSize: 30,
    },
    editButton: {
      backgroundColor: DARK_AQUA_GREEN_COLOR,
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
    // <View className="jepRia-ToolBar">
    //   <AddButton workstate={wrkst} onClick={actions.add}/>
    //   <AddButton workstate={wrkst} onClick={actions.add}/>
    //   <SaveButton workstate={wrkst} onClick={actions.save}/>
    //   <EditButton workstate={wrkst} onClick={actions.edit}/>
    //   {/* <DeleteButton workstate={wrkst} onClick={actions.remove}/>
    //   <ViewButton workstate={wrkst} onClick={actions.view}/>
    //   <ListButton workstate={wrkst} onClick={actions.list}/>
    //   <SearchButton workstate={wrkst} onClick={actions.search}/>
    //   <FindButton workstate={wrkst} onClick={actions.find}/> */}
    // </View>
    <Header style={styles.header}>
    <Left>
      <Button onPress={this.goBack} transparent>
        <Icon name="arrow-back" style={styles.icon} />
      </Button>
    </Left>
    <Body>
      <Title style={styles.title}>Задача</Title>
    </Body>
    <Right>
      <Button
        onPress={() => {
          this.removeTask(task);
        }}
        transparent
      >
        <Icon name="trash" style={styles.icon} />
      </Button>
    </Right>
  </Header>

  );
};
