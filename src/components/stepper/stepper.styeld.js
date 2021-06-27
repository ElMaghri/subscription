import styled from 'styled-components'
import { Container } from '@material-ui/core'

export const ContainerStepper = styled(Container)`
  width: 100%;
`
export const Step = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  &::before {
    content: '';
    height: 6px;
    width: 100%;
    background: ${({ isActive }) => (isActive ? '#57C4E5' : 'black')};
    position: absolute;
    z-index: 0;
    top: 14px;
  }
`
export const Index = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  z-index: 1;
  background: white;
`
export const Label = styled.label`
  font-size: 14px;
  text-align: center;
`
