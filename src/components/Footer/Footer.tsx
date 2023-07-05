import React from 'react'
import { FooterContainer } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        Developed By{' '}
        <a href="https://github.com/matheusmazeto">Matheus Mazeto</a>
      </p>
    </FooterContainer>
  )
}

export default Footer
