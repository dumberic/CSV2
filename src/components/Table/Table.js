import React, { Component, PropTypes } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import DataSource from '../DataSource'
import Modal from './Modal'
import Toolbar from './Toolbar'
import Colgroup from './Colgroup'
import Header from './Header'
import Body from './Body'
import Pagination from '../Pagination'
import withStyles from 'with-style'
import styles from './Table.css'

@withStyles(styles)
class Table extends Component {

  static propTypes = {
    columns: PropTypes.array.isRequired,
    filter: PropTypes.object,
    pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    checkable: PropTypes.bool,
    dataSource: PropTypes.object,
  }

  constructor (props) {
    super(props)
    
    this.dataSource = new DataSource(props.dataSource)

    this.state = {
      data: _.extend([], this.dataSource.data),
    }
  }

  render () {
    let { columns, pagination, toolbar = [], checkable, detailInit } = this.props
    columns = $.extend(true, [], columns)
    let command = columns.slice(-1)[0] || {}

    if (command.command) {
      columns.pop() 
      command = command.command
    } else {
      command = []
    }

    let props = { columns, checkable, detailInit, command, onClick: ::this.onCommandClick }
    
    return <div className="table-container">
      <Toolbar buttons={toolbar} onClick={::this.onCommandClick} />
      <table className="table table-bordered table-hover">
        <Colgroup {...props} />
        <Header {...props} />
        <Body {...props} data={this.state.data} />
      </table>
      <Pagination {...pagination} dataSource={this.dataSource} />
      <div ref="dataModalContainer"></div>
    </div>
  }

  componentDidMount () {
    this.dataSource.read(data => {
      data && this.setState({data: data.data})
    })
  }

  onCommandClick (command, data, e) {
    this.dataSource.setActiveData(data)
    if (command.click) command.click(data)
    else {
      let props = {
        type: command.name,
        data: data,
        fields: this.props.columns,
        dataSource: this.dataSource,
      }
      let dModalContainer = this.refs.dataModalContainer
      unmountComponentAtNode(dModalContainer)
      render(<Modal {...props} />, dModalContainer) 
    }
  }

}

export default Table 

