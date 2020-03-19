import React from 'react'
import Container from './container'
import Navigation from './navigation'

const Template = (props) => {
  const { children } = props;
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  )
}

export default Template


