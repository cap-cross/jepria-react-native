import React from 'react';
import {View} from 'react-native';

import Field from './Field';

const style = {
  height: '904px',
};

export default function (props) {
  const workstate = props.workstate;
  const currentItem = props.currentItem;

  return (
    <View>
      <Field label="Идентификатор" workstate={workstate}>{currentItem ? currentItem.id : ""}</Field>
      <Field label="Наименование" workstate={workstate}>{currentItem ? currentItem.name : ""}</Field>
      {/* <Field label="Наименование английское" workstate={workstate}>{currentItem ? currentItem.nameEn : ""}</Field>
      <Field label="Описание" workstate={workstate}>{currentItem ? currentItem.description : ""}</Field> */}
    </View>
  );
};
