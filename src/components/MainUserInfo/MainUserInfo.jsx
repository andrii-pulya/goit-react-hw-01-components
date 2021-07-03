import React from 'react'
import user from '../../data/user.json'
import { Name, Tag, Location } from './MainUserInfo.styles'

function MainUserInfo() {
  const { name, tag, location } = user
  return (
    <div>
      <Name>{name}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </div>
  )
}

export default MainUserInfo
