import _ from "lodash";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  let newState = {};
  switch (action.type) {
    case "RESET_CREATE_STATUS":
      newState = _.omit(state, "createStatus");
      return newState;
    case "CREATE_STREAM":
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      /* newState["createStatus"] = "success"; */
      return newState;
    case "FETCH_STREAM":
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case "FETCH_STREAMS":
      newState = { ...state };
      action.payload.forEach((element) => {
        newState[element.id] = element;
      });
      /*
      newState = { ...state, ..._.mapKeys(action.payload, "id") };
      */
      return newState;
    case "EDIT_STREAM":
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case "DELETE_STREAM":
      newState = _.omit(state, action.payload);
      return newState;
    default:
      return state;
  }
};
