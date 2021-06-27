import styled from 'styled-components'

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
