import React from 'react'
import { connect } from 'react-redux'

/**
 * Selects the part of the data from the store that this connected component needs. 
 * A connected component is any React Component that used `Redux.connect` to 
 * access the current state and any method for dispatching actions from the store.
 * @param {*} state  the entire Redux store state; the same value returned by a call to `store.getState()`.
 */
const mapStateToProps = state => ({ light: state })

/**
 * Dispatch action to the store.
 * We only use `store.dispatch` to send an action; a way to trigger a state change.
 * However, in react redux, components never access the store directly, hence the `connect`
 * handles it. 
 * @param {*} dispatch recieved from react . Use it to dispatch actions.
 */
const mapDispatchToProps = dispatch => ({
  onSwitch: () => dispatch({ type: "SWITCH" })
})

/**
 * A React component with a button to trigger a state change and a placeholder to 
 * record the state.
 * @param {*} param the state.
 * @param {*} onSwitch the function that handles the button's onClick event.
 */
const LightComponent = ({ light, onSwitch }) => (
  <div>
    <div>{light}</div>
    <button onClick={onSwitch}>switch</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(LightComponent)
