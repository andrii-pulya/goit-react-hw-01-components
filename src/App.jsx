import React from 'react';

import { PageContainer } from './components/PageContainer/PageContainer.styles';

import Profile from './components/Profile/Profile';
import userData from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import statData from './data/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friendsData from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactionsData from './data/transactions.json';

function App() {
  const { avatar, name, tag, location } = userData;
  return (
    <PageContainer>
      <Profile avatar={avatar} name={name} tag={tag} location={location} />
      <Statistics title="upload stats" stats={statData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </PageContainer>
  );
}

export default App;
