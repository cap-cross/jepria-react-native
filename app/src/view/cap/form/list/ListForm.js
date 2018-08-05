import React, { Component } from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import EmptyView from './EmptyView';
// import ReactTable from "react-table";
// import 'react-table/react-table.css'

const columns = [{
  Header: 'Id',
  accessor: 'id'
}, {
  Header: 'Автор',
  accessor: 'author',
}, {
  Header: 'Название',
  accessor: 'name'
}, {
  Header: 'Название (англ)',
  accessor: 'nameEn'
}, {
  Header: 'Описание',
  accessor: 'description'
}, {
  Header: 'Статус',
  accessor: 'status'
}];


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
        // <ReactTable
        //   className="jepRia-PagingBar"

        //   pageSize={31}
        //   getTrProps={(state, rowInfo) => {
        //     return {
        //       onDoubleClick: (e) => {
        //         actions.view(rowInfo.index);
        //         this.setState({
        //           selected: rowInfo.index
        //         })
        //       },
        //       onClick: (e) => {
        //         this.setState({
        //           selected: rowInfo.index
        //         })

        //         actions.select(rowInfo.index);
        //       },
        //       style: {
        //         background: this.props.currentIndex > 0 && rowInfo && rowInfo.index === this.state.selected ? '#8DB2E3' : 'white',
        //         color: this.props.currentIndex > 0 && rowInfo && rowInfo.index === this.state.selected ? 'white' : 'black'
        //       }
        //     }
        //   }}

        //   data={items}
        //   columns={columns}
        //   />
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