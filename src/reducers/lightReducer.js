import { actionTypes } from "../actions/actionTypes";

/**
 * Reads the message carried by the `action` and update the state accordingly.
 * 
 * @param {*} state the state to be changed based on the action.
 * @param {*} action an information that can be read by the reducer;
 *  a redux action or a payload. 
 */
const lightReducer = (state = "on", action) => {
  if (action.type === actionTypes.switch) {
    return state === "on" ? "off" : "on"
  }

  return state;
}

export default lightReducer;