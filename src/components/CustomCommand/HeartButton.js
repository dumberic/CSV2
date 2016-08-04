import React, { Component, PropTypes } from 'react';
import styles from './HeartButton.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class HearButton extends Component {

  static propTtypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
  }

  render () {

    let id = '_' + Math.random()
    let { name, onClick, data } = this.props

    return (<span>
      <input type="checkbox" name={name} id={id} defaultChecked={!!data.focus} onChange={onClick}/>
      <label htmlFor={id}>
        <svg viewBox="0 0 22 22">
          <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
        </svg>
      </label>
    </span>)

  }

}

export default HearButton

