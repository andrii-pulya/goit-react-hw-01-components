import React from 'react'
import user from '../../data/user.json'
import { SocialStats, SocialItem, SocialValue } from './SocialUserInfo.styled'

function SocialUserInfo() {
  const { followers, views, likes } = user.stats
  return (
    // <SocialUserInfoContainer>
    <SocialStats>
      <SocialItem>
        <span>Followers</span>
        <SocialValue>{followers}</SocialValue>
      </SocialItem>
      <SocialItem>
        <span>Views</span>
        <SocialValue>{views}</SocialValue>
      </SocialItem>
      <SocialItem>
        <span>Likes</span>
        <SocialValue>{likes}</SocialValue>
      </SocialItem>
    </SocialStats>
    // </SocialUserInfoContainer>
  )
}

export default SocialUserInfo
