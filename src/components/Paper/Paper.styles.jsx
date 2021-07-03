import styled from 'styled-components'

export const PaperContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 300px;
  height: 316px;
  padding: ${(props) => props.gap}px;
  background-color: #fff;
  border-radius: 10px;
`
