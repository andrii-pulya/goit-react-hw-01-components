import PropTypes from 'prop-types'
import { Image, Name, IsOnline } from './FriendListItem.styles'
import cardStyles from './FriendListItem.module.css'
import { FriendListContainer } from './FriendListContainer.styles'

export default function FriendListItem({ avatar, name, isOnline }) {
  const onlineCheck = `${isOnline ? cardStyles.online : cardStyles.offline}`
  return (
    <FriendListContainer>
      <IsOnline className={onlineCheck} />
      <Image src={avatar} />
      <Name>{name}</Name>
    </FriendListContainer>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}
