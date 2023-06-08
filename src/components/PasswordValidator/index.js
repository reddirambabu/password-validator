// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  PasswordContainer,
  Heading,
  Paragraph,
  Input,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const passwordLength = password.length

  const onChangePassword = event => setPassword(event.target.value)

  const errorMsg =
    passwordLength < 8 ? 'Your password must be at least 8 characters' : ''

  return (
    <AppContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" onChange={onChangePassword} value={password} />
        <ErrorMessage>{errorMsg}</ErrorMessage>
      </PasswordContainer>
    </AppContainer>
  )
}

export default PasswordValidator
