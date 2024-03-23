import styled from "styled-components"


export const ContainerItens = styled.div`
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-radius: 30px 30px 30px 30px;

  ${props => props.isConfig && `
    min-height: calc(100vh - 340px);
    height: auto;
  `}
`