import React, { useState } from 'react'
import {
  Container,
  Slider,
  Typography,
  Switch,
  Button,
} from '@material-ui/core'
import * as S from './form.styled'
const DurationMarks = [
  {
    value: 3,
    label: '3 Months',
  },
  {
    value: 6,
    label: '6 Months',
  },
  {
    value: 12,
    label: '12 Months',
  },
]
const StorageMarks = [
  {
    value: 5,
    label: '5 Gb',
  },
  {
    value: 10,
    label: '10 Gb',
  },
  {
    value: 50,
    label: '50 Gb',
  },
]
export default function SubscriptionForm({ onSubmitStep }) {
  const [duration, setDuration] = useState(12)
  const [storage, setStorage] = useState(50)
  const [isUpFrontPayment, setIsUpFrontPayment] = useState(false)

  const HandleOnSubmitForm = () =>
    onSubmitStep({
      duration,
      storage,
      isUpFrontPayment,
    })

  return (
    <Container>
      <S.ContainerInput m={1}>
        <Typography id='discrete-slider-custom' gutterBottom>
          Duration
        </Typography>
        <Slider
          defaultValue={12}
          min={3}
          max={12}
          step={3}
          marks={DurationMarks}
          valueLabelDisplay='on'
          getAriaValueText={setDuration}
        />
      </S.ContainerInput>
      <Typography id='discrete-slider-custom' gutterBottom>
        Storage
      </Typography>
      <Slider
        defaultValue={50}
        min={5}
        max={50}
        step={5}
        marks={StorageMarks}
        valueLabelDisplay='on'
        getAriaValueText={setStorage}
        valueLabelDisplay='auto'
      />

      <Typography id='discrete-slider-custom' gutterBottom>
        upfront Payment
        <Switch
          value={isUpFrontPayment}
          onChange={() => setIsUpFrontPayment(!isUpFrontPayment)}
        />
      </Typography>

      <Button color='primary' variant='outlined' onClick={HandleOnSubmitForm}>
        order
      </Button>
    </Container>
  )
}
