import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class Counter extends Component {
  onIncreaseClick(){}
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div className="App">
        <h1>Samle Redux Counter</h1>
        <h2>Count: {value}</h2>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

//Action 
const increaseAction = { type: 'increase' };

//Reducer
const counter = (state = { count: 0 }, action) => {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

//store
const store = createStore(counter);

//Map redux state to component props
const mapStateToProps = (state) => {
  return {
    value: state.count
  }
}

//Map redux action to component props 
const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

//Connected Component 
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
export default Counter;
