import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css';
import { connect } from 'react-redux';
class Counter extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {value, onIncrement, onDelete } = this.props
    return (
      <div>
        <span> Counter {value} {" "}
        <button onClick={onIncrement}>
            +
          </button>
          {' '}
          <button onClick={onDelete}>
            delete
          </button>

        </span>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
export default Counter
