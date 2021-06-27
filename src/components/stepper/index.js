import React, { memo } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { Container, styled } from '@material-ui/core'

const STEPS = ['Subscription', 'Payment', 'Confirmation']

const HorizontalStepper = memo(function HorizontalStepper({
  activeStep = 0,
  onChangeStep,
}) {
  return (
    <ContainerStepper>
    <Stepper activeStep={activeStep} alternativeLabel>
      {STEPS.map((label, stepIndex) => (
        <Step key={label} onClick={() => onChangeStep(stepIndex)}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    </ContainerStepper>
  )
})

export default HorizontalStepper

const ContainerStepper = styled(Container)`
  width: 100%;
`
