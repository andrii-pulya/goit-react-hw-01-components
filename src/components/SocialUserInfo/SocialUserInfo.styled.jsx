import styled from 'styled-components'

// export const SocialUserInfoContainer = styled.div``

export const SocialStats = styled.ul`
  display: flex;
  width: 100%;
  height: 100px;

  padding: 0;
  margin: 0;
  list-style-type: none;
  background-color: #f3f6f9;
`
export const SocialItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid #d8e0ea;
  height: 100%;
  width: 100%;
  text-align: center;
`
export const SocialValue = styled.span`
  display: block;
  font-weight: bold;
`
