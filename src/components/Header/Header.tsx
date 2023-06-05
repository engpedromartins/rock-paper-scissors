import React from 'react'
import { Header, HeaderContent, WrapBetValue, StyledNumberInput } from './Header.style'

interface PropsAppBar {
}

export default function AppBar(props: PropsAppBar) {

  return (
    <Header>
      <HeaderContent>
        <h3>Balance:</h3>
        <span>5000</span>
        <WrapBetValue>
          <h3>Bet:</h3>
          <StyledNumberInput type="number" />
        </WrapBetValue>
        <h3>WIN</h3>
        <span>5000</span>

      </HeaderContent>
    </Header>
  )
}