import PropTypes from 'prop-types'

import FriendListItem from '../FriendListItem/FriendListItem'
import { FriendContainer } from './FriendList.styles'

export default function FriendList({ friends }) {
  return (
    <FriendContainer>
      {friends.map((card) => (
        <FriendListItem
          key={card.id}
          avatar={card.avatar}
          name={card.name}
          isOnline={card.isOnline}
        />
      ))}
    </FriendContainer>
  )
}
