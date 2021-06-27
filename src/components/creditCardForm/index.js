import { useMemo } from 'react'
import {
  Container,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@material-ui/core'
import * as S from './creditCardForm.styled'
import { generateYears } from '../../utils'
import { useForm } from 'react-hook-form'

const MONTHS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
]
const CreditCardForm = ({ onSubmitStep }) => {
  const YEARS = useMemo(generateYears, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data) => onSubmitStep(data)

  return (
    <Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.TextInput
          label='Full Name *'
          variant='outlined'
          placeholder='jhon Deo'
          error={!!errors.fullName}
          helperText={errors['fullName']?.message}
          {...register('fullName', {
            required: {
              value: true,
              message: 'This field cannot be left blank',
            },
          })}
        />

        <S.TextInput
          type='number'
          label='Card Number *'
          variant='outlined'
          placeholder='6011 1111 1111 1117'
          helperText={errors['cardNumber']?.message}
          error={!!errors['cardNumber']}
          {...register('cardNumber', {
            required: {
              value: true,
              message: 'This field cannot be left blank',
            },
            pattern: {
              value: /[0-9]{14,16}/,
              message: 'you should enter a number between 14 and 16 digits',
            },
          })}
        />

        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='baseline'
        >
          <TextField
            error={!!errors['cvv']}
            label='CVV *'
            variant='outlined'
            type='number'
            placeholder='123'
            {...register('cvv', {
              required: {
                value: true,
                message: 'This field cannot be left blank',
              },
              pattern: {
                value: /[0-9]{3}/,
                message: 'you should enter 3 digits',
              },
            })}
          />
          <S.MonthsInputsContainer>
            <S.ContainerSelect>
              <InputLabel id='demo-simple-select-label-month'>Month</InputLabel>
              <Select
                error={!!errors['month']}
                labelId='demo-simple-select-label-month'
                {...register('month', {
                  required: {
                    value: true,
                    message: 'This field cannot be left blank',
                  },
                })}
                variant='outlined'
              >
                {MONTHS.map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </S.ContainerSelect>
            <S.ContainerSelect>
              <InputLabel id='demo-simple-select-label-year'>Year</InputLabel>
              <Select
                error={!!errors['year']}
                labelId='demo-simple-select-label-year'
                name='year'
                {...register('year', {
                  required: {
                    value: true,
                    message: 'This field cannot be left blank',
                  },
                })}
                variant='outlined'
              >
                {YEARS.map((y) => (
                  <MenuItem key={y} value={y}>
                    {y}
                  </MenuItem>
                ))}
              </Select>
            </S.ContainerSelect>
          </S.MonthsInputsContainer>
        </Grid>
        <Button color='primary' variant='outlined' type='submit'>
          Pay
        </Button>
      </S.Form>
    </Container>
  )
}

export default CreditCardForm
