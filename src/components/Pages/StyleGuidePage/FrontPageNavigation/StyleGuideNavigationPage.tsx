import React from 'react'
import CardListOnGrid from '../../../Organisms/CardListOnGrid'
import { useCardDataFoundations } from './cardDataFoundations'
import { useCardDataComponents } from './cardDataComponents'
import { Spacer } from 'src/components/Atoms/Spacer'

const StyleGuideNavigationPage: React.FC = () => {
  const cardDataFoundations = useCardDataFoundations()
  const cardDataComponents = useCardDataComponents()

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Saana Design System</h1>
      <Spacer height={'048px'} />
      <h2 style={{ textAlign: 'center' }}>Components</h2>
      <Spacer height={'018px'} />
      <CardListOnGrid cardData={cardDataComponents} />
      <Spacer height={'048px'} />
      <h2 style={{ textAlign: 'center' }}>Foundations</h2>
      <Spacer height={'018px'} />
      <CardListOnGrid cardData={cardDataFoundations} />
    </>
  )
}

export default StyleGuideNavigationPage
