import React, { Component } from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import EmptyView from './EmptyView';

class ListForm extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
  };

  state = {
    selected: null
  };

  render() {
    const actions = this.props.actions;
    let contentView = <EmptyView text="Нет задач" />; // eslint-disable-line react/prop-types
    const items = this.props.items;

    if (items.length > 0) {
      contentView = (
        <Text>
          ListForm
        </Text>
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