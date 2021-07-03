import React from 'react'

import user from '../../data/user.json'
import Paper from '../Paper/Paper'
import MainUserInfo from '../MainUserInfo/MainUserInfo'
import SocialUserInfo from '../SocialUserInfo/SocialUserInfo'
import { Image } from './Profile.styles'

function Profile() {
  return (
    <Paper gap={0}>
      <Image src={user.avatar} alt="Аватар пользователя" />
      <MainUserInfo></MainUserInfo>
      <SocialUserInfo></SocialUserInfo>
    </Paper>
  )
}

export default Profile
