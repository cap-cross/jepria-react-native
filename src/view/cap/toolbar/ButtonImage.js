import React from 'react';
import {View, Text} from 'react-native';

export default function(props) {
  return (
    <View>
      <Text>
        ButtonImage_{props.alt}
      </Text>
    </View>
  );
};
