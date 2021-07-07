import React from 'react';

import Paper from '../Paper/Paper';
import SocialUserInfo from '../SocialUserInfo/SocialUserInfo';
import { Image } from './Profile.styles';
import { Name, Tag, Location } from '../MainUserInfo/MainUserInfo.styles';

function Profile({ avatar, name, tag, location }) {
  return (
    <Paper gap={0}>
      <Image src={avatar} alt="Аватар пользователя" />
      <Name>{name}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
      <SocialUserInfo />
    </Paper>
  );
}

export default Profile;
