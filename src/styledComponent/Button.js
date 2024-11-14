import styled from "styled-components"

export  const StyledButton = styled.button`
color: red;
font-size: 16px;
padding: 10px;
margin: ${({margin})=>{return margin}};
&:hover{
background-color:${({variant})=>  variant ? 'white':'purple'}
`; 

export const CursorButton = styled(StyledButton)`
cursor: pointer;
background-color: black;
`

export const SubmitButton = styled(StyledButton).attrs({
    type: 'submit'
})``;