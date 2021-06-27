import { Container } from '@material-ui/core'
import styled from 'styled-components'

export const InfosContainer = styled(Container)`
  border-radius: 10px;
  background: #e9ecef;
  max-width: 500px;
  padding: 50px 25px;
`

export const TextRow = styled.p`
  font-family: Roboto;
  font-size: 16px;
  line-height: normal;
  align-items: space-between;

  span {
    display: inline-block;
    font-weight: bolder;
    float: right;
  }
`
export const TotalPrice = styled(TextRow)`
  font-size: 22px;
`
