import { Container } from './Wrapper.styles'

import React from 'react'
import Profile from '../Profile/Profile'

import Statistics from '../Statistics/Statistics'
import statData from '../../data/statistical-data.json'
import { randomColor } from '../Statistics/Statistics'

const Wrapper = () => {
  return (
    <Container>
      <Profile />
      <Statistics title="upload stats" stats={statData} />
    </Container>
  )
}

export default Wrapper
