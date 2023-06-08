// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #24263c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const PasswordContainer = styled.div`
  background-color: #475569;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  justify-content: center;
`
export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  font-family: 'Roboto';
`

export const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #ffffff;
  font-family: 'Roboto';
`
export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  border-radius: 3px;
  height: 48px;
  outline: none;
  border: none;
`

export const ErrorMessage = styled(Paragraph)`
  font-size: 16px;
  color: red;
  margin-top: 10px;
`
