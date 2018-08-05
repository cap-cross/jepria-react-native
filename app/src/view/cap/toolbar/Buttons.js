import React from 'react';
import ToolbarButton from '../../toolbar/ToolbarButton';
import ButtonImage from './ButtonImage';
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

  return (
    <ToolbarButton
      action='save'
      styles={props.styles}
      disabled={!(workstate === Workstate.EDIT || workstate === Workstate.ADD)}
      onClick={props.onClick}
    />
  );
};

const DeleteButton = props => {
  const workstate = props.workstate;
  
  const isDisabled = (workstate === Workstate.ADD ||
                      workstate === Workstate.SEARCH ||
                      workstate === Workstate.VIEW_LIST);

  return (
      <ToolbarButton
        action='delete'
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

// const ListButton = (props) => {
//   const workstate = props.workstate;
//   const isDisabled = !(workstate === Workstate.ADD ||
//                        workstate === Workstate.EDIT ||
//                        workstate === Workstate.VIEW_DETAILS);
//                        const className = isDisabled ? "disabled" : "enabled"

//   return (
//       <ToolbarButton disabled={isDisabled} onClick={props.onClick}>
//         <ButtonImage src="./toolbar/list.png" alt="Список" className={className}/>
//       </ToolbarButton>
//   );
// };

// const SearchButton = (props) => {
//   const workstate = props.workstate;
//   const isDisabled = workstate === Workstate.SEARCH;
//   const className = isDisabled ? "disabled" : "enabled"

//   return (
//       <ToolbarButton disabled={isDisabled} onClick={props.onClick}>
//         <ButtonImage src="./toolbar/search.png" alt="Поиск" className={className}/>
//       </ToolbarButton>
//   );
// };

// const FindButton = (props) => {
//   const workstate = props.workstate;
//   const isDisabled = (workstate) => !(workstate === Workstate.SEARCH);
//   const className = isDisabled ? "disabled" : "enabled"

//   return (
//       <ToolbarButton disabled={isDisabled(workstate)} onClick={props.onClick}>
//         <ButtonImage src="./toolbar/find.png" alt="Найти" className={className}/>
//       </ToolbarButton>
//   );
// };

//export {AddButton, SaveButton, EditButton, ViewButton, ListButton, SearchButton, FindButton, DeleteButton};
export {AddButton, SaveButton, EditButton, ViewButton, DeleteButton};