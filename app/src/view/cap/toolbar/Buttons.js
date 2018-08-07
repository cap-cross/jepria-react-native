import React from 'react';

import ToolbarButton from '../../toolbar/ToolbarButton';
import {Workstate} from '../../../state/cap/workstate';

const AddButton = props => {
  return (
      <ToolbarButton
        action='add'
        styles={props.styles}
        disabled={props.workstate === Workstate.ADD}
        onClick={props.onClick}
      />
  );
}

const SaveButton = (props) => {
  const workstate = props.workstate;
  const disabled = !(workstate === Workstate.EDIT || workstate === Workstate.ADD);
  return disabled ? null :
  <ToolbarButton
    action='save'
    styles={props.styles}
    disabled={disabled}
    onClick={props.onClick}
  />
};

const DeleteButton = props => {
  const workstate = props.workstate;
  
  const isDisabled = (workstate === Workstate.ADD ||
                      workstate === Workstate.SEARCH ||
                      workstate === Workstate.VIEW_LIST);

  return (
      <ToolbarButton
        action='remove'
        styles={props.styles}
        disabled={isDisabled}
        onClick={props.onClick}
      />
  );
};

const EditButton = (props) => {
  const workstate = props.workstate;
  const isDisabled = (workstate === Workstate.ADD ||
                      workstate === Workstate.EDIT ||
                      workstate === Workstate.VIEW_LIST ||
                      workstate === Workstate.SEARCH);
  return (
    <ToolbarButton
      action='edit'
      styles={props.styles}
      disabled={isDisabled}
      onClick={props.onClick}
    />
  );
};

const ViewButton = (props) => {
  const workstate = props.workstate;
  const isDisabled = !(workstate === Workstate.EDIT || workstate === Workstate.SELECTED);

  return (
    <ToolbarButton
      action='view'
      styles={props.styles}
      disabled={isDisabled}
      onClick={props.onClick}
    />
  );
};

const ListButton = (props) => {
  const workstate = props.workstate;
  const isDisabled = !(workstate === Workstate.ADD ||
                       workstate === Workstate.EDIT ||
                       workstate === Workstate.VIEW_DETAILS);

  return (
    <ToolbarButton
      action='list'
      styles={props.styles}
      disabled={isDisabled}
      onClick={props.onClick}
    />
  );
};

const SearchButton = (props) => {
  const workstate = props.workstate;
  const isDisabled = workstate === Workstate.SEARCH;

  return (
    <ToolbarButton
      action='search'
      styles={props.styles}
      disabled={isDisabled}
      onClick={props.onClick}
    />
  );
};

const FindButton = (props) => {
  const workstate = props.workstate;
  const isDisabled = !(workstate === Workstate.SEARCH);

  return (
    <ToolbarButton
      action='find'
      styles={props.styles}
      disabled={isDisabled}
      onClick={props.onClick}
    />
  );
};

export {AddButton, SaveButton, EditButton, ViewButton, ListButton, SearchButton, FindButton,  DeleteButton};