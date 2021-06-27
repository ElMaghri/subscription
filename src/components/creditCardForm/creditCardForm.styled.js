import { Button, FormControl, TextField } from '@material-ui/core'
import styled from 'styled-components'

export const Card = styled.div`
  width: 350px;
  height: 200px;
  background: #0f58ef;
  margin: 10px auto;
  border-radius: 8px;
  position: relative;
  ::before {
    top: -50px;
    right: -50px;
    content: '';
    width: 200px;
    height: 200px;
    opacity: 0.2;
    background: #fff;
    position: absolute;
    border-radius: 100%;
  }
  ::after {
    right: -50px;
    bottom: -50px;
    content: '';
    width: 150px;
    height: 150px;
    opacity: 0.2;
    background: #fff;
    position: absolute;
    border-radius: 100%;
  }
`
export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
`

export const TextInput = styled(TextField)`
  margin: 20px;
  width: 100%;
`
export const MonthsInputsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`
export const ContainerSelect = styled(FormControl)`
  min-width: 90px;
  margin-left: 15px;
`

export const CTA = styled(Button)`
  margin-top: 25px;
  align-self: flex-end;
`
