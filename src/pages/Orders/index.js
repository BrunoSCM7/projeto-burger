import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Embalagem from '../../assets/order.svg'
import Lixo from '../../assets/lixo.svg'

import { H1 } from "../../components/Title/styles";
import ContainerItens from "../../components/ContainerItens";
import { Button } from "../../components/Button/styles"

import { Container, Image, Order } from './styles'

function Orders() {
  const [orders, setOrders] = useState([])
  const history = useHistory()

  const baseUrl = "https://api-node-hamburgueria.vercel.app"

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(`${baseUrl}/orders`)
      setOrders(newOrders)
    }
    fetchOrders()
  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`${baseUrl}/orders/${orderId}`) // deletando do backend
    const newOrders = orders.filter(order => order.id !== orderId)
    setOrders(newOrders)
  }

  function goBackPage() {
    history.push("/")
  }

  return (
    <Container>
      <Image src={Embalagem} alt="Logo-Burguer" />
      <ContainerItens isConfig={true}>

        <H1>Pedidos</H1>
        <ul>
          {
            orders.map(order => (
              <Order key={order.id}>
                <div>
                  <p>{order.order}</p>
                  <p>{order.clientName}</p>
                </div>
                <button onClick={() => deleteOrder(order.id)}>
                  <img src={Lixo} alt="Lata-de-Lixo" />
                </button>
              </Order>
            ))
          }
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItens>

    </Container >
  )
}

export default Orders