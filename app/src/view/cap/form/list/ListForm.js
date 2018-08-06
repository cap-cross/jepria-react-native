import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import EmptyView from './EmptyView';
import TaskItem from './TaskItem';

class ListForm extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
  };

  state = {
    selected: null
  };

  renderTaskItem = ({ item }) => (
    <TaskItem
      task={item}
      navigation={this.props.navigation} // eslint-disable-line react/prop-types
      remove={() => this.props.removeTask(item.id)}
    />
  );

  render() {
    const actions = this.props.actions;
    let contentView = <EmptyView text="Нет задач" />; // eslint-disable-line react/prop-types
    const items = this.props.items;

    if (items.length > 0) {
      contentView = (
        <FlatList
          data={items}
          renderItem={this.renderTaskItem}
          keyExtractor={(item, index) => index.toString()} // TODO Проверить корректность
        />
    );
    }

    const result = (
      <View>
        {contentView}
      </View>
  );

    return result;
  }
}

export default ListForm;