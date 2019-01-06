// @flow

import { connect } from 'react-redux'

import { sayHello } from '../action/hello'

import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'say hello',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHello('hello')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
