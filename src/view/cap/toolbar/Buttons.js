import React from 'react';
import ToolbarButton from '../../toolbar/ToolbarButton';
import ButtonImage from './ButtonImage';
import {Workstate} from '../../../state/cap/workstate';

const AddButton = props => {
  const workstate = props.workstate;
  const isDisabled = workstate === Workstate.ADD;
  const className = isDisabled ? "disabled" : "enabled"

  return (
      <ToolbarButton disabled={isDisabled} onClick={props.onClick}>
        <ButtonImage src="./toolbar/add.png" alt="Создать" className={className}/>
      </ToolbarButton>
  );
};

const SaveButton = (props) => {
  const workstate = props.workstate;
  const isDisabled = !(workstate === Workstate.EDIT || workstate === Workstate.ADD);
  const className = isDisabled ? "disabled" : "enabled"

  return (
      <ToolbarButton disabled={isDisabled} onClick={props.onClick}>
        <ButtonImage src="./toolbar/save.png" alt="Сохранить" className={className}/>
      </ToolbarButton>
  );
};

const EditButton = (props) => {
  const workstate = props.workstate;
  const isDisabled = (workstate === Workstate.ADD ||
                      workstate === Workstate.EDIT ||
                      workstate === Workstate.VIEW_LIST ||
                      workstate === Workstate.SEARCH);
  const className = isDisabled ? "disabled" : "enabled"

  return (
      <ToolbarButton disabled={isDisabled} onClick={props.onClick}>
        <ButtonImage src="./toolbar/edit.png" alt="Редактировать" className={className}/>
      </ToolbarButton>
  );
};

const DeleteButton = (props) => {
  const workstate = props.workstate;

  const isDisabled = (workstate === Workstate.ADD ||
                      workstate === Workstate.SEARCH ||
                      workstate === Workstate.VIEW_LIST);
  const className = isDisabled ? "disabled" : "enabled"

  return (
      <ToolbarButton disabled={isDisabled} onClick={props.onClick}>
        <ButtonImage src="./toolbar/delete.png" alt="Удалить" className={className}/>
      </ToolbarButton>
  );
};

const ViewButton = (props) => {
  const workstate = props.workstate;
  const isDisabled = !(workstate === Workstate.EDIT || workstate === Workstate.SELECTED);
  const className = isDisabled ? "disabled" : "enabled"

  return (
      <ToolbarButton disabled={isDisabled} onClick={props.onClick}>
        <ButtonImage src="./toolbar/view.png" alt="Смотреть" className={className}/>
      </ToolbarButton>
  );
};

const ListButton = (props) => {
  const workstate = props.workstate;
  const isDisabled = !(workstate === Workstate.ADD ||
                       workstate === Workstate.EDIT ||
                       workstate === Workstate.VIEW_DETAILS);
                       const className = isDisabled ? "disabled" : "enabled"

  return (
      <ToolbarButton disabled={isDisabled} onClick={props.onClick}>
        <ButtonImage src="./toolbar/list.png" alt="Список" className={className}/>
      </ToolbarButton>
  );
};

const SearchButton = (props) => {
  const workstate = props.workstate;
  const isDisabled = workstate === Workstate.SEARCH;
  const className = isDisabled ? "disabled" : "enabled"

  return (
      <ToolbarButton disabled={isDisabled} onClick={props.onClick}>
        <ButtonImage src="./toolbar/search.png" alt="Поиск" className={className}/>
      </ToolbarButton>
  );
};

const FindButton = (props) => {
  const workstate = props.workstate;
  const isDisabled = (workstate) => !(workstate === Workstate.SEARCH);
  const className = isDisabled ? "disabled" : "enabled"

  return (
      <ToolbarButton disabled={isDisabled(workstate)} onClick={props.onClick}>
        <ButtonImage src="./toolbar/find.png" alt="Найти" className={className}/>
      </ToolbarButton>
  );
};

export {AddButton, SaveButton, EditButton, ViewButton, ListButton, SearchButton, FindButton, DeleteButton};