import React, { Component, PropTypes } from 'react';

class FormElement extends Component {

  constructor (props) {
    super(props)

    let data = this.props.config.data
    this.state = {
      data: 'array' === $.type(data) ? data : []
    }
  }

  static propTtypes = {
    config: React.PropTypes.object.isRequired,
    type: React.PropTypes.string.isRequired,
    value: React.PropTypes.any
  }

  componentDidMount () {
    if ('checkbox' === this.props.type) {
      if ('string' === $.type(this.props.config.data)) {
        ajax({
          url: this.props.config.data
        }, (resp) => {
          this.setState({
            data: resp.data
          })
        })
      }
    }
  }

  getOptionElment (type) {
    let Element = (<div>
                    <label className="checkbox-inline">
                      <input type="radio" name={this.props.config.name} value="1" defaultChecked={this.props.value === 1} /> 是 
                    </label>
                    <label className="checkbox-inline">
                      <input type="radio" name={this.props.config.name} value="0" defaultChecked={this.props.value === 0} /> 否
                    </label>
                  </div>)

    if ('checkbox' === type) {
      Element = (<div>
                {this.state.data.map(item => {
                  return (<label key={item.id} className="checkbox-inline">
                    <input type="checkbox" name={this.props.config.name} value={item[this.props.config.key || 'id']} /> {item[this.props.config.value]} 
                  </label>)
                  })}
                </div>)
    }

    return Element
  }

  render () {

    return this.getOptionElment(this.props.type)

  }

}

export default FormElement

