import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Leaderboard } from '~/components'

export default class LeaderboardContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired
  }
  state = {}
  render () {
    return (
      <Leaderboard openDrawer ={this.props.openDrawer}/>
    )
  }
}
