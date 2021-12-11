import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const Image = styled.img`
border: 1px solid #ccc;
border-radius: 50%;
box-shadow: 0 0 0 1px rgba(0,0,0,.2);
height: 75px;
width: 75px;
overflow: hidden;
object-fit: cover;
`
