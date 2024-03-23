import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 40px; 

  background-color: #D93856;
  color: #fff;
  font-size: 17px;
  font-weight: bolder;
  border-radius: 14px;
  border: none;
  cursor: pointer;
 
  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.5;
  }
`