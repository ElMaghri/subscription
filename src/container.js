import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import HorizontalStepper from './components/stepper'
import SubscriptionForm from './components/subscriptionForm'
import CreditCardForm from './components/creditCardForm'
import { RenderIf } from './utils'
import Confirmation from './components/confirmation'
import Infos from './components/infos'

export default function ContainerApp() {
  const JSON = {
    duration: 12,
    storage: 50,
    isUpFrontPayment: true,
  }

  const [appState, setAppState] = useState(JSON)
  const [activeStep, setActiveStep] = useState(0)

  const onSubmitStep = (formData) => {
    setAppState({ ...formData, ...appState })
    setActiveStep(activeStep + 1)
  }

  const onChangeStep = (index) => {
    if (index < activeStep) setActiveStep(index)
  }

  useEffect(async () => {
    const { subscription_plans: subscriptionPlans } = await fetch(
      'https://cloud-storage-prices-moberries.herokuapp.com/prices',
    ).then((data) => data.json())

    if (subscriptionPlans?.length) {
      setAppState({ ...appState, subscriptionPlans })
    }
  }, [])

  if (!appState.subscriptionPlans) return <div>Loading...</div>
  return (
    <AppContainer
      container
      direction='row'
      justify='center'
      alignItems='center'
    >
      <Grid
        container
        item
        md={8}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <HorizontalStepper
          activeStep={activeStep}
          onChangeStep={onChangeStep}
        />
        <RenderIf condition={activeStep === 0}>
          <SubscriptionForm onSubmitStep={onSubmitStep} />
        </RenderIf>

        <RenderIf condition={activeStep === 1}>
          <CreditCardForm onSubmitStep={onSubmitStep} />
        </RenderIf>

        <RenderIf condition={activeStep === 2}>
          <Confirmation values={appState} />
        </RenderIf>
      </Grid>

      <RenderIf condition={activeStep !== 2}>
        <Grid md={4} direction='column' justify='center' alignItems='center'>
          <Infos values={appState} />
        </Grid>
      </RenderIf>
    </AppContainer>
  )
}

const AppContainer = styled(Grid)`
  max-width: 800px;
  margin: 0 auto;
`
