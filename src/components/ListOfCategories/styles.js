import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow-y: hidden;
  width: 100%;
  ${(props) =>
    props.fixed &&
    css`
      background: #fff;
      border-radius: 60px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(0.5);
      z-index: 1;
    `}
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
