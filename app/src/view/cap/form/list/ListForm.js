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

  renderTaskItem = ({ item, index}) => {
      return (
        // TODO Устранить избыточность index и task - наследие объединения кода
        <TaskItem
          actions={this.props.actions}
          index={index}
          task={item}
          remove={() => this.props.removeTask(item.id)}
        />
      );
    }

  render() {
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