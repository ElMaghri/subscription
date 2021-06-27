import React from 'react'

export function RenderIf({ condition, children }) {
  if (condition) return children
  else return null
}

export function generateYears() {
  let years = []
  let start = new Date().getFullYear() % 1000
  for (let i = start; i <= 99; i++) {
    years.push(
      i.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }),
    )
  }
  return years
}
