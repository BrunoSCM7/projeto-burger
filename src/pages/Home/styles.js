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
  height: 100vh;
  border-radius: 10px 10px 10px 10px;
`

export const Image = styled.img`
  margin-top: 11px;
`

export const InputLabel = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: #eee;
  margin-left: 25px;
`

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 34px;

  border: none;
  outline: none;

  font-size: 20px;
  color: #fff;
  line-height: 28px;
`

