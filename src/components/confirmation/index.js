import React from 'react'
import { useForm } from 'react-hook-form'
import { Container, Checkbox, FormControlLabel } from '@material-ui/core'
import Infos from '../infos'
import * as S from './confirmation.styled'

const Confirmation = ({ values }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  })

  const onSubmit = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values, ...data }),
    }
    fetch('https://reqres.in/api/posts', requestOptions).then((res) => {
      if (res.status === 201) {
        console.log('your order is submited successfully ')
      }
      return res.json()
    })
  }
  return (
    <Container>
      <Infos values={values} />
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.TextInput
          type='email'
          label='Email Adress *'
          variant='outlined'
          placeholder='jhon@mail.com'
          error={!!errors.email}
          helperText={errors?.email?.message}
          {...register('email', {
            required: {
              value: true,
              message: 'This field cannot be left blank',
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'please enter a valid mail',
            },
          })}
        />
        <FormControlLabel
          control={
            <Checkbox
              value='accept terms and condition'
              inputProps={{ 'aria-label': 'primary checkbox' }}
              error={!!errors.acceptTerms}
              helperText={errors?.acceptTerms?.message}
              {...register('acceptTerms', {
                required: {
                  value: true,
                  message: 'can you confirm the terms',
                },
              })}
            />
          }
          label='accept the terms and conditions'
        />

        <S.CTA variant='outlined' type='submit' color='primary'>
          confirm
        </S.CTA>
      </S.Form>
    </Container>
  )
}

export default Confirmation
