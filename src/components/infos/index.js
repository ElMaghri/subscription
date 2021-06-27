import React, { memo } from 'react'
import { Container, Divider } from '@material-ui/core'
import * as S from './infos.styled'
const Infos = memo(function Infos({ values }) {
  const { subscriptionPlans, duration, storage, isUpFrontPayment } = values
  const pricePerGB = subscriptionPlans?.filter(
    ({ duration_months }) => duration_months === duration,
  )[0].price_usd_per_gb

  const totalPrice = isUpFrontPayment
    ? pricePerGB * storage * 0.1
    : pricePerGB * storage

  return (
    <S.InfosContainer>
      <S.TextRow>
        selected Storage <span>{storage} GB</span>
      </S.TextRow>
      <S.TextRow>
        price per 1Gb <span>{pricePerGB.toFixed(2)} $</span>
      </S.TextRow>
      <Divider />
      <S.TotalPrice>
        Total <span>{totalPrice.toFixed(2)} $</span>
      </S.TotalPrice>
    </S.InfosContainer>
  )
})

export default Infos
