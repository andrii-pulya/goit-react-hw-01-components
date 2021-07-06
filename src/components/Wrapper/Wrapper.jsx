import { Container } from './Wrapper.styles'

import React from 'react'
import Profile from '../Profile/Profile'

import Statistics from '../Statistics/Statistics'
import statData from '../../data/statistical-data.json'

import FriendList from '../FriendList/FriendList'
import friendsData from '../../data/friends.json'

const Wrapper = () => {
  return (
    <Container>
      <Profile />
      <Statistics title="upload stats" stats={statData} />
      <FriendList friends={friendsData} />
    </Container>
  )
}

export default Wrapper
