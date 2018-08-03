import React from "react";
import { Toolbar, Form, Statusbar } from "./cap";

/*
 * Независимый от SM-framework-а(Redux) код приложения
 */
const App = function (props) {
  const workstate = props.workstate;
  const items = props.items;
  const currentIndex = props.currentIndex;

  return (
    <div>
      <Toolbar
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
      />

      <Form
        workstate={workstate}
        actions={{
          select: props.select,
          view: props.viewDetails
        }}
        items={items}
        currentIndex={currentIndex}
      />

      <Statusbar workstate={workstate} />
    </div>
  );
}

export default App;
