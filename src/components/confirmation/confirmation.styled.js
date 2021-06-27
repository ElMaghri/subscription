import { TextField, Button } from '@material-ui/core'
import styled from 'styled-components'

export const TextInput = styled(TextField)`
  margin: 20px 0;
  width: 100%;
`
export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-around;
  align-items: flex-start;
`

export const CTA = styled(Button)`
  align-self: flex-end;
`
