import React from "react";

import { ContainerItens as Container } from './styles'

function ContainerItens({ children, isConfig }) {

  return <Container isConfig={isConfig}>{children}</Container>
}

export default ContainerItens