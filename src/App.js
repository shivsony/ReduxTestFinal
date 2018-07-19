import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import Counter from './components/Counter/Counter';
import counterReducer from './Reducers/counterReducer';

const store = createStore(counterReducer,0,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
    this.onIncrement = this.onIncrement.bind(this);
  }
  render() {
    return (
      <div className="App">
        <ul> <li> <a href="onClick={}"> add child</a> </li></ul>
        <Counter
          value={store.getState()}
          onIncrement={() => {store.dispatch({ type: 'INCREMENT' })}
          this.setState({
            value: this.state.value + 1
          })
        }
          onDelete={() => store.dispatch({ type: 'DECREMENT' })}
        />
      </div>
    );
  }
}

export default App
