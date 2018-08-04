import React from "react";
import {View, Text} from 'react-native';
import { Toolbar, Form, Statusbar } from "./cap";

/*
 * Независимый от SM-framework-а(Redux) код приложения
 */
const ReactApp = function (props) {
  const workstate = props.workstate;
  const items = props.items;
  const currentIndex = props.currentIndex;

  return (
    <View>
      {/* <Toolbar
        workstate={workstate}
        actions={{
          add: props.add,
          save: props.save,
          edit: props.edit,
          remove: props.remove,
          select: props.select,
          search: props.search,
          find: props.find,
          view: props.viewDetails,
          list: props.viewList,
        }}
      /> */}
      <Text>
        Toolbar
      </Text>

      {/* <Form
        workstate={workstate}
        actions={{
          select: props.select,
          view: props.viewDetails
        }}
        items={items}
        currentIndex={currentIndex}
      /> */}
      <Text>
        Form
      </Text>

      <Statusbar workstate={workstate} />
    </View>
  );
}

export default ReactApp;
