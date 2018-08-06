import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import {LIGHT_BLUE_COLOR, LIGHT_AQUA_GREEN_COLOR} from '../../../../../res/style';

class TaskItem extends React.PureComponent {
  static propTypes = {
    index: PropTypes.number,
    task: PropTypes.object,
    remove: PropTypes.func.isRequired,
  };

  getStyles = props => ({
    card: {
      marginVertical: 7, 
      marginHorizontal: 15, 
      backgroundColor: 'rgba(17,49,85,0.55)', 
      borderRadius: 15,
      padding: 15
    },
    button: {
      marginTop: 3,
    },
    text: {
      color: props.color,
      marginLeft: 8,
    },
  });

  goToDetailViewTask = () => {
    this.props.actions.view(this.props.index);
  };

  render() {
    const styles = this.getStyles(this.props);

    return (
      <View>
        <TouchableOpacity onPress={this.goToDetailViewTask} style={styles.card}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <View>
                <Text numberOfLines={1} ellipsizeMode='tail' style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{this.props.task.name}</Text>
              </View>
              <View>
                <Text numberOfLines={1} ellipsizeMode='tail' style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>{this.props.task.authorName}</Text>
              </View>
              <View>
                <Text numberOfLines={1} ellipsizeMode='tail' style={{color: 'white', fontSize: 14}}>{this.props.task.description}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TaskItem;
