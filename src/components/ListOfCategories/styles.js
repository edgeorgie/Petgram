import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow-y: hidden;
  width: 100%;
  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(1, 1, 1, 0.5);
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
