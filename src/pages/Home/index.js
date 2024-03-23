import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import Logo from '../../assets/burger.png'

import { H1 } from "../../components/Title/styles";
import { ContainerItens } from "../../components/ContainerItens/styles";
import { Button } from "../../components/Button/styles"

import { Container, Image, InputLabel, Input } from './styles'

function App() {
  const [orders, setOrders] = useState([])
  const inputOrder = useRef()
  const inputName = useRef()
  const history = useHistory()

  async function addNewOrder() {

    const orderValue = inputOrder.current.value.trim();
    const nameValue = inputName.current.value.trim();
    const baseUrl = "https://api-node-hamburgueria.vercel.app"

    if (orderValue == '') {
      alert('Preencha o campo "Pedido"')
      return
    }

    if (nameValue == '') {
      alert('Preencha o campo "Nome"')
      return
    }

    const { data: newOrder } = await axios.post(`${baseUrl}/orders`,
      {
        order: inputOrder.current.value,
        clientName: inputName.current.value
      })

    setOrders([...orders, newOrder])

    history.push("/pedidos")
  }

  return (
    <Container>
      <Image src={Logo} alt="Logo-Burguer" />
      <ContainerItens>

        <H1>Faça Seus Pedido</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Digite" required />

        <InputLabel>Seu Nome</InputLabel>
        <Input ref={inputName} placeholder="Digite" required />

        <Button onClick={addNewOrder}>
          Novo Pedido
        </Button>

      </ContainerItens>

    </Container >
  )
}

export default App