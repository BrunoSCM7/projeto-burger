import styled from 'styled-components'
import Background from '../../assets/bg.png'


export const Container = styled.div`
  background: url('${Background}');
  background-size: cover;
  width: 414px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px 10px 10px 10px;
`

export const Image = styled.img`
  margin-top: 11px;
`

export const Order = styled.li`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 80px;
  border: none;
  outline: none;

  div {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  p {
    color: #fff;
  }

  p:nth-child(2) {
    font-weight: bolder;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`
