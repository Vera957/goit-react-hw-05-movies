import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Nav = styled.nav`
display: flex;
gap: 10px;
padding: 10px;
`

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  padding: 5px;
  border: 1px solid black;
  color: black;

  &.active{
    background: red;
    color: white;
  }
`

export const Container = styled.div`
display: grid;
padding: 10px;

`
export const H2 = styled.h2`
text-align: center;
`

export const Ul = styled.ul`
list-style: none;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
flex-wrap: wrap;
gap: 10px;
justify-content: center;

`
export const LinkStyled = styled.li`
text-decoration: none;
color: black;
text-align: center;
border: lightgrey solid 1px;
&:hover{
   -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, -31px -20px 15px -8px rgba(0,0,0,0); 
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, -31px -20px 15px -8px rgba(0,0,0,0);
}
& * {
    text-decoration: none;
    color: black;
}
`
export const Input = styled.input`
border: 1px solid lightgray;
font-size: 25px;
padding: 5px;
outline: none;
margin-bottom: 15px;
margin-left: 10px;
`

export const Button = styled.button`
padding: 5px;
font-size: 25px;
margin-left: 15px;
border: none;
border: 1px solid lightgray;
margin-bottom: 15px;

`

export const MovieDetailsS = styled.div`
display: grid;
gap: 10px;
`

export const MiniContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`

export const NavLinkStyledMini = styled(NavLink)`
color: black;
padding: 10px;
margin-left: 10px;
max-width: 50px;
font-size: 20px;
margin-bottom: 10px;
`