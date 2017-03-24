import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { Leaderboard } from '~/components'

export default class LeaderboardContainer extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <Leaderboard />
    )
  }
}
